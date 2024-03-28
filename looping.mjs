import fs from "node:fs";
import { getInfoFromOs } from "./get-info-from-os.mjs";

export function looping() {
  setInterval(() => {
    const platform = getInfoFromOs().platform;
    const arch = getInfoFromOs().arch;
    const cpuModel = getInfoFromOs().cpuModel;
    const formattedRunningTime = getInfoFromOs().formattedRunningTime;
    const usedMemory = getInfoFromOs().usedMemory;

    const logs = `
{
  "plataform": "${platform}",
  "arch": "${arch}",
  "cpu": "${cpuModel}",
  "running time": "${formattedRunningTime}",
  "used memory": "${usedMemory}",
},`;

    try {
      fs.appendFileSync("./log.txt", logs, "utf-8");
    } catch (error) {
      console.error(`Erro ao escrever arquivo: ${error.message}`);
    }
  }, 1000);
}
