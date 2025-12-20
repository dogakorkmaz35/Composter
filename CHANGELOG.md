# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2025-06-21

### Added
- **Initial Release:** Complete launch of the Composter ecosystem.
- **MCP Integration:** Full support for AI assistants (Cursor, Windsurf, VS Code).
- **Live Preview:** Sandpack integration for rendering components in the dashboard.
- **CLI Tool:** Commands for `push`, `pull`, and `login`.
- **Web Dashboard:** Visual interface to browse and search components.
- **Secure Auth:** Better Auth implementation with 30-day session expiry.
- **Database:** PostgreSQL schema with Prisma ORM.

### Fixed
- Resolved CORS issues with cross-domain requests.
- Addressed session token trimming in MCP server.