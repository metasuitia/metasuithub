import { IsObject, IsString } from "class-validator";

export class MetaWhatsappMessageDTO {

    
    object: string;
    
    entry:  Entry[];
}

export class Entry {
   
    id:      string;
   
    changes: Change[];
}

export class Change {
    
    value: Value;
   
    field: string;
}

export class Value {
  
    messaging_product: string;
   
    metadata:          Metadata;
  
    contacts:          Contact[];
   
    messages:          Message[];
}

export class Contact {

    profile: Profile;
    
    wa_id:   string;
}

export class Profile {
  
    name: string;
}

export class Message {
   
    from:      string;
    
    id:        string;
    
    timestamp: string;
  
    text:      Text;
    
    type:      string;
}

export class Text {
    
    body: string;
}

export class Metadata {
    
    display_phone_number: string;
    
    phone_number_id:      string;
}
