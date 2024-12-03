import { keywords } from "src/shared";
import { Message } from "src/whatsapp/dto";




export function getMessageType(message: Message){
  switch (true) {
    case !!message.text:
    const filtrado = findMenu(message.text.body);
    
      return {message, filtrado};
    case !!message.image:
      return 'image';
    case !!message.video:
      return 'video';
    case !!message.document:
      return 'document';
    case !!message.sticker:
      return 'sticker';
    default:
      return 'unknown';
  }
}


const findMenu = (message: string) => {
  const lowerCaseMessage = message.toLowerCase();
  let categoriaEncontrada = null;
  for (const [categoria, palabras] of Object.entries(keywords)) {
    if (palabras.some((palabra) => new RegExp(palabra, 'i').test(lowerCaseMessage))) {
      categoriaEncontrada = categoria;
      break;
    }
  }
  if (categoriaEncontrada) {
    const numeroCategoria = Object.keys(keywords).indexOf(categoriaEncontrada) + 1;
    return `${numeroCategoria}`;
  } else {
    return null;
  }
};

