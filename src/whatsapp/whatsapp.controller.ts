import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { Request, Response } from "express";
import { MetaWhatsappMessageDTO } from './dto';

@Controller('whatsapp')
export class WhatsappController {
  /**********************************************************************
  Hibrido de microservicios y Rest api  aqui recibimos los mensajes
  del whatsapp por webhook y los enviamos a los microservicios
  y aqui recibire mensajes de los mircoservicios y los enviamos a whatsapp
  ***********************************************************************/
  constructor(private readonly whatsappService: WhatsappService) {}

  @Post("/webhook")
  webhook(@Body() req:MetaWhatsappMessageDTO ,res:Response) {
    console.log("mensaje recibido");
    const response = this.whatsappService.webhook(req);
    return response 
  }

  @Get("/webhook")
  gethook(@Query() req:Request,res:Response) {
    const response =this.whatsappService.hooked(req,res)
    return response 
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whatsappService.findOne(+id);
  }
  
 
}
