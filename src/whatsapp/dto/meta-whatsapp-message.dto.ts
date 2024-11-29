import { IsString, ValidateNested, IsArray, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class Profile {
  @IsString()
  name: string;
}

export class Text {
  @IsString()
  body: string;
 
}

export class Image {
  @IsString()
  mime_type: string;
  @IsString()
  sha256: string;
  @IsString()
  id: string;
}
export class Video {
  @IsString()
  mime_type: string;
  @IsString()
  sha256: string;
  @IsString()
  id: string;
}

export class Context {
 @IsString()
 from: string;

 @IsString()
 id: string
}
export class Document {
  @IsString()
  filename: string;
  @IsString()
  mime_type: string;
  @IsString()
  sha256: string;
  @IsString()
  id: string;
}

export class Sticker {
  @IsString()
  mime_type: string;
  @IsString()
  sha256: string;
  @IsString()
  id: string;
  @IsBoolean()
  animated: boolean
}

export class Metadata {
  @IsString()
  display_phone_number: string;

  @IsString()
  phone_number_id: string;
}

export class Contact {

  @ValidateNested()
  @Type(() => Profile)
  profile: Profile;

  @IsString()
  wa_id: string;
}

export class Message {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Context)
  context: Context[];

  @IsString()
  from: string;

  @IsString()
  id: string;

  @IsString()
  timestamp: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Text)
  text: Text;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Image)
  image: Image;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Video)
  video: Video;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Document)
  document: Document;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Sticker)
  sticker: Sticker;


  @IsString()
  type: string;
}

export class Value {
  @IsString()
  messaging_product: string;

  @ValidateNested()
  @Type(() => Metadata)
  metadata: Metadata;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => Contact)
  contacts: Contact[];

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => Message)
  messages: Message[];
}

export class Change {
  @ValidateNested()
  @Type(() => Value)
  value: Value;

  @IsString()
  field: string;
}

export class Entry {
  @IsString()
  id: string;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => Change)
  changes: Change[];
}

export class MetaWhatsappMessageDTO {
  @IsString()
  object: string;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => Entry)
  entry: Entry[];
}
