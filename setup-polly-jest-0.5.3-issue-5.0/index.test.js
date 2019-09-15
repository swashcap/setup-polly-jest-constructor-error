/**
 * This is a basic PollyJS test with Jest that should fail due to a misspelled
 * `persister` option.
 *
 * {@link https://netflix.github.io/pollyjs/#/examples?id=jest-node-fetch}
 */
const FSPersister = require("@pollyjs/persister-fs");
const NodeHttpAdapter = require("@pollyjs/adapter-node-http");
const fetch = require("node-fetch");
const path = require("path");
const { Polly } = require("@pollyjs/core");
const { setupPolly } = require("setup-polly-jest");

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

describe("sample", () => {
  const context = setupPolly({
    adapters: ["node-http"],
    persister: "fs-whoops", // <--- This should cause an error
    persisterOptions: {
      fs: {
        recordingsDir: path.join(__dirname, "__recordings__")
      }
    }
  });

  test("assertion", async () => {
    context.polly.configure({
      recordIfMissing: true
    });

    const response = fetch("http://httpbin.org/get");

    expect(response.ok).toBeTruthy();

    expect((await response.json()).url).toMatchSnapshot();
  });
});
