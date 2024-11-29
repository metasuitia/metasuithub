import { Inject, Injectable } from '@nestjs/common';
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';
import { MetaWhatsappMessageDTO, webhookMessageWhatsappDto } from './dto';
import { NATS_SERVICE } from 'src/config/services';
import { ClientProxy } from '@nestjs/microservices';
import { Request, Response } from "express";
import { envs } from 'src/config/envs';
import { WhatsappMessageHandler } from 'src/handlers/whatsapp';

@Injectable()
export class WhatsappService {

  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy
  ) {}
  webhook(req:MetaWhatsappMessageDTO ):any {
    
    //se desfragmenta el req que es un mensaje de meta
  const { entry } = req;
  const { changes } = entry[0];
  const { value } = changes[0];
  const { messages } = value;

  const handler = new WhatsappMessageHandler(messages[0], );
  
   if (!handler.isworkingHours()) {
    
     return 'no es hora de responder'
   }

    // aqui va la logica para crear el webhook
    // usara la clase para validar y filtrar los mensajes
    return handler.sendMessage();
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
