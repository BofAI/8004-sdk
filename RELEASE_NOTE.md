# Release v1.2.1

BankOfAI 8004 SDK v1.2.1 updates the supported Node.js runtime baselines to
the security-fixed patch releases for the Node.js 22, 24, and 26 release
lines.

## Highlights

- Pinned TypeScript CI to Node.js `22.23.4`, `24.22.1`, and `26.12.1`.
- Pinned npm publishing to Node.js `22.23.4`.
- Raised package engine floors so vulnerable patch levels in each supported
  Node.js release line are rejected during installation.
- Preserved the stable `TS SDK` required check while validating all three
  supported Node.js release lines.

## Installation

### TypeScript

```bash
npm install @bankofai/8004-sdk@1.2.1
```

## Notes

- The TypeScript SDK supports Node.js `>=22.23.4 <23`, `>=24.22.1 <25`, or
  `>=26.12.1 <27`.
- The Python source package version is aligned at 1.2.1 and its wheel has been
  verified locally, but the current release workflow publishes only npm.

**Full changelog:** https://github.com/BofAI/8004-sdk/compare/v1.2.0...v1.2.1
