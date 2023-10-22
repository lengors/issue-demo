export * from "./core";
export * from "./test";

import { bootstrap } from "./core/bootstrap";
import { shutdown } from "./core/shutdown";
import { test } from "./test";

export default {
  bootstrap,
  shutdown,
  test,
};
