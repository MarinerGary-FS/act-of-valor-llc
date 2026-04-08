# COWORK_SETUP.md — Mariner Nexus Cowork + Mobile Notifications Setup

> This document covers how to set up Cowork for the Mariner Nexus workflow and how to receive notifications directly on your mobile device via Discord or WhatsApp when automations complete.

---

## What Cowork Does in This Stack

Cowork handles the non-developer side of the Mariner Nexus workflow — file organization, asset handoffs, document preparation, and project management tasks that do not require writing code. Combined with mobile notifications, it becomes a lightweight operations layer you can monitor from your phone.

**Cowork handles:**
- Moving exported assets into the correct project folders
- Organizing Playwright screenshot outputs after test runs
- Preparing Storybook builds for client review links
- Renaming and sorting deliverables for handoff
- Moving completed client documents into archive folders
- Generating summary reports from project folders

**Cowork does NOT handle:**
- Writing or editing code (that is Claude Code's job)
- Deploying to Vercel (use Vercel dashboard or GitHub Actions)
- Any task that requires accessing the codebase programmatically

---

## Standard Project Folder Structure

Cowork automations only transfer between projects when folders are consistent. Every Mariner Nexus project must follow this structure exactly.

```
/mariner-nexus/
  /clients/
    /[client-name]/
      /[project-name]/
        /assets/
          /raw/              ← Original exports from Figma, design tools
          /optimized/        ← Compressed/processed images ready for dev
          /fonts/            ← Font files
          /icons/            ← SVG icons
        /deliverables/
          /storybook/        ← Storybook static builds for client review
          /screenshots/      ← Playwright visual regression outputs
          /reports/          ← QA reports, Lighthouse reports
          /exports/          ← Any files sent to the client
        /docs/
          /briefs/           ← Project briefs and strategy docs
          /notes/            ← Meeting notes, feedback
          /contracts/        ← Agreements (do not automate — manual only)
        /archive/
          /[YYYY-MM]/        ← Completed deliverables by month
```

**Naming convention for folders:** lowercase, hyphen-separated. No spaces, no underscores, no special characters.

---

## Cowork Automation Library

These are the reusable automations to build in Cowork. Set each one up once and reuse across projects.

---

### Automation 1 — Asset Organizer

**Trigger:** New files appear in `/[project]/assets/raw/`
**Action:**
1. Scan new files
2. Sort by type: `.png/.jpg/.webp` → `/optimized/` (pending compression), `.svg` → `/icons/`, `.ttf/.woff/.woff2` → `/fonts/`
3. Log the sort results
4. Send notification: "Assets sorted for [project-name] — X images, Y icons, Z fonts ready"

**Notification channel:** Discord (see setup below)

---

### Automation 2 — Playwright Screenshot Organizer

**Trigger:** New files appear in the Playwright output folder (typically `/tests/visual/__snapshots__/` or a local exports path)
**Action:**
1. Copy screenshots to `/[project]/deliverables/screenshots/[YYYY-MM-DD]/`
2. Generate a simple index file listing all screenshot names
3. Send notification: "Visual regression screenshots saved — [X] files for [project-name]"

---

### Automation 3 — Client Deliverable Packager

**Trigger:** Manual trigger by team member
**Action:**
1. Collect files from `/deliverables/` that are newer than [X days]
2. Copy them into a dated folder: `/exports/[YYYY-MM-DD]-[client-name]-deliverables/`
3. Generate a file list as a text file in that folder
4. Send notification: "Deliverable package ready for [client-name] — [X] files"

---

### Automation 4 — Monthly Archive

**Trigger:** First day of each month (scheduled)
**Action:**
1. Move completed deliverable folders older than 30 days into `/archive/[YYYY-MM]/`
2. Log what was archived
3. Send notification: "Monthly archive complete — [X] folders moved"

---

### Automation 5 — New Project Setup

**Trigger:** Manual trigger — run when a new client project starts
**Action:**
1. Copy the standard folder structure template into `/clients/[client-name]/[project-name]/`
2. Copy all Mariner Nexus `.md` files (CLAUDE.md, STACK.md, etc.) into the project docs folder
3. Create a project README with the client name and date
4. Send notification: "New project folder created for [project-name]"

---

## Mobile Notifications — Discord Setup (Recommended)

Discord is the recommended path because it is free, has a reliable mobile app, and webhooks require no code beyond a simple HTTP call.

### Step 1 — Create a Discord server (if you do not have one)
1. Open Discord (desktop or mobile)
2. Click the `+` icon in the left sidebar
3. Choose "Create My Own" → "For me and my friends"
4. Name it "Mariner Nexus Ops" or similar

### Step 2 — Create a dedicated channel
1. In your server, click `+` next to "Text Channels"
2. Name it `#automations` or `#cowork-alerts`
3. Keep it private (visible only to you)

### Step 3 — Create a Webhook
1. Right-click the channel → "Edit Channel"
2. Go to "Integrations" → "Webhooks"
3. Click "New Webhook"
4. Name it "Cowork Bot" (optional: give it a custom avatar)
5. Click "Copy Webhook URL" — save this URL, you will need it

The webhook URL looks like:
```
https://discord.com/api/webhooks/[ID]/[TOKEN]
```

### Step 4 — Test the Webhook
Paste this into your browser address bar after replacing the URL:

Or use this curl command in Terminal:
```bash
curl -X POST "YOUR_WEBHOOK_URL_HERE" \
  -H "Content-Type: application/json" \
  -d '{"content": "✅ Cowork notification test — this is working!"}'
```

You should see the message appear in your Discord channel.

### Step 5 — Configure Cowork to send to Discord

In Cowork, when setting up any automation that sends a notification:
1. Choose the notification action
2. Select "Webhook" or "HTTP Request" as the delivery method
3. Paste your Discord Webhook URL
4. Set the method to `POST`
5. Set Content-Type to `application/json`
6. Use this body template:

```json
{
  "content": "{{automation_message}}",
  "embeds": [
    {
      "title": "{{automation_name}}",
      "description": "{{details}}",
      "color": 3447003,
      "footer": {
        "text": "Mariner Nexus Ops"
      },
      "timestamp": "{{timestamp}}"
    }
  ]
}
```

Replace `{{placeholders}}` with the actual values Cowork provides for each automation.

### Step 6 — Enable Mobile Notifications
1. Install Discord on your phone (iOS or Android)
2. Sign into your account
3. Go to your Mariner Nexus Ops server
4. Tap the server name → "Notification Settings"
5. Set to "All Messages" for the `#automations` channel
6. In your phone settings, ensure Discord has notification permission

You will now receive a push notification on your phone every time Cowork completes an automation.

---

## Mobile Notifications — WhatsApp Setup (Alternative)

WhatsApp requires more setup than Discord but works well if your team already uses WhatsApp for communication.

### Option A — WhatsApp via Twilio (Most Reliable)

**What you need:** A Twilio account (free tier works for low volume)

#### Step 1 — Set up Twilio
1. Go to [twilio.com](https://twilio.com) and create a free account
2. Go to "Messaging" → "Try it out" → "Send a WhatsApp message"
3. Follow the sandbox setup — you will join a Twilio sandbox number via WhatsApp
4. Note your Twilio Account SID, Auth Token, and sandbox WhatsApp number

#### Step 2 — Get your Twilio credentials
In the Twilio console:
- Account SID: starts with `AC...`
- Auth Token: shown on the dashboard
- From number: the sandbox number shown (format: `whatsapp:+14155238886`)
- Your number: `whatsapp:+1YOURNUMBER`

#### Step 3 — Create a notification script

Save this as a small script on your computer that Cowork can call:

```python
# whatsapp_notify.py
import sys
from twilio.rest import Client

ACCOUNT_SID = "your_account_sid"
AUTH_TOKEN = "your_auth_token"
FROM_NUMBER = "whatsapp:+14155238886"  # Twilio sandbox number
TO_NUMBER = "whatsapp:+1YOURNUMBER"   # Your WhatsApp number

message = sys.argv[1] if len(sys.argv) > 1 else "Cowork task complete"

client = Client(ACCOUNT_SID, AUTH_TOKEN)
client.messages.create(
    from_=FROM_NUMBER,
    body=message,
    to=TO_NUMBER
)
print(f"Sent: {message}")
```

Install the Twilio library:
```bash
pip install twilio
```

#### Step 4 — Connect to Cowork
In Cowork, add a "Run Script" action at the end of each automation:
- Script: `python /path/to/whatsapp_notify.py`
- Argument: `"[Automation name] complete — [brief summary]"`

### Option B — WhatsApp via Make.com (No-Code)

If you want a no-code approach:
1. Create a free [Make.com](https://make.com) account
2. Create a new scenario: "Webhook" trigger → "WhatsApp Business" action
3. Get the Make webhook URL from the scenario
4. In Cowork, send notifications to the Make webhook URL (same as the Discord webhook setup above)
5. Make routes the webhook to your WhatsApp

**Note:** Make.com's free tier allows 1,000 operations/month which is plenty for Cowork automations.

---

## Recommended Setup for Mariner Nexus

| Channel | Recommended for | Setup difficulty |
|---------|----------------|------------------|
| Discord | Primary ops notifications | ⭐ Easy |
| WhatsApp (Twilio) | Client-facing updates (if needed) | ⭐⭐⭐ Moderate |
| WhatsApp (Make.com) | WhatsApp without code | ⭐⭐ Easy-Moderate |

**Start with Discord.** It takes 10 minutes, it is free, and the mobile notifications are reliable.
Add WhatsApp later if you need to receive notifications via that channel specifically.

---

## Sample Discord Notification Messages

Use these message formats in your Cowork automations for consistency:

```
✅ Assets sorted for [project-name] — 12 images, 3 icons, 2 fonts ready for dev
📸 Visual regression screenshots saved — 24 files for [project-name] (2025-01-15)
📦 Deliverable package ready for [client-name] — 8 files in /exports/2025-01-15/
🗂️ Monthly archive complete — 6 folders moved to /archive/2025-01/
🚀 New project folder created for [project-name] — all template docs included
⚠️ Automation failed: [automation-name] — check Cowork logs
```

---

## Troubleshooting

### Discord notifications not arriving on phone
1. Check that Discord has notification permission on your phone (Settings → Apps → Discord → Notifications)
2. Check that the channel notification setting is "All Messages" not "Only Mentions"
3. Check that Discord notifications are not paused (Discord settings → Notifications → Pause)
4. Test the webhook URL directly using the curl command in Step 4

### Cowork automation not triggering
1. Ensure the folder path in the automation matches exactly — Cowork is case-sensitive on some systems
2. Check that Cowork has read/write permission for the target folder
3. Review the Cowork automation log for error details

### Webhook returns a 400 error
The JSON body is malformed. Check that all values are properly quoted and the JSON structure is valid.

### WhatsApp messages stop arriving (Twilio sandbox)
The Twilio sandbox requires you to re-confirm your number every 72 hours. For persistent WhatsApp notifications, upgrade to a paid Twilio WhatsApp-enabled number.

---

## Quick-Start Checklist

- [ ] Standard folder structure created for all active projects
- [ ] Discord server and `#automations` channel created
- [ ] Discord webhook URL created and saved
- [ ] Webhook tested — message appears in Discord
- [ ] Discord mobile app installed and notifications enabled
- [ ] Cowork Automation 1 (Asset Organizer) set up for at least one project
- [ ] Cowork Automation 5 (New Project Setup) configured with template docs
- [ ] Optional: WhatsApp notifications configured if needed

---

*Last updated: [DATE]*
*Maintained by: Mariner Nexus*
