import { Inject, Injectable } from '@nestjs/common';
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';
import { MetaWhatsappMessageDTO } from './dto';
import { NATS_SERVICE } from 'src/config/services';
import { ClientProxy } from '@nestjs/microservices';
import { Request, Response } from "express";
import { envs } from 'src/config/envs';
import { WhatsappMessageHandler } from 'src/handlers/whatsapp';

@Injectable()
export class WhatsappService {
  /*********************************************************************
  Esta clase se encarga de recibir los mensajes de whatsapp 
  y segun su necesidad enviarlo al handler paraque se encarge de otras 
  funciones, esta clase es como la recepcion o el Hub de whatsapp
  por aca pasaran los mensajes de devuelta osea que es un paso obligado
  de entrada y salida de mensajes
  *********************************************************************/

  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy
  ) {}
  webhook(req:MetaWhatsappMessageDTO ):any {  
  const { entry } = req;
  const { changes } = entry[0];
  const { value } = changes[0];
  const { messages } = value;
  //numero al que envian el whatsapp
  //sera siempre el bot pero lo dejo escrito 
  const to = changes[0].value.metadata.display_phone_number
  //nombre del remitente del mensaje el cliente
  const name =changes[0].value.contacts[0].profile.name
  
  const handler = new WhatsappMessageHandler(messages[0],to ,name,this.client );
  handler.ClassifyMessage(messages[0]);
    return 'ok';
  }
  hooked(req:Request,res:Response) {
    const mode = req["hub.mode"];
    const token = req["hub.verify_token"];
    const challenge = req["hub.challenge"];
    if (mode === "subscribe" && token === envs.whatsappWebhookVerifyToken) {
     console.log('webhook verificado');
     return challenge
    } else {
      return 'error'
    } 
  }
  findOne(id: number) {
    return `This action returns a #${id} whatsapp`;
  }
  update(id: number, updateWhatsappDto: UpdateWhatsappDto) {
    return `This action updates a #${id} whatsapp`;
  }
  remove(id: number) {
    return `This action removes a #${id} whatsapp`;
  }
}
