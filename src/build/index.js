import { writeFile } from "fs";
import app from "../app/index.ts";
import { aotfn } from "@mapl/app";

writeFile(
  import.meta.dir + "/fetch.js",
  `import app from '../app/index.js';import {aotdeps} from '@mapl/app';export default await ${aotfn(app)}(...aotdeps(app));`,
  console.log,
);
