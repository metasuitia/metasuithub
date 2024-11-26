import { Inject, Injectable } from '@nestjs/common';
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';
import { webhookMessageWhatsappDto } from './dto';
import { NATS_SERVICE } from 'src/config/services';
import { ClientProxy } from '@nestjs/microservices';
import { Request, Response } from "express";
import { envs } from 'src/config/envs';

@Injectable()
export class WhatsappService {

  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy
  ) {}
  webhook(req: Request, res: Response) {
 const payload= req.body;
  console.log(payload);
    // aqui va la logica para crear el webhook
    // usara la clase para validar y filtrar los mensajes
    return 'aqui esta el nuevo webhook de whatsapp';
  }

  hooked(req:Request,res:Response) {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];
  
    if (mode === "subscribe" && token === envs.whatsappWebhookVerifyToken) {
      
      res.status(200).send(challenge);
      console.log("Webhook verified successfully!");
    } else {
      
      res.sendStatus(403);
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
