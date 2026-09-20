# Release v1.2.0

BankOfAI 8004 SDK v1.2.0 expands the TypeScript SDK to the official Registry
v2 interfaces across Base, BNB Smart Chain, and TRON while keeping the Python
and TypeScript package versions aligned.

## Highlights

- Added Base Mainnet and Base Sepolia support with official ERC-8004 Registry
  deployments and ABIs.
- Added complete Registry read APIs, registration overloads, agent URI and
  ownership reads, transfers, and per-agent/operator approval management.
- Synchronized the TRON Identity, Reputation, and Validation Registry ABIs with
  the deployed TRC-8004 v2 contracts on Mainnet, Nile, and Shasta.
- Added canonical `registration-v1` parsing and serialization for EVM and TRON,
  including services, registrations, and `x402Support`.
- Made two-stage IPFS registration safe to retry without uploading or
  broadcasting the URI binding transaction more than once.
- Preserved private-key signer compatibility and kept signer credentials out of
  the public SDK surface.
- Updated TypeScript runtime dependencies to compatible patched releases.

## Installation

### TypeScript

```bash
npm install @bankofai/8004-sdk@1.2.0
```

## Notes

- The TypeScript SDK requires Node.js 20 or newer.
- The Python source package version is aligned at 1.2.0 and its wheel has been
  verified locally, but the current release workflow publishes only npm.
- Custom external signer objects from the beta are not part of the stable API;
  configure the SDK with a private-key string and keep wallet adapters in the
  consuming application.
- Agent IDs remain chain-aware. Persist and parse the complete canonical ID.

**Full changelog:** https://github.com/BofAI/8004-sdk/compare/v1.1.2...v1.2.0
