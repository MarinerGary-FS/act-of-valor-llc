# Mariner Nexus — Frontend Stack Document Set

This folder contains the complete baseline document set for all Mariner Nexus projects.

Upload every `.md` file to a Claude Project to give Claude full context on the Mariner Nexus system.
Copy all files into the root of every client repo so Claude Code can operate with full standards.

---

## Documents in This Set

| File | Who uses it | Purpose |
|------|------------|---------|
| `CLAUDE.md` | Claude Code (AI agent) | Primary operating file — read this first |
| `STACK.md` | Claude Code + developers | Full stack reference and profile definitions |
| `DESIGN_TOKENS.md` | Claude Code + designers | Visual token definitions — source of truth |
| `COMPONENT_RULES.md` | Claude Code + developers | When and how to use each component |
| `MOTION_SYSTEM.md` | Claude Code + developers | Animation and motion rules |
| `CONVERSION_ENGINE.md` | Claude Code + strategists | Page structure and CTA rules |
| `QA_RULES.md` | Claude Code + developers | What must pass before anything ships |
| `AGENT_TASK_GUIDE.md` | Mariner Nexus team | How to structure tasks for Claude Code |
| `COWORK_SETUP.md` | Mariner Nexus team | Cowork automations + Discord/WhatsApp mobile setup |

---

## How to Use This Set

### For a new project
1. Copy all `.md` files into the root of the new project repo
2. Fill in the `[PLACEHOLDER]` values in `CLAUDE.md` (project name, client, URLs, etc.)
3. Fill in the design token values in `DESIGN_TOKENS.md` with the client's brand colors
4. Update `STACK.md` to set the project profile (A, B, or C)
5. Upload all docs to the Claude Project for this client
6. Run Cowork Automation 5 to scaffold the project folder structure

### For an existing project
1. Add any missing `.md` files from this set into the repo root
2. Update `CLAUDE.md` with the existing project's actual architecture
3. Upload updated docs to the Claude Project

### For a Claude Project (in Claude.ai)
Upload all `.md` files as project knowledge. Claude will reference them when you work on any task in that project, giving consistent standards across every conversation.

---

## Placeholders to Replace Per Project

When copying into a new project, search for and replace:

| Placeholder | Replace with |
|-------------|-------------|
| `[PROJECT_NAME]` | The actual project name |
| `[CLIENT_NAME]` | The client's name |
| `[PRODUCTION_URL]` | The live URL |
| `[STAGING_URL]` | The staging/preview URL |
| `[GITHUB_REPO_URL]` | The full GitHub repo URL |
| `[DATE]` | Today's date |
| `[PROJECT_VALUE]` | Actual CSS color/token values |
| `Profile [A / B / C]` | The selected profile |

---

## Keeping These Docs Updated

- When a stack decision changes, update `STACK.md` and re-upload to the Claude Project
- When token values are finalized for a client, update `DESIGN_TOKENS.md` and `tokens.json`
- When new QA rules are added, update `QA_RULES.md` across all active projects
- When team task patterns improve, update `AGENT_TASK_GUIDE.md`

These documents are living standards. They should get better with every project.

---

*Maintained by: Mariner Nexus*
