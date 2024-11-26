import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { Request, Response } from "express";
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';
import { webhookMessageWhatsappDto } from './dto';

@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly whatsappService: WhatsappService) {}

  @Post("/webhook")
  webhook(@Body() req:Request,res:Response) {
    return this.whatsappService.webhook(req,res);
  }

  @Get("/webhook")
  gethook(@Body() req:Request,res:Response) {
    return this.whatsappService.hooked(req,res);
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
