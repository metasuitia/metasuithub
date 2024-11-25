import { Injectable } from '@nestjs/common';
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';
import { webhookMessageWhatsappDto } from './dto';

@Injectable()
export class WhatsappService {
  webhook(webhookMessageWhatsappDto: webhookMessageWhatsappDto) {

    // aqui va la logica para crear el webhook
    //usara la clase para validar y filtrar los mensajes
    return 'aqui esta el nuevo webhook de whatsapp';
  }

  findAll() {
    return `This action returns all whatsapp`;
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
