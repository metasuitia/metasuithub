import { Injectable } from '@nestjs/common';
import { UpdateInstagramDto } from './dto/update-instagram.dto';
import { webhookMessageInstagramDto } from './dto';

@Injectable()
export class InstagramService {
  webhook(webhookMessageInstagramDto:  webhookMessageInstagramDto) {
    return 'aqui esta el webhook de instagram';
  }

  findAll() {
    return `This action returns all instagram`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instagram`;
  }

  update(id: number, updateInstagramDto: UpdateInstagramDto) {
    return `This action updates a #${id} instagram`;
  }

  remove(id: number) {
    return `This action removes a #${id} instagram`;
  }
}
