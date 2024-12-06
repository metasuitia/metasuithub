import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";
import { Message } from "./meta-whatsapp-message.dto";
import { Type } from "class-transformer";


export class storageMessage {

    @ValidateNested({ each: true })
    @IsArray()
    @Type(() => Message)
    whatsappMessage: Message;

    @IsString()
    to: string;

    @IsString()
    name: string;

    @IsString()
    agentType: string

}

export class NewFilteredMessageDto{

    @ValidateNested({ each: true })
    @IsArray()
    filteredMessage: storageMessage
   

}