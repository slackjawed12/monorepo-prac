import { map } from "lodash";
const app = Array.from(Array(10), (_) => 0);

(async () => {
  console.log(
    map(app, (val) => {
      1;
    })
  );
})();

export default app;
