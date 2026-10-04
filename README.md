# Hackaha

Hackaha is the Prague Hacka* node: a weekly Thursday co-working day for indie makers, coders, designers, founders, and hardware hackers.

Site: <https://hackaha.com> · Repo: <https://github.com/matosdfm/hackaha>

The site is a **single `index.html` file** styled with Tailwind (loaded via the Tailwind browser CDN — no build step, no npm). Design copied from [hackaboa.com](https://hackaboa.com) (black background, IBM Plex Mono body, Press Start 2P headings, avocado-gold accents).

## Edit the site

Open `index.html` — everything lives in that one file:

- **Copy/schedule**: the hero section.
- **Next meetup**: create the event on [lu.ma](https://lu.ma), grab its event ID from the embed URL, then add a line to `lumaEvents` in the script at the bottom:
  `{ date: "2026-10-08", eventId: "evt-xxxxxxxxxxxxxxxx" }`
  The next upcoming event renders automatically; with no events the section stays hidden.
- **Previous meetups (tweets)**: add tweet IDs (one per line, JSON array) to [this gist](https://gist.github.com/matosdfm/ebd367bfac76dfec177d3af3c861506d). The section stays hidden while the gist is empty.

## Local preview

Just open `index.html` in a browser, or:

```bash
python3 -m http.server 8000
```

## Hosting (GitHub Pages)

Deploys automatically from `main` (repo root) on every push — no workflow, no build. The `CNAME` file keeps the custom domain `hackaha.com`.

DNS at the registrar:

- `A` records for the apex `hackaha.com` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www` → `matosdfm.github.io`

Once DNS resolves and GitHub provisions the certificate, enable **Enforce HTTPS** in repo Settings → Pages.

## Launch checklist (from `startanode.md`)

1. Create the Hackaha Telegram group and add [@the_hackabot](https://t.me/the_hackabot) as an admin, then contact the network organizers to connect it.
2. Confirm the first venue; keep its exact address off the public site and share it after signup.
3. The organizer must have attended another Hacka* node before launch.

## Add Prague to hacka.network

After the node is connected with the network and running, fork [hacka-network/hacka.network](https://github.com/hacka-network/hacka.network), edit `nodes.json`, and add this entry to the `nodes` array:

```json
{
  "name": "Hackaha",
  "emoji": "🇨🇿",
  "established": 2026,
  "location": "Prague",
  "timezone": "Europe/Prague",
  "lat": 50.0755,
  "lon": 14.4378,
  "signup_url": "https://hackaha.com"
}
```

Commit the change, push the branch, and open a pull request against `main`. The node appears on hacka.network within a few minutes of merge.
