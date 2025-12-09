# 🤖 Composter MCP Server

> Model Context Protocol server that lets AI assistants access your Composter component vault.

[![npm version](https://img.shields.io/npm/v/composter-mcp.svg)](https://www.npmjs.com/package/composter-mcp)
[![license](https://img.shields.io/npm/l/composter-mcp.svg)](https://github.com/binit2-1/Composter/blob/main/LICENSE)

Let **Claude**, **Cursor**, **GitHub Copilot**, and other MCP-compatible AI assistants search and read components from your personal Composter vault.

---

## 📦 Installation

```bash
npm install -g composter-mcp
```

Or use with npx (no install needed):

```bash
npx composter-mcp
```

---

## 🚀 Prerequisites

Before using the MCP server, you need:

1. **Composter CLI** installed and logged in:

```bash
npm install -g composter-cli
composter login
```

The MCP server uses the same session as the CLI (stored at `~/.config/composter/session.json`).

---

## 🔧 Setup

### Claude Desktop

Add to `~/.config/claude/claude_desktop_config.json` (Linux) or `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

```json
{
  "mcpServers": {
    "composter": {
      "command": "npx",
      "args": ["composter-mcp"]
    }
  }
}
```

### Cursor

Add to `.cursor/mcp.json` in your project:

```json
{
  "composter": {
    "command": "npx",
    "args": ["composter-mcp"]
  }
}
```

### VS Code (with Copilot MCP extension)

Add to your VS Code settings:

```json
{
  "mcp.servers": {
    "composter": {
      "command": "npx",
      "args": ["composter-mcp"]
    }
  }
}
```

### Windsurf

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "composter": {
      "command": "npx",
      "args": ["composter-mcp"]
    }
  }
}
```

---

## 🛠️ Available Tools

Once configured, your AI assistant can use these tools:

| Tool | Description |
|------|-------------|
| `search_components` | Search your vault by component name or category |
| `list_categories` | List all categories in your vault |
| `list_components` | List all components in a specific category |
| `read_component` | Read the full source code of a component |

---

## 💬 Example Prompts

After setup, you can ask your AI assistant:

- *"Search my Composter vault for button components"*
- *"What categories do I have in Composter?"*
- *"List all components in my ui category"*
- *"Read the DataTable component from my ui category"*
- *"Show me the code for my useLocalStorage hook"*

---

## 🔧 Development Mode

For local development with `localhost:3000` backend:

```bash
# Set environment variable
COMPOSTER_DEV=true npx composter-mcp

# Or set custom API URL
COMPOSTER_API_URL=http://localhost:3000/api npx composter-mcp
```

---

## 🐛 Troubleshooting

### "No session found"

You need to login via the CLI first:

```bash
npm install -g composter-cli
composter login
```

### "Session expired"

Your session has expired (30 days). Login again:

```bash
composter login
```

### Tools not appearing in AI assistant

1. Make sure you've restarted your AI assistant after config changes
2. Check the config file path is correct for your OS
3. Verify the MCP server starts: `npx composter-mcp`

### Network errors

- Check your internet connection
- Verify the backend: `https://composter.onrender.com/api/health`
- Try logging in again: `composter login`

---

## 🔐 Security

- Uses JWT authentication (same as CLI)
- Tokens stored locally at `~/.config/composter/session.json`
- All API calls over HTTPS
- Read-only access to your vault

---

## 🔗 Links

| Resource | URL |
|----------|-----|
| 🌐 Web App | [composter.vercel.app](https://composter.vercel.app) |
| 📦 CLI | [npmjs.com/package/composter-cli](https://www.npmjs.com/package/composter-cli) |
| 💻 GitHub | [github.com/binit2-1/Composter](https://github.com/binit2-1/Composter) |

---

## 📄 License

MIT © [binit2-1](https://github.com/binit2-1)
