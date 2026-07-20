# patrickmgrace.com

Personal portfolio site. Vanilla HTML, CSS, and JavaScript - no framework, no build step.

## Structure

- `index.html` - single-page layout: hero, projects, experience, skills, contact
- `styles.css` - all styling; design tokens as CSS custom properties at the top
- `script.js` - active nav highlighting via IntersectionObserver

## Deploy to GitHub Pages (fastest path)

1. Create a repo named `StandardGrace.github.io` (or any repo name)
2. Push these files to the `main` branch
3. If the repo is `StandardGrace.github.io`, it deploys automatically at that URL.
   Otherwise: repo Settings -> Pages -> Source: Deploy from a branch -> `main` / root
4. Site is live within a minute or two

## Custom domain (patrickmgrace.com)

1. In the repo: Settings -> Pages -> Custom domain -> enter `patrickmgrace.com`
   (this creates a CNAME file in the repo)
2. At the domain registrar, replace the Google Sites records with:
   - A records on the apex (@) pointing to GitHub Pages IPs:
     185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME record on `www` pointing to `standardgrace.github.io`
3. Back in Pages settings, tick "Enforce HTTPS" once the certificate provisions
   (can take up to an hour after DNS propagates)

## TODO before calling it done

- [ ] Verify experience dates and wording against current CV
- [ ] Swap Product Hub repo link to the real repo after cleanup
- [ ] Add Spotlight Alexandria live URL when deployed
- [ ] Add Python/Flask project card when the module produces one
