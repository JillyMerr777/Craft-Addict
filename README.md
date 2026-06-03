# Craft Addict — basic demo

Simple static demo with a mid-century / 70s inspired aesthetic. Files:

- `index.html` — main page
- `styles.css` — styling
- `script.js` — client interactions (parallax, wizard, inspiration)

Place your `favicon.png` and `logo.png` inside an `assets/` folder at the project root.

To open: just open `index.html` in a browser (no server required for basic functionality).

## Skill Difficulty Estimator API

The result page now includes a user-facing Skill Difficulty Estimator card.

To use a live AI API response, set these globals before `script.js` loads:

- `window.CRAFT_ADDICT_SKILL_API_URL`
- `window.CRAFT_ADDICT_SKILL_API_KEY` (optional)

Expected request payload:

```json
{
	"craft": "Amigurumi Dinosaur",
	"userExperience": ["Crochet Scarf", "Beanie"],
	"availableHours": 3
}
```

Expected response payload:

```json
{
	"difficulty": "Medium",
	"completionProbability": "High",
	"estimatedTime": "2.5 hours"
}
```

If no API URL is configured, the UI still shows a polished local estimate so the feature remains user-facing and functional.

## YouTube Tutorial Integration

If the user selects "Video tutorial" in the wizard, the result page automatically includes a suggested YouTube tutorial card with:

- Tutorial thumbnail
- Video title
- Watch Tutorial button

Set this global before `script.js` loads to use YouTube Data API v3:

- `window.CRAFT_ADDICT_YOUTUBE_API_KEY`

When no key is configured (or if the API fails), the app still shows a fallback tutorial card with a direct YouTube search link for the assigned craft.
