import { map, isNil } from "lodash";
import { CURRENT_API_VERSION } from "@monoprac/common";
const app = Array.from(Array(10), (_) => 0);

(async () => {
  console.log(CURRENT_API_VERSION);
  console.log(isNil("3457"));
  console.log(map(app, (val) => 1));
})();

export default app;
