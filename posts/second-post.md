---
title: "Testing the Figma MCP Integration"
date: "2026-03-01"
excerpt: "A walkthrough of connecting Claude Code to Figma via the MCP server to pull design specs."
---

## The Setup

The Figma MCP server exposes design files to Claude Code as structured data. Once connected, you can ask Claude to:

- Read colors, typography, and spacing from a Figma frame
- Generate component code that matches the design
- Update existing styles to match a new design iteration

## How It Works

1. Open a Figma file and grab the **file key** from the URL
2. Configure the MCP server in Claude Code's settings
3. Ask Claude to inspect a specific frame or component

From there, Claude can read the Figma node tree and translate it into Tailwind classes, CSS variables, or component code.

## Next Steps

The goal is to design the full blog layout in Figma — header, post card, post page — and then have Claude generate the matching React components from the design.

```bash
# To add a new post, just create a new .md file:
touch posts/my-new-post.md
```

Then add the frontmatter and content. The listing page picks it up automatically.
