# setup-polly-jest-constructor-error

Testing https://github.com/gribnoysup/setup-polly-jest/issues/5

## Setup and Running

Ensure you have [Node.js](https://nodejs.org/en/) `>= 12.10.x` and [yarn](https://yarnpkg.com/lang/en/) installed. Then:

1. Clone the project
2. Install dependencies:

    ```shell
    cd setup-polly-jest-constructor-error
    yarn
    ```
3. Run the tests:

    ```shell
    yarn test
    ```

    Or run them individually:

    ```shell
    # 0.5.2
    yarn jest setup-polly-jest-0.5.2/index.test.js
    # ...

    # 0.5.3-issue-5.0
    yarn jest setup-polly-jest-0.5.3-issue-5.0/index.test.js
    ```

## Output

### 0.5.2

```shell
$ yarn --silent jest setup-polly-jest-0.5.2/index.test.js
(node:3355) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'stop' of null
(node:3355) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 3)
(node:3355) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
 FAIL  setup-polly-jest-0.5.2/index.test.js
  sample
    ✕ assertion (91ms)

  ● sample › assertion

    PollyError: [Polly] Persister matching the name `fs-whoops` was not registered.

      at Object.assert (node_modules/@pollyjs/utils/src/utils/assert.js:5:11)

  ● sample › assertion

    TypeError: Cannot read property 'configure' of null

      27 |
      28 |   test("assertion", async () => {
    > 29 |     context.polly.configure({
         |                   ^
      30 |       recordIfMissing: true
      31 |     });
      32 |

      at Object.configure (setup-polly-jest-0.5.2/index.test.js:29:19)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.655s, estimated 1s
Ran all test suites matching /setup-polly-jest-0.5.2\/index.test.js/i.
error Command failed with exit code 1.
```

### 0.5.3-issue-5.2

```shell
$ yarn --silent jest setup-polly-jest-0.5.3-issue-5.4/index.test.js
 FAIL  setup-polly-jest-0.5.3-issue-5.4/index.test.js
  sample
    ✕ assertion (85ms)

  ● sample › assertion

    TypeError: Cannot read property 'configure' of null

      27 |
      28 |   test("assertion", async () => {
    > 29 |     context.polly.configure({
         |                   ^
      30 |       recordIfMissing: true
      31 |     });
      32 |

      at Object.configure (setup-polly-jest-0.5.3-issue-5.4/index.test.js:29:19)

  ● sample › assertion

    PollyError: [Polly] Persister matching the name `fs-whoops` was not registered. Check `setupPolly` method and make sure it's configured correctly.

      at Object.assert (node_modules/@pollyjs/utils/src/utils/assert.js:5:11)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.623s, estimated 2s
Ran all test suites matching /setup-polly-jest-0.5.3-issue-5.4\/index.test.js/i.
error Command failed with exit code 1.
```