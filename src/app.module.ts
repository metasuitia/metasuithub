import { Module } from '@nestjs/common';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { InstagramModule } from './instagram/instagram.module';

@Module({
  imports: [WhatsappModule, InstagramModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
