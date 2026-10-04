# Hackaha

Hackaha is the Prague Hacka* node: a weekly Thursday coworking day for indie makers, coders, designers, founders, and hardware hackers.

## Local preview

This is a static site. From this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Before launch

1. Create the Hackaha Telegram group and add `@the_hackabot` as an admin.
2. Replace `hello@hackaha.com` and the FormSubmit endpoint in `index.html` if a different signup provider is selected. FormSubmit will also require confirming the destination email on first use.
3. Point `hackaha.com` to the hosting provider. `CNAME` is ready for GitHub Pages custom-domain configuration.
4. Confirm the first venue and keep its exact address out of the public site; send it after signup.
5. Make sure the organizer has attended another Hacka* node before launch, as required by the network.

## Hosting (GitHub Pages)

The site deploys automatically from `main` (repo root) to GitHub Pages with the custom domain `hackaha.com` (see the `CNAME` file). Repo: <https://github.com/matosdfm/hackaha>.

At the domain registrar, point DNS at GitHub Pages:

- `A` records for the apex `hackaha.com` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www` → `matosdfm.github.io`

Once DNS resolves and GitHub provisions the certificate, enable **Enforce HTTPS** in repo Settings → Pages. Any push to `main` redeploys the site in about a minute.

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

Commit the change, push the branch, and open a pull request against `main`. The node should appear within a few minutes after the PR is merged.
