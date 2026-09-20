# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2026-09-20

### Added

- Added official ERC-8004 Registry ABI support and Base Mainnet/Base Sepolia
  network configuration to the TypeScript SDK.
- Synchronized the TypeScript TRON Registry ABIs and approval call order with
  the deployed TRC-8004 v2 contracts on Mainnet, Nile, and Shasta.
- Added complete TypeScript Registry read APIs, registration overloads, and
  per-agent approval management.

### Fixed

- Aligned Python and TypeScript parsing and serialization of ERC-8004
  `registration-v1` files, including extensible services, registrations, and
  the canonical `x402Support` field. TypeScript IPFS registration now binds the
  minted agent ID before publishing, while retaining SDK extension fields.
- Added chain-aware TRC-8004 registration serialization for TRON, including
  the TRC registration type and Base58 identity registry representation.
- Made the two-stage TypeScript IPFS registration completion idempotent so
  repeated confirmation waits do not upload or bind the agent URI again.

### Changed

- Removed the custom external-signer extension introduced in the TypeScript
  beta. Keep signer configuration as private-key strings; wallet integration
  belongs in the consuming application. Registry/Agent0 compatibility changes
  and credential encapsulation remain intact.
- Updated the TypeScript runtime dependencies to current compatible releases,
  resolving the production dependency advisories present in the beta build.

- Added the `develop` integration branch and enforced feature, release, and
  hotfix pull request routes.
- Documented synchronized TypeScript and Python version preparation on release
  and hotfix branches.
- Kept the TypeScript lockfile package metadata synchronized with the package
  manifest version.
- Extended CI to `develop` and kept automatic Audit disabled by default while
  preserving the authorized `/audit-pr` workflow.
- Limited Audit archives to tracked, non-symbolic-link files.

## [1.1.1] - 2026-02-11

### Fixed
- **Packaging (TS)**: Included missing `resource/`, `README.md`, and `LICENSE` files in the published TypeScript package. This ensures contract ABIs and chain configurations are available at runtime.
- **CI**: Fixed Python CI workflow to correctly handle environments with no tests and improved overall build stability.

### Changed
- **Parity**: Synchronized version to `1.1.1` across both TypeScript and Python SDKs.

## [1.1.0] - 2026-02-11

### Added
- **Enhanced Agent Management**: Added `transfer`, `addOperator`, and `removeOperator` to the `Agent` class for easier lifecycle control.
- **On-Chain Metadata**: New `updateOnChainMetadata` and `updateRegistration` methods allow updating agent details after initial registration.
- **IPFS Support**: Integrated `registerIPFS` and `ipfsUploader` hook for seamless agent card hosting.
- **Hydration**: Added `loadAgent` to the `SDK` to fully restore agent objects from on-chain and off-chain data.
- **Reputation Extensions**: Introduced `appendResponse` for agents to reply to feedback and `revokeFeedback` for reviewers to retract ratings.
- **Advanced Discovery**: Added `searchFeedback` to the `SDK` and `SubgraphClient` with support for complex filters (tags, value ranges, capabilities).
- **Parity**: Synchronized all new features across TypeScript and Python SDKs.

### Changed
- Improved `setWallet` flow with better signature handling and error reporting.
- Refined `Agent` class with helper methods like `setENS`, `removeEndpoint`, and `updateInfo`.

### Fixed
- Fixed various minor inconsistencies in chain adapter implementations for EVM and Tron.
- Corrected type definitions and improved ESM compatibility in the TypeScript SDK.

## [1.0.0] - 2026-02-11

### Added
- **Core SDK**: Initial stable release of the 8004 SDK for Python and TypeScript.
- **Multi-Chain**: Support for `eip155` (EVM) and `tron` (Nile, Shasta, Mainnet) architectures.
- **Identity**: Implementation of `register`, `setWallet`, and `getAgentWallet` flows.
- **Reputation**: Added `giveFeedback`, `getFeedback`, and `getReputationSummary` with support for decimal values and dual-tagging.
- **Validation**: Introduced `validationRequest`, `validationResponse`, and `getValidationStatus` for agent-specific verification flows.
- **Discovery**: Integrated `AgentIndexer` for searching agents across supported networks.
- **Shared Resources**: Centralized `chains.json` and contract ABIs in `resource/` directory.
- **Examples**: Comprehensive smoke tests and usage samples in `ts/examples` and `python/sample`.
