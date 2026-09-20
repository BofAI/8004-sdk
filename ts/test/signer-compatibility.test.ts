import test from "node:test";
import assert from "node:assert/strict";
import { SDK } from "../src/index.js";

test("SDK does not expose signer credentials as a public property", () => {
  const sdk = new SDK({
    network: "base",
    rpcUrl: "http://unused.invalid",
    signer: "0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  });

  assert.equal("signer" in sdk, false);
  assert.equal(JSON.stringify(sdk).includes("0123456789abcdef"), false);
});

test("TRON private-key compatibility does not store the key in TronWeb", () => {
  const privateKey = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";
  const sdk = new SDK({ network: "tron:nile", rpcUrl: "http://unused.invalid", signer: privateKey });

  assert.equal((sdk.chain as any).tronWeb?.defaultPrivateKey, false);
});

test("SDK does not expose a raw typed-data signing method", () => {
  const sdk = new SDK({ network: "base", rpcUrl: "http://unused.invalid" });

  assert.equal("signAgentWalletBinding" in sdk, false);
});

for (const network of ["base", "tron:nile"]) {
  test(`${network} rejects custom signer objects instead of accepting an unsupported adapter`, () => {
    assert.throws(() => new SDK({ network, rpcUrl: "http://unused.invalid", signer: { address: "unsupported", signTransaction: async () => "unused" } as never }), /signer must be a private-key string/);
  });
}
