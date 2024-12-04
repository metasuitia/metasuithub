import { keywords } from "src/shared";
import { Message } from "src/whatsapp/dto";

export function getMessageType(message) {
  if (message.text) {
    const messageBody = findMenu(message.text.body);
    return messageBody !== null ? messageBody : '1';
  }
  if (message.image) return '1';
  if (message.audio) return '1';
  if (message.video) return '1';
  if (message.document) return '1';
  if (message.sticker) return '1';
  return 'unknown';
}

const findMenu = (message) => {
  const lowerCaseMessage = message.toLowerCase();
  const categoriaEncontrada = Object.entries(keywords).find(([categoria, palabras]) =>
    palabras.some((palabra) => new RegExp(palabra, 'i').test(lowerCaseMessage))
  );

  if (categoriaEncontrada) {
    const [categoria] = categoriaEncontrada;
    const numeroCategoria = Object.keys(keywords).indexOf(categoria) + 1;
    console.log(`El número de categoría es: ${numeroCategoria}`);
    return `${numeroCategoria}`;
  } else {
    return null;
  }
};

