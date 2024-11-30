import { Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { WorkingHours } from "src/functions";
import { Message } from "src/whatsapp/dto";

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

    isworkingHours(){
        //aqui ira la  logica de si estamos en horario 
        if (WorkingHours()) {
            
            console.log(`se enviara el evento al nast ${this.whatsappMessage}`);
            
            return true;
        }
        return false;
        
    }

    sendMessage(){
        this.sendEvent();
        return(`mensaje de ${this.whatsappMessage.from} de tipo ${this.whatsappMessage.type}`);
    }

    sendEvent() {
         if (this.client) { 
            // Asegurarse de que 'client' está definido
             return this.client.emit('whatsapp.message', this.whatsappMessage); 
            } else { console.error('ClientProxy no está definido');
                 return 'Error: ClientProxy no está definido'; } }

    
}