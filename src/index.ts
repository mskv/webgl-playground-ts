import { main } from "./main";

try {
  main();
} catch (error) {
  // tslint:disable-next-line:no-console
  console.error("Exiting", error);
}
