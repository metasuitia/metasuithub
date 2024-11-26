import { IsObject, IsString } from "class-validator";

export class MetaWhatsappMessageDTO {

    @IsString()
    object: string;
    @IsObject()
    entry:  Entry[];
}

export class Entry {
    @IsString()
    id:      string;
    @IsObject()
    changes: Change[];
}

export class Change {
    
    value: Value;
    @IsString()
    field: string;
}

export class Value {
    @IsString()
    messaging_product: string;
   
    metadata:          Metadata;
    @IsObject()
    contacts:          Contact[];
    @IsObject()
    messages:          Message[];
}

export class Contact {

    profile: Profile;
    @IsString()
    wa_id:   string;
}

export class Profile {
    @IsString()
    name: string;
}

export class Message {
    @IsString()
    from:      string;
    @IsString()
    id:        string;
    @IsString()
    timestamp: string;
  
    text:      Text;
    @IsString()
    type:      string;
}

export class Text {
    @IsString()
    body: string;
}

export class Metadata {
    @IsString()
    display_phone_number: string;
    @IsString()
    phone_number_id:      string;
}
