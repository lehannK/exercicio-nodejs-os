import os from "os";

export function getInfoFromOs() {
  const platform = os.platform();
  const arch = os.arch();
  const cpuModel = os.cpus()[0].model;

  const runningTimeInSeconds = os.uptime();
  const hours = Math.floor(runningTimeInSeconds / 3600);
  const minutes = Math.floor((runningTimeInSeconds % 3600) / 60);
  const seconds = Math.floor(runningTimeInSeconds % 60);
  const formattedRunningTime = `${hours}h${minutes}m${seconds}s`;

  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = `${(
    ((totalMemory - freeMemory) / totalMemory) *
    100
  ).toFixed(1)}%`;

  return { platform, arch, cpuModel, formattedRunningTime, usedMemory };
}
