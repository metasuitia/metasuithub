import { Injectable } from '@nestjs/common';
import { CreateWhatsappDto } from './dto/create-whatsapp.dto';
import { UpdateWhatsappDto } from './dto/update-whatsapp.dto';

@Injectable()
export class WhatsappService {
  webhook(createWhatsappDto: CreateWhatsappDto) {

    // aqui va la logica para crear el webhook
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
