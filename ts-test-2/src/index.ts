/**
 * This file is used as a POC that we can't symlinks, between packages during development, with typescript
 */
import { helloWorld } from "@test/ts-test-1/src";
import { memoize, functionUsingMemoize } from "@test/ts-test-1/src/utils"

export const x = helloWorld("test");

/**
 * Using a external memoize from linked package...
 * 
 * This is from the @test/ts-test-1 package
 */
export const y = memoize(() => 2);

/**
 * Using a external function, from linked package, that uses the memoize...
 * 
 * This is from the @test/ts-test-1 package
 */
export const k = functionUsingMemoize();
