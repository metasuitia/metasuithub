import { IsString, ValidateNested, IsArray } from 'class-validator';

export class Profile {
  @IsString()
  name: string;
}

export class Text {
  @IsString()
  body: string;
}

export class Metadata {
  @IsString()
  display_phone_number: string;

  @IsString()
  phone_number_id: string;
}

export class Value {
  @IsString()
  messaging_product: string;

  @ValidateNested()
  metadata: Metadata;

  @ValidateNested({ each: true })
  @IsArray()
  contacts: Contact[];

  @ValidateNested({ each: true })
  @IsArray()
  messages: Message[];
}

export class Contact {
  @ValidateNested()
  profile: Profile;

  @IsString()
  wa_id: string;
}

export class Message {
  @IsString()
  from: string;

  @IsString()
  id: string;

  @IsString()
  timestamp: string;

  @ValidateNested()
  text: Text;

  @IsString()
  type: string;
}

export class Change {
  @ValidateNested()
  value: Value;

  @IsString()
  field: string;
}

export class Entry {
  @IsString()
  id: string;

  @ValidateNested({ each: true })
  @IsArray()
  changes: Change[];
}

export class MetaWhatsappMessageDTO {
  @IsString()
  object: string;

  @ValidateNested({ each: true })
  @IsArray()
  entry: Entry[];
}