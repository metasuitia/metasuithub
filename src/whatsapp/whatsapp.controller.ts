import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';

import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';
import { webhookMessageWhatsappDto } from './dto';

@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly whatsappService: WhatsappService) {}

  @Post("/webhook")
  webhook(@Body() webhookMessageWhatsappDto: webhookMessageWhatsappDto) {
    return this.whatsappService.webhook(webhookMessageWhatsappDto);
  }

  @Get()
  findAll() {
    return this.whatsappService.findAll();
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
