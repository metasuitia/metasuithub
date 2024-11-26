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
    @IsObject()
    value: Value;
    @IsString()
    field: string;
}

export class Value {
    @IsString()
    messaging_product: string;
    @IsObject()
    metadata:          Metadata;
    @IsObject()
    contacts:          Contact[];
    @IsObject()
    messages:          Message[];
}

export class Contact {
    @IsObject()
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
    @IsObject()
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
