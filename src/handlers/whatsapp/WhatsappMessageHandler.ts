import { WorkingHours } from "src/functions";
import { Message } from "src/whatsapp/dto";

export class WhatsappMessageHandler{

    //TODO: esta clase se encarga de mirar si estamos en horas laborales
    //TODO: se encargara de filtrar los mensajes
    //TODO: se encargara de responder mensajes basicos
    //TODO: se encargara de la comunicacion con nast

    //pasemosle el  array de mensajes y que de aqui el mire las horas 
    //y que tipo de mensaje es
    constructor(
        private readonly whatsappMessage: Message 
    ){}

    isworkingHours(){
        //aqui ira la  logica de si estamos en horario 
       return WorkingHours()
       
        
    }

    sendMessage(){
        return(`mensaje de ${this.whatsappMessage.from} de tipo ${this.whatsappMessage.type}`);
    }
    
}