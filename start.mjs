import fs from "node:fs";
import path from "node:path";

export function start() {
  try {
    if (fs.existsSync(path.join(".", "logs"))) {
      console.error("Diretório 'logs' já existe");
    } else {
      fs.mkdirSync("logs");
      fs.writeFileSync(path.join(".", "logs", "logs.txt"), "", "utf-8");
    }
  } catch (error) {
    console.error(`${error.message}`);
  }
}
