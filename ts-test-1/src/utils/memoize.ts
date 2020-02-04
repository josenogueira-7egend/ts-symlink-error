import memoize from "lodash-es/memoize";

/**
 * This function uses the memoize, from "lodash-es/memoize"
 * Returns the value of the memoized function {5}
 */
export const functionUsingMemoize = () => {
    const k = memoize(() => 5)
    return k
}

/** Export memoize from "lodash-es/memoize" */
export { memoize };
