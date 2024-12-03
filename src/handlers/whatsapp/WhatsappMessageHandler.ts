import { Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { envs } from "src/config/envs";

import { WorkingHours } from "src/functions";
import { Message } from "src/whatsapp/dto";
import { agent } from "supertest";

@Injectable()
export class WhatsappMessageHandler{
 
    //TODO: se encargara de filtrar los mensajes
    //pasemosle el  array de mensajes y que de aqui el mire las horas 
    //y que tipo de mensaje es

    //TODO: si no estamos en horas laborales igual enviara a nats 
    //1 se categorizara el mensaje 
    //2 se envia a nats
    //3 si el bot puede contestar algo facil lo hara se guardara
    //4 el hub es el sitio donde se envian mensajes asi que este respondera
    
    constructor(
        private readonly whatsappMessage: Message, 
        
        private readonly client: ClientProxy
    ){
       
    }

    ClassifyMessage(whatsappMessage: Message){

        const{ type } = whatsappMessage
        switch (type) {
            case 'text':
                //TODO: se encargara de clasificar el mensaje 
             
                const newfilteredMessage = {
                    to: envs.bot_number,
                    from: whatsappMessage.from,
                    type: 'text',
                    text: {
                        body: whatsappMessage.text.body
                    },
                    agenttype: 1, //este sera al agente que le llegara el mensaje

                }
                
                this.sendEvent(newfilteredMessage);
                console.log("Evento enviado")
                //Todo: usara el isWorking hours
                break;
            case 'image':
                //TODO: se encargara de clasificar el mensaje 
                //Todo: usara el isWorking hours
                break;
            case 'audio':
                //TODO: se encargara de clasificar el mensaje 
                //Todo: usara el isWorking hours
                break;
            case 'video':
                //TODO: se encargara de clasificar el mensaje
                //Todo: usara el isWorking hours
                break;
            case 'document':
                //TODO: se encargara de clasificar el mensaje 
                //Todo: usara el isWorking hours
                break;
            case 'sticker':
                //TODO: se encargara de clasificar el mensaje 
                //Todo: usara el isWorking hours
                break;
            case 'reaction':
                //TODO: se encargara de clasificar el mensaje 
                //Todo: usara el isWorking hours
                break;
           
        }

        //Todo: se encargara de clasificar el mensaje 
        //Todo: usara el isWorking hours
    }

    isworkingHours(){
        //aqui ira la  logica de si estamos en horario 
        if (WorkingHours()) {
            
            console.log(`se enviara el evento al nast ${this.whatsappMessage}`);
            
            return true;
        }
        return false;
        
    }

    sendMessage(){
        
        return(`mensaje de ${this.whatsappMessage.from} de tipo ${this.whatsappMessage.type}`);
    }

    sendEvent(newfilteredMessage: any) {
         if (this.client) { 
            // Asegurarse de que 'client' está definido
             return this.client.emit('whatsapp.message', newfilteredMessage); 
            } else { console.error('ClientProxy no está definido');
                 return 'Error: ClientProxy no está definido'; } }

    
}