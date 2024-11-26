import { Module } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { WhatsappController } from './whatsapp.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [WhatsappController],
  providers: [WhatsappService],
  imports: [NatsModule],
})
export class WhatsappModule {}
