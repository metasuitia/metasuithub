import 'dotenv/config';
import * as joi from 'joi';

interface EnvConfig {
    PORT: number;
    NATS_SERVERS: string[];
    WHATSAPP_WEBHOOK_VERIFY_TOKEN: string;
}

const envVarsSchema = joi.object({
    PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items( joi.string() ).required(),
    WHATSAPP_WEBHOOK_VERIFY_TOKEN: joi.string().required(),
})
.unknown(true);

const { error, value } = envVarsSchema.validate({
    ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(',')
});

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
const envVars: EnvConfig = value;

export const envs={
port: envVars.PORT,
natsServers: envVars.NATS_SERVERS,
whatsappWebhookVerifyToken: envVars.WHATSAPP_WEBHOOK_VERIFY_TOKEN
}