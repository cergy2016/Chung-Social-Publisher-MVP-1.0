# Chung Social Publisher — MVP 1.0

A local-first Next.js web app for drafting nine platform versions of one post and reusing the same image.

## Requirements
- Node.js 20.9+ and npm

## Start
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Workflow
1. Write the original message and optional link.
2. Upload a JPG, PNG or WebP image (up to 3 MB).
3. Click **Generate 9 drafts**.
4. Click platform names to preview and edit each version. Use checkboxes to choose export targets.
5. Copy an individual draft or export selected drafts as JSON. Keep your original image separately.

## Important limitations
- **No actual posting, scheduling, or social API integrations yet.**
- **No AI rewriting yet.** This version uses simple text clipping and tags; always review.
- Browser localStorage is used, not a cloud database. Clearing browser data removes drafts.
- Image stored as a browser data URL and **not included** in JSON exports.
- Character limits are indicative and may change; URLs, rich media and platform-specific counters can behave differently.
- Uploads are kept locally in your browser, not sent to a server.

## Next development milestones
1. Add Supabase authentication, database, and image storage.
2. Add server-side OpenAI adaptation with prompt rules, length validation, and user approval.
3. Implement OAuth connections and publish adapters for platforms with supported official APIs.
4. Add scheduling, status reporting, retries, and explicit manual workflows where API publishing is unavailable.

Do not put API secrets in client-side environment variables (`NEXT_PUBLIC_*`).
