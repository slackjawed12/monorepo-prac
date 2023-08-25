import { map, isNil } from "lodash";
import { CURRENT_API_VERSION } from "@monoprac/common";
import { resolve } from "path";
const app = Array.from(Array(10), (_) => 0);

(async () => {
  console.log(resolve(__dirname, "../../../../.pnp.cjs"));
  console.log(CURRENT_API_VERSION);
  console.log(isNil("3457"));
  console.log(map(app, (val) => 1));
})();

export default app;
