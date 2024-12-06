import { Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { WorkingHours } from "src/functions";
import { getMessageType } from "src/functions/classifyMessageType";
import { Message } from "src/whatsapp/dto";


@Injectable()
export class WhatsappMessageHandler{
    /********************************************************************* 
    Esta clase se encarga de filtrar y clasificar los mensajes
    es como el que resibe los mensajes los observa y los coloca en el 
    lugar que corresponde incluso mira la hora y segun eso lo envia a un 
    lado u otro, separe todo tipo de mensaje por que aun no he decidio
    si lo envio todo al storage o dependiendo de que cosa
    lo envio a otro lado
    *********************************************************************/
    constructor(
        
        private readonly whatsappMessage: Message,
        private readonly to: string,
        private readonly name: string, 
        private readonly client: ClientProxy

    ){
       
    }

    ClassifyMessage(whatsappMessage: Message){

        const{ type } = whatsappMessage
        switch (type) {
            case 'text':
             const filteredMessage = getMessageType(whatsappMessage);
                console.log(filteredMessage);
                this.messageScheduler({
                    ...whatsappMessage,
                    to: this.to,
                    name: this.name,
                    agentType: filteredMessage
                });
                break;
            case 'image':
               let filteredImage= getMessageType(whatsappMessage);
               this.messageScheduler({
                ...whatsappMessage,
                to: this.to,
                name: this.name,
                agentType: filteredImage
            });
                break;
            case 'audio':
              let filteredAudio= getMessageType(whatsappMessage);
              this.messageScheduler({
                ...whatsappMessage,
                to: this.to,
                name: this.name,
                agentType: filteredAudio
            });
                break;
            case 'video':
               let filteredVideo= getMessageType(whatsappMessage);
               this.messageScheduler({
                ...whatsappMessage,
                to: this.to,
                name: this.name,
                agentType: filteredVideo
            });
                break;
            case 'document':
             let filteredDocument=   getMessageType(whatsappMessage);
                this.messageScheduler({
                    ...whatsappMessage,
                    to: this.to,
                    name: this.name,
                    agentType: filteredDocument
                });
                break;
            case 'sticker':
               let filteredSticker= getMessageType(whatsappMessage);
               this.messageScheduler({
                ...whatsappMessage,
                to: this.to,
                name: this.name,
                agentType: filteredSticker
            });
                break;
            case 'reaction':
                let filteredReaction= getMessageType(whatsappMessage);
                this.messageScheduler({
                    ...whatsappMessage,
                    to: this.to,
                    name: this.name,
                    agentType: filteredReaction
                });
                break;
        }
    }

    messageScheduler(newfilteredMessage: any) {
         if (this.client) { 
            if (WorkingHours){
                return this.client.emit('whatsapp.eventMessage', newfilteredMessage)}
            else
                return this.client.send('whatsapp.sendMessage', newfilteredMessage)
         }
         else { console.error('ClientProxy no está definido');
                return 'Error: ClientProxy no está definido'; } }

    
}