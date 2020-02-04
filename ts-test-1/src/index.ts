import { memoize } from "./utils"

/** Hello World memoized function */
export const helloWorld = memoize((param: string) => param);
