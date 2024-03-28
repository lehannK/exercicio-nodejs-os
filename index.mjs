import fs from "node:fs";
import { looping } from "./looping.mjs";

export function createFile() {
  try {
    fs.writeFileSync("./log.txt", "utf-8");
  } catch (error) {
    console.error(`Erro ao escrever arquivo: ${error.message}`);
  }
}

looping();
