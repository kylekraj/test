# Fortune Button

A tiny one-page website that delivers random silly, meme-themed fortunes with one click, then pulls a meme from the internet that is filtered for image posts and ranked for topic relevance.

## Files

- `index.html` – page structure, fortune controls, and meme display area
- `style.css` – neon-retro UI styling for the card, controls, and meme panel
- `app.js` – meme-themed fortune list, random selection logic, multi-subreddit meme fetching, quality filtering, relevance scoring, clipboard copy

## Run locally

1. Download or clone this repository.
2. Open `index.html` in any modern web browser.
3. Click **Give me a fortune** to generate a random fortune and load a themed meme.
4. Click **Copy fortune** to copy the current fortune to your clipboard.

> Note: meme loading requires internet access because it uses `https://meme-api.com/gimme/<subreddit>/<count>`.

## Meme matching strategy

- Each fortune has keywords and a short list of meme-heavy subreddits.
- The app fetches multiple candidates from each subreddit.
- It filters out likely non-meme posts (discussion-like titles, spoiler/NSFW posts, non-image URLs).
- It ranks remaining posts by keyword overlap with the selected fortune and displays the best match.

## Publish with GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, open the repository and go to **Settings**.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment**:
   - Set **Source** to **Deploy from a branch**.
   - Select branch **main** (or your default branch).
   - Set folder to **/(root)**.
5. Click **Save**.
6. Wait for deployment to finish, then open the URL shown in the Pages settings.

Your `index.html` page will be served as the site homepage.
