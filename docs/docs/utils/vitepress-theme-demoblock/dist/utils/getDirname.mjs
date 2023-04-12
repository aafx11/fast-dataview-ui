import { fileURLToPath } from "url";
import path from "path";
export const getDirname = (importMetaUrl) => path.dirname(fileURLToPath(importMetaUrl));
