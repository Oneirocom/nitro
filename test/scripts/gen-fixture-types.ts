import { fileURLToPath } from "mlly";
import { createNitro, writeTypes } from "nitro/core";
import { resolve } from "pathe";
import { scanHandlers } from "../../src/core/scan";
import { scanMagickPaths } from "../../src/core/scan-magick";

const prepare = async () => {
  const fixtureDir = fileURLToPath(new URL("../fixture", import.meta.url).href);

  const nitro = await createNitro({
    rootDir: fixtureDir,
    serveStatic: true,
    output: { dir: resolve(fixtureDir, ".output", "types") },
  });

  await scanHandlers(nitro);
  await scanMagickPaths(nitro);
  await writeTypes(nitro);
};

prepare();
