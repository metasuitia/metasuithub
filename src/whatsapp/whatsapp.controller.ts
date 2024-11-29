import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { Request, Response } from "express";
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';
import { MetaWhatsappMessageDTO, webhookMessageWhatsappDto } from './dto';

@Controller('whatsapp')
export class WhatsappController {
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhatsappDto: UpdateWhatsappDto) {
    return this.whatsappService.update(+id, updateWhatsappDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whatsappService.remove(+id);
  }
}
