# vzhng.github.io

Personal portfolio site for Veronica Zhang.

## Live site

**https://vzhng.github.io**

Published by GitHub Pages from the `main` branch (root `/`).

### Confirm / change Pages settings

1. Open https://github.com/vzhng/vzhng.github.io/settings/pages  
2. Source: **Deploy from a branch**  
3. Branch: `main` / folder `/` (root)  
4. Save  

Later (Porkbun custom domain): same Pages settings page → **Custom domain** → add your domain and follow GitHub’s DNS records.

## Local development (this Mac)

Workspace: `/Users/vezhang/Portfolio` (linked to this repo as `origin`).

```bash
git pull
# edit files in Cursor
git add .
git commit -m "Your message"
git push
```

Commits on this repo use local identity `vzhng` / `vz.yjzhang@gmail.com` (does not change your global work git config).

## Second laptop (equal access)

Use the **same** GitHub account `vzhng` — no collaborator invite needed.

1. Install git; optionally `brew install gh` then `gh auth login` as **vzhng**
2. Clone and open in Cursor:

```bash
git clone https://github.com/vzhng/vzhng.github.io.git
cd vzhng.github.io
git config user.email "vz.yjzhang@gmail.com"
git config user.name "vzhng"
```

3. Daily sync: `git pull` before work, `git push` when finished. Treat GitHub as the single source of truth; avoid long uncommitted work on both laptops at once.
