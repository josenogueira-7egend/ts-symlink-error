# Typescript Symlink Error

### This repository is used as a POC to show that typescript currently, is having an issue with symlink between packages

Related to <a href="https://github.com/microsoft/TypeScript/issues/29808">#29808</a> (Package dependencies and The inferred type of ... cannot be named without a reference to...)

## To initialize the project!

> 1. run `npm instal` in both folders (ts-test-1, ts-test-2)
> 2. run `npm link` in **/ts-test-1** folder
> 3. run `npm link @test/ts-test-1` in **/ts-test-2** folder

Finally you will see an error if you try to build the **/ts-test-2** folder

**Attention**: This is not to blame anyone, is only used as a POC.
