const INSPIRATION_PROJECTS = [
  {
    id: 1,
    title: "Macrame Wall Hanging",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600",
    url: "https://www.pinterest.com/pin/example1",
    size: "large"
  },
  {
    id: 2,
    title: "Watercolor Painting",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600",
    url: "https://www.pinterest.com/pin/example2",
    size: "small"
  },
  {
    id: 3,
    title: "Knitted Scarf",
    image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600",
    url: "https://www.pinterest.com/pin/example3",
    size: "medium"
  },
  {
    id: 4,
    title: "Pottery Bowl",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600",
    url: "https://www.pinterest.com/pin/example4",
    size: "medium"
  },
  {
    id: 5,
    title: "Paper Quilling Art",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600",
    url: "https://www.pinterest.com/pin/example5",
    size: "small"
  },
  {
    id: 6,
    title: "Crochet Blanket",
    image: "https://images.unsplash.com/photo-1606500939862-d93481d4463a?w=600",
    url: "https://www.pinterest.com/pin/example6",
    size: "large"
  },
  {
    id: 7,
    title: "Embroidery Hoop Art",
    image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600",
    url: "https://www.pinterest.com/pin/example7",
    size: "medium"
  },
  {
    id: 8,
    title: "Resin Jewelry",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600",
    url: "https://www.pinterest.com/pin/example8",
    size: "small"
  },
  {
    id: 9,
    title: "Stained Glass",
    image: "https://images.unsplash.com/photo-1551732998-9de9ddacc6ec?w=600",
    url: "https://www.pinterest.com/pin/example9",
    size: "medium"
  },
  {
    id: 10,
    title: "Needle Felting",
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600",
    url: "https://www.pinterest.com/pin/example10",
    size: "large"
  },
  {
    id: 11,
    title: "Acrylic Pour Painting",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600",
    url: "https://www.pinterest.com/pin/example11",
    size: "small"
  },
  {
    id: 12,
    title: "Origami Flowers",
    image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=600",
    url: "https://www.pinterest.com/pin/example12",
    size: "medium"
  },
  {
    id: 13,
    title: "Scrapbooking",
    image: "https://images.unsplash.com/photo-1770198809758-f29e74422507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhcGJvb2tpbmclMjBjcmFmdCUyMHByb2plY3R8ZW58MXx8fHwxNzcyMTI2NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "https://www.pinterest.com/pin/example13",
    size: "medium"
  },
  {
    id: 14,
    title: "Handmade Candles",
    image: "https://images.unsplash.com/photo-1716819685618-2f7abb7fbed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNhbmRsZXMlMjBjcmFmdHN8ZW58MXx8fHwxNzcyMTI2NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "https://www.pinterest.com/pin/example14",
    size: "small"
  },
  {
    id: 15,
    title: "Beaded Jewelry",
    image: "https://images.unsplash.com/photo-1715374033196-0ff662284a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFkZWQlMjBqZXdlbHJ5JTIwbWFraW5nfGVufDF8fHx8MTc3MjEyNjcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    url: "https://www.pinterest.com/pin/example15",
    size: "large"
  },
  {
    id: 16,
    title: "Wood Carving",
    image: "https://images.unsplash.com/photo-1723531362703-a8f0b4e9d288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY2FydmluZyUyMGFydHxlbnwxfHx8fDE3NzIwNTI3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "https://www.pinterest.com/pin/example16",
    size: "small"
  },
  {
    id: 17,
    title: "Quilting",
    image: "https://images.unsplash.com/photo-1752752309455-a4f00ba787ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBxdWlsdGluZyUyMGZhYnJpY3xlbnwxfHx8fDE3NzIxMjY3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "https://www.pinterest.com/pin/example17",
    size: "medium"
  },
  {
    id: 18,
    title: "Ceramic Pottery",
    image: "https://images.unsplash.com/photo-1642355779950-3a19623cf7aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMHdoZWVsfGVufDF8fHx8MTc3MjEyNjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    url: "https://www.pinterest.com/pin/example18",
    size: "medium"
  },
  {
    id: 19,
    title: "Calligraphy",
    image: "https://images.unsplash.com/photo-1660652023147-f84fd622bc2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxsaWdyYXBoeSUyMHBlbiUyMGlua3xlbnwxfHx8fDE3NzIxMjY3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "https://www.pinterest.com/pin/example19",
    size: "small"
  },
  {
    id: 20,
    title: "Leather Crafting",
    image: "https://images.unsplash.com/photo-1644258676710-ffb99d7d7a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwY3JhZnRpbmclMjB0b29sc3xlbnwxfHx8fDE3NzIwMjY5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "https://www.pinterest.com/pin/example20",
    size: "large"
  },
  {
    id: 21,
    title: "Cross Stitch",
    image: "https://images.unsplash.com/photo-1692604814081-593c31b66fbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zcyUyMHN0aXRjaCUyMGVtYnJvaWRlcnl8ZW58MXx8fHwxNzcyMTI2NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "https://www.pinterest.com/pin/example21",
    size: "medium"
  },
  {
    id: 22,
    title: "Polymer Clay Sculpture",
    image: "https://images.unsplash.com/photo-1662661600800-0b7220bab431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2x5bWVyJTIwY2xheSUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NzIxMjY3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "https://www.pinterest.com/pin/example22",
    size: "small"
  }
];

const CRAFT_OPTIONS = [
  "Crocheting",
  "Knitting",
  "Watercolor",
  "Acrylic Painting",
  "Needle Felting",
  "Stained Glass",
  "Embroidery",
  "Cross-stitch",
  "Macrame",
  "Pottery",
  "Origami",
  "Paper Quilling",
  "Resin Art",
  "Jewelry Making",
  "Sewing",
  "Quilting",
  "Scrapbooking",
  "Calligraphy",
  "Wood Burning",
  "Candle Making"
];

const LEARNING_OPTIONS = [
  "Written instructions",
  "Photos or diagrams",
  "Video tutorial",
  "Audio descriptions",
  "In-person instructions"
];

const SHOP_OPTIONS = [
  { id: "local", label: "Local craft store", requiresZip: true },
  { id: "amazon", label: "Amazon", requiresZip: false },
  { id: "michaels", label: "Michaels", requiresZip: false },
  { id: "hobbylobby", label: "Hobby Lobby", requiresZip: false }
];

const CRAFT_SUGGESTIONS = [
  {
    name: "Knit a Cozy Scarf",
    description:
      "Learn to knit a beautiful, warm scarf perfect for beginners. This project will teach you basic knitting stitches and help you create something practical and stylish.",
    why:
      "This craft matches your time commitment and is perfect for someone starting their knitting journey.",
    overview:
      "Knitting is a relaxing craft that creates fabric by interlocking loops of yarn using two needles. It's portable, meditative, and produces beautiful handmade items.",
    resources: [
      { title: "Beginner Knitting Tutorial", type: "video", url: "https://youtube.com/watch?v=example" },
      {
        title: "How to Cast On Diagram",
        type: "diagram",
        imageUrl:
          "https://images.unsplash.com/photo-1710352461682-7c674af3c8df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMGNhc3QlMjBvbiUyMGRpYWdyYW18ZW58MXx8fHwxNzcyMTMxMjQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      { title: "Basic Knit Stitch Pattern", type: "written", url: "https://example.com/patterns" }
    ],
    suppliesList: [
      "2 skeins of worsted weight yarn (approximately 400 yards total)",
      "9mm knitting needles",
      "Scissors",
      "Yarn needle for weaving ends"
    ],
    supplies: [
      {
        item: "Worsted Weight Yarn",
        amazon: "https://amazon.com/yarn",
        michaels: "https://michaels.com/yarn",
        hobbylobby: "https://hobbylobby.com/yarn"
      },
      {
        item: "Size 8 Knitting Needles",
        amazon: "https://amazon.com/needles",
        michaels: "https://michaels.com/needles",
        hobbylobby: "https://hobbylobby.com/needles"
      }
    ],
    tips: [
      "Start with light-colored yarn so you can see your stitches clearly",
      "Practice your tension - not too tight, not too loose",
      "Count your stitches at the end of each row to catch mistakes early",
      "Take breaks to avoid hand fatigue"
    ]
  },
  {
    name: "Paint a Watercolor Landscape",
    description:
      "Create a serene watercolor landscape with simple techniques. Perfect for exploring color blending and wet-on-wet painting methods.",
    why:
      "Watercolor is forgiving for beginners and matches your artistic interests based on your selections.",
    overview:
      "Watercolor painting uses water-soluble pigments to create luminous, flowing artwork. It's known for its transparency and ability to create soft, dreamy effects.",
    resources: [
      { title: "Watercolor Basics for Beginners", type: "video", url: "https://youtube.com/watch?v=example" },
      {
        title: "Color Mixing Guide",
        type: "diagram",
        imageUrl:
          "https://images.unsplash.com/photo-1676913011586-63736eaf3339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwY29sb3IlMjBtaXhpbmclMjBjaGFydHxlbnwxfHx8fDE3NzIxMzEyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ],
    suppliesList: [
      "Watercolor paper pad (140lb or higher)",
      "Beginner watercolor set (12-24 colors)",
      "Round brushes in sizes 4, 8, and 12",
      "Two water containers",
      "Paper towels"
    ],
    supplies: [
      {
        item: "Watercolor Paper Pad",
        amazon: "https://amazon.com/paper",
        michaels: "https://michaels.com/paper",
        hobbylobby: "https://hobbylobby.com/paper"
      },
      {
        item: "Beginner Watercolor Set",
        amazon: "https://amazon.com/paints",
        michaels: "https://michaels.com/paints",
        hobbylobby: "https://hobbylobby.com/paints"
      },
      {
        item: "Round Brushes (various sizes)",
        amazon: "https://amazon.com/brushes",
        michaels: "https://michaels.com/brushes",
        hobbylobby: "https://hobbylobby.com/brushes"
      }
    ],
    tips: [
      "Use quality watercolor paper (140lb minimum) to prevent buckling",
      "Start with light washes and build up color gradually",
      "Keep two water containers - one for cleaning, one for diluting",
      "Let layers dry completely before adding details"
    ]
  },
  {
    name: "Create a Macrame Plant Hanger",
    description:
      "Learn basic macrame knots to create a beautiful hanging plant holder. A trendy project that adds bohemian charm to any space.",
    why:
      "This is a quick, satisfying project that fits your time frame and creates functional home decor.",
    overview:
      "Macrame is the art of knotting cord to create decorative items. It requires no special tools and has seen a huge resurgence in popularity.",
    resources: [
      { title: "Macrame Knots for Beginners", type: "video", url: "https://youtube.com/watch?v=example" },
      { title: "Plant Hanger Pattern", type: "written", url: "https://example.com/pattern" }
    ],
    suppliesList: [
      "100 feet of 3mm macrame cord",
      "1 wooden or metal ring (1-2 inches diameter)",
      "Scissors",
      "Measuring tape"
    ],
    supplies: [
      {
        item: "3mm Macrame Cord",
        amazon: "https://amazon.com/cord",
        michaels: "https://michaels.com/cord",
        hobbylobby: "https://hobbylobby.com/cord"
      },
      {
        item: "Wooden Ring",
        amazon: "https://amazon.com/ring",
        michaels: "https://michaels.com/ring",
        hobbylobby: "https://hobbylobby.com/ring"
      }
    ],
    tips: [
      "Cut your cords longer than you think you'll need",
      "Practice knots on scrap cord first",
      "Work on a clipboard or tape your project to a surface",
      "Measure and mark your cord placement for symmetry"
    ]
  }
];

const appState = {
  page: "home",
  wizard: {
    timeCommitment: "",
    selectedCrafts: [],
    repeatCraft: true,
    learningPreferences: [],
    search: ""
  },
  result: {
    currentSuggestion: CRAFT_SUGGESTIONS[0],
    supplyPreferences: [],
    zipCode: "",
    showSupplyLinks: false,
    skillEstimate: {
      difficulty: "--",
      completionProbability: "--",
      estimatedTime: "--",
      status: "idle",
      message: "Fill out the wizard to generate an estimate."
    },
    skillEstimateRequestId: 0,
    youtubeTutorial: {
      status: "idle",
      title: "",
      url: "",
      thumbnailUrl: "",
      message: ""
    },
    youtubeTutorialRequestId: 0
  }
};

const PAGE_IDS = {
  home: "page-home",
  inspiration: "page-inspiration",
  wizard: "page-wizard",
  result: "page-result"
};

const PAGE_HASH = {
  home: "",
  inspiration: "#inspiration",
  wizard: "#wizard",
  result: "#craft-result"
};

const HASH_PAGE = {
  "#inspiration": "inspiration",
  "#wizard": "wizard",
  "#craft-result": "result"
};

const TIME_COMMITMENT_HOURS = {
  "30 min": 0.5,
  "1 hour": 1,
  "4 hours": 4,
  "Multiple days": 8
};

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatHours(hours) {
  const rounded = Math.round(hours * 10) / 10;
  return `${rounded} ${rounded === 1 ? "hour" : "hours"}`;
}

function normalizeEstimatedTime(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return formatHours(value);
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return "--";

    const parsed = Number.parseFloat(trimmed);
    if (Number.isFinite(parsed) && /hour|hr/i.test(trimmed)) {
      return formatHours(parsed);
    }

    return trimmed;
  }

  return "--";
}

function buildSkillEstimatorPayload() {
  const availableHours = TIME_COMMITMENT_HOURS[appState.wizard.timeCommitment] ?? 2;

  return {
    craft: appState.result.currentSuggestion.name,
    userExperience: appState.wizard.selectedCrafts.map((craft) => craft.name),
    availableHours
  };
}

function shouldShowVideoTutorial() {
  return appState.wizard.learningPreferences.includes("Video tutorial");
}

function buildTutorialQuery() {
  const craft = appState.result.currentSuggestion.name;
  return `${craft} tutorial for beginners`;
}

function buildYouTubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function buildFallbackTutorial(query) {
  return {
    status: "ready",
    title: `How to make ${appState.result.currentSuggestion.name} for beginners`,
    url: buildYouTubeSearchUrl(query),
    thumbnailUrl: "",
    message: "Showing a YouTube search fallback. Add window.CRAFT_ADDICT_YOUTUBE_API_KEY for exact video matches."
  };
}

function normalizeSkillEstimatorResponse(raw) {
  const candidates = [raw, raw?.data, raw?.result, raw?.estimate].filter(Boolean);

  for (const item of candidates) {
    const difficulty = item.difficulty ?? item.Difficulty;
    const completionProbability =
      item.completionProbability ??
      item.completion_probability ??
      item.completionChance ??
      item["Completion Probability"];
    const estimatedTime =
      item.estimatedTime ??
      item.estimated_time ??
      item.timeEstimate ??
      item["Estimated Time"];

    if (difficulty && completionProbability && estimatedTime !== undefined) {
      return {
        difficulty: String(difficulty),
        completionProbability: String(completionProbability),
        estimatedTime: normalizeEstimatedTime(estimatedTime)
      };
    }
  }

  return null;
}

function generateSkillEstimateFallback(payload) {
  const craftText = payload.craft.toLowerCase();
  let baseDifficulty = 2;

  if (/amigurumi|stained glass|pottery|quilting|resin|needle felting|wood/i.test(craftText)) {
    baseDifficulty = 2.7;
  } else if (/scarf|origami|paper quilling|scrapbooking/i.test(craftText)) {
    baseDifficulty = 1.7;
  } else if (/watercolor|macrame|embroidery|candle|jewelry/i.test(craftText)) {
    baseDifficulty = 2.2;
  }

  const experienceBonus = Math.min(payload.userExperience.length, 4) * 0.22;
  const adjustedDifficulty = clampNumber(baseDifficulty - experienceBonus, 1, 3);

  let difficulty = "Medium";
  if (adjustedDifficulty < 1.8) {
    difficulty = "Low";
  } else if (adjustedDifficulty > 2.45) {
    difficulty = "High";
  }

  const estimatedHours = clampNumber(adjustedDifficulty * 1.2 + 0.5, 1, 6);
  const confidence = payload.availableHours / estimatedHours + payload.userExperience.length * 0.12;

  let completionProbability = "Medium";
  if (confidence >= 1.35) {
    completionProbability = "High";
  } else if (confidence < 0.9) {
    completionProbability = "Low";
  }

  return {
    difficulty,
    completionProbability,
    estimatedTime: formatHours(estimatedHours)
  };
}

async function requestSkillEstimateFromApi(payload) {
  const apiUrl = typeof window.CRAFT_ADDICT_SKILL_API_URL === "string" ? window.CRAFT_ADDICT_SKILL_API_URL.trim() : "";
  if (!apiUrl) return null;

  const headers = {
    "Content-Type": "application/json"
  };

  const apiKey = typeof window.CRAFT_ADDICT_SKILL_API_KEY === "string" ? window.CRAFT_ADDICT_SKILL_API_KEY.trim() : "";
  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`;
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Skill estimator API failed with status ${response.status}`);
  }

  const body = await response.json();
  return normalizeSkillEstimatorResponse(body);
}

async function requestYoutubeTutorialFromApi(query) {
  const apiKey = typeof window.CRAFT_ADDICT_YOUTUBE_API_KEY === "string" ? window.CRAFT_ADDICT_YOUTUBE_API_KEY.trim() : "";
  if (!apiKey) return null;

  const params = new URLSearchParams({
    part: "snippet",
    q: query,
    maxResults: "1",
    type: "video",
    key: apiKey
  });

  const url = `https://www.googleapis.com/youtube/v3/search?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`YouTube API failed with status ${response.status}`);
  }

  const body = await response.json();
  const video = Array.isArray(body.items) ? body.items[0] : null;
  const videoId = video?.id?.videoId;
  if (!videoId) return null;

  const thumbnailUrl =
    video?.snippet?.thumbnails?.high?.url ||
    video?.snippet?.thumbnails?.medium?.url ||
    video?.snippet?.thumbnails?.default?.url ||
    "";

  return {
    status: "ready",
    title: video?.snippet?.title || `How to make ${appState.result.currentSuggestion.name} for beginners`,
    url: `https://www.youtube.com/watch?v=${videoId}`,
    thumbnailUrl,
    message: "Suggested tutorial from YouTube."
  };
}

function renderYoutubeTutorial() {
  const wrap = document.getElementById("result-youtube-tutorial");
  if (!wrap) return;

  if (!shouldShowVideoTutorial()) {
    wrap.classList.add("hidden");
    wrap.innerHTML = "";
    return;
  }

  const tutorial = appState.result.youtubeTutorial;
  wrap.classList.remove("hidden");

  if (tutorial.status === "loading") {
    wrap.innerHTML = `
      <div class="youtube-tutorial-row">
        <div class="youtube-thumb-fallback">Loading...</div>
        <div class="youtube-meta">
          <p class="youtube-label">Suggested YouTube Tutorial</p>
          <p class="youtube-title">Finding a tutorial for ${appState.result.currentSuggestion.name}</p>
          <p class="youtube-status">Pulling the most relevant beginner-friendly result...</p>
        </div>
      </div>
    `;
    return;
  }

  const thumbMarkup = tutorial.thumbnailUrl
    ? `<img class="youtube-thumb" src="${tutorial.thumbnailUrl}" alt="Tutorial thumbnail for ${appState.result.currentSuggestion.name}" />`
    : `<div class="youtube-thumb-fallback">YouTube</div>`;

  wrap.innerHTML = `
    <div class="youtube-tutorial-row">
      ${thumbMarkup}
      <div class="youtube-meta">
        <p class="youtube-label">Suggested YouTube Tutorial</p>
        <p class="youtube-title">${tutorial.title || `How to make ${appState.result.currentSuggestion.name} for beginners`}</p>
        <p class="youtube-status">${tutorial.message || ""}</p>
        <a class="youtube-watch-btn" href="${tutorial.url}" target="_blank" rel="noopener noreferrer">Watch Tutorial</a>
      </div>
    </div>
  `;
}

async function refreshYoutubeTutorial() {
  if (!shouldShowVideoTutorial()) {
    appState.result.youtubeTutorial = {
      status: "idle",
      title: "",
      url: "",
      thumbnailUrl: "",
      message: ""
    };
    renderYoutubeTutorial();
    return;
  }

  const requestId = appState.result.youtubeTutorialRequestId + 1;
  appState.result.youtubeTutorialRequestId = requestId;

  appState.result.youtubeTutorial = {
    status: "loading",
    title: "",
    url: "",
    thumbnailUrl: "",
    message: ""
  };
  renderYoutubeTutorial();

  const query = buildTutorialQuery();

  try {
    const apiResult = await requestYoutubeTutorialFromApi(query);
    if (requestId !== appState.result.youtubeTutorialRequestId) return;

    appState.result.youtubeTutorial = apiResult || buildFallbackTutorial(query);
  } catch (error) {
    if (requestId !== appState.result.youtubeTutorialRequestId) return;
    console.warn("YouTube tutorial lookup failed:", error);
    appState.result.youtubeTutorial = buildFallbackTutorial(query);
  }

  renderYoutubeTutorial();
}

function renderSkillEstimator() {
  const panel = document.getElementById("skill-estimator-panel");
  const difficulty = document.getElementById("skill-difficulty");
  const probability = document.getElementById("skill-completion-probability");
  const estimatedTime = document.getElementById("skill-estimated-time");
  const status = document.getElementById("skill-estimator-status");

  if (!panel || !difficulty || !probability || !estimatedTime || !status) return;

  const estimate = appState.result.skillEstimate;
  difficulty.textContent = estimate.difficulty;
  probability.textContent = estimate.completionProbability;
  estimatedTime.textContent = estimate.estimatedTime;
  status.textContent = estimate.message;

  panel.classList.toggle("loading", estimate.status === "loading");
}

async function refreshSkillEstimate() {
  const requestId = appState.result.skillEstimateRequestId + 1;
  appState.result.skillEstimateRequestId = requestId;

  appState.result.skillEstimate = {
    difficulty: "...",
    completionProbability: "...",
    estimatedTime: "...",
    status: "loading",
    message: "Running AI estimate for your current craft selection..."
  };
  renderSkillEstimator();

  const payload = buildSkillEstimatorPayload();

  try {
    const apiEstimate = await requestSkillEstimateFromApi(payload);
    if (requestId !== appState.result.skillEstimateRequestId) return;

    if (apiEstimate) {
      appState.result.skillEstimate = {
        ...apiEstimate,
        status: "ready",
        message: "Live AI estimate generated from your craft profile."
      };
    } else {
      appState.result.skillEstimate = {
        ...generateSkillEstimateFallback(payload),
        status: "ready",
        message: "Smart estimate shown. Set window.CRAFT_ADDICT_SKILL_API_URL for a live AI API response."
      };
    }
  } catch (error) {
    if (requestId !== appState.result.skillEstimateRequestId) return;

    console.warn("Skill estimator API unavailable:", error);
    appState.result.skillEstimate = {
      ...generateSkillEstimateFallback(payload),
      status: "ready",
      message: "AI service is unavailable right now. Showing a smart estimate instead."
    };
  }

  renderSkillEstimator();
}

function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let frameId = 0;
  let lastTime = 0;
  let verticalOffset = 0;

  const tileW = 140;
  const tileH = 180;
  const starCells = new Set();

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
  }

  function buildStarField() {
    starCells.clear();
    for (let x = -tileW; x < canvas.width + tileW; x += tileW) {
      for (let y = -tileH; y < canvas.height + tileH * 2; y += tileH) {
        if (Math.random() < 0.3) {
          starCells.add(`${x},${y}`);
        }
      }
    }
  }

  function drawStar(centerX, centerY, outerRadius, innerRadius, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#f5a623";
    ctx.beginPath();

    for (let i = 0; i < 16; i += 1) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI / 8) * i - Math.PI / 2;
      const px = centerX + Math.cos(angle) * radius;
      const py = centerY + Math.sin(angle) * radius;
      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }

    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawFrame(offsetY, timeMs) {
    const palette = ["#e76f30", "#f5a623", "#4a9e9e", "#838f4a", "#d66d75"];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = -tileW; x < canvas.width + tileW; x += tileW) {
      for (let y = -tileH; y < canvas.height + tileH * 2; y += tileH) {
        const colorIndex = Math.abs(Math.floor(x / tileW + y / tileH)) % palette.length;
        const py = y + offsetY;

        ctx.fillStyle = palette[colorIndex];
        ctx.globalAlpha = 0.18;
        ctx.beginPath();
        ctx.moveTo(x + tileW / 2, py);
        ctx.lineTo(x + tileW, py + tileH / 2);
        ctx.lineTo(x + tileW / 2, py + tileH);
        ctx.lineTo(x, py + tileH / 2);
        ctx.closePath();
        ctx.fill();

        const cellKey = `${x},${y}`;
        if (starCells.has(cellKey)) {
          const cx = x + tileW / 2;
          const cy = py + tileH / 2;
          const pulse = Math.sin(timeMs * 0.001 + x + y) * 0.3 + 0.7;
          const outer = 18 * pulse;
          const inner = outer * 0.4;
          const alpha = 0.4 + pulse * 0.3;
          drawStar(cx, cy, outer, inner, alpha);
        }
      }
    }

    ctx.globalAlpha = 1;
  }

  function tick(now) {
    const delta = now - lastTime;
    lastTime = now;

    verticalOffset = (verticalOffset + delta * 0.02) % tileH;
    drawFrame(verticalOffset, now);

    frameId = requestAnimationFrame(tick);
  }

  resizeCanvas();
  buildStarField();

  const mutationObserver = new MutationObserver(() => {
    resizeCanvas();
    buildStarField();
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });

  window.addEventListener("resize", () => {
    resizeCanvas();
    buildStarField();
  });

  frameId = requestAnimationFrame(tick);

  window.addEventListener("beforeunload", () => {
    mutationObserver.disconnect();
    cancelAnimationFrame(frameId);
  });
}

function showPage(page, syncHash = true) {
  Object.keys(PAGE_IDS).forEach((key) => {
    const section = document.getElementById(PAGE_IDS[key]);
    if (section) {
      section.classList.toggle("hidden", key !== page);
    }
  });

  appState.page = page;

  if (syncHash && PAGE_HASH[page] !== undefined) {
    if (location.hash !== PAGE_HASH[page]) {
      if (PAGE_HASH[page]) {
        location.hash = PAGE_HASH[page];
      } else if (location.hash) {
        history.replaceState(null, "", location.pathname + location.search);
      }
    }
  }

  window.scrollTo(0, 0);
}

function initializePageFromHash() {
  const page = HASH_PAGE[location.hash] || "home";
  showPage(page, false);
}

function updateChoicesMotion() {
  if (appState.page !== "home") return;

  const choicesSection = document.getElementById("choices-section");
  const choicesContent = document.getElementById("choices-content");
  if (!choicesSection || !choicesContent) return;

  const rect = choicesSection.getBoundingClientRect();
  const viewport = window.innerHeight;
  const rawProgress = (viewport - rect.top) / (viewport + rect.height);
  const progress = Math.max(0, Math.min(1, rawProgress));

  const y = 100 - 200 * progress;
  let opacity = 0;
  if (progress < 0.3) {
    opacity = progress / 0.3;
  } else if (progress < 0.7) {
    opacity = 1;
  } else {
    opacity = Math.max(0, 1 - (progress - 0.7) / 0.3);
  }

  choicesContent.style.transform = `translateY(${y}px)`;
  choicesContent.style.opacity = String(opacity);
}

function buildInspirationGrid() {
  const grid = document.getElementById("inspo-grid");
  if (!grid) return;

  grid.innerHTML = "";

  INSPIRATION_PROJECTS.forEach((project) => {
    const tile = document.createElement("a");
    tile.className = `inspo-tile ${project.size === "large" ? "large" : ""}`;
    tile.href = project.url;
    tile.target = "_blank";
    tile.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    const overlay = document.createElement("div");
    overlay.className = "inspo-overlay";
    const text = document.createElement("span");
    text.textContent = project.title;
    overlay.appendChild(text);

    tile.appendChild(img);
    tile.appendChild(overlay);
    grid.appendChild(tile);
  });
}

function getSelectedCraft(craftName) {
  return appState.wizard.selectedCrafts.find((craft) => craft.name === craftName);
}

function toggleCraft(craftName) {
  const existing = getSelectedCraft(craftName);
  if (existing) {
    appState.wizard.selectedCrafts = appState.wizard.selectedCrafts.filter((craft) => craft.name !== craftName);
  } else {
    appState.wizard.selectedCrafts.push({ name: craftName, level: "beginner" });
  }
}

function setCraftLevel(craftName, level) {
  appState.wizard.selectedCrafts = appState.wizard.selectedCrafts.map((craft) => {
    if (craft.name === craftName) {
      return { ...craft, level };
    }
    return craft;
  });
}

function toggleLearningPreference(option) {
  if (appState.wizard.learningPreferences.includes(option)) {
    appState.wizard.learningPreferences = appState.wizard.learningPreferences.filter((item) => item !== option);
  } else {
    appState.wizard.learningPreferences.push(option);
  }
}

function renderTimeOptions() {
  const wrap = document.getElementById("time-options");
  if (!wrap) return;

  const times = ["30 min", "1 hour", "4 hours", "Multiple days"];
  wrap.innerHTML = "";

  times.forEach((time) => {
    const row = document.createElement("label");
    row.className = `option-row time ${appState.wizard.timeCommitment === time ? "active" : ""}`;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "craft-time";
    input.checked = appState.wizard.timeCommitment === time;
    input.addEventListener("change", () => {
      appState.wizard.timeCommitment = time;
      renderTimeOptions();
    });

    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = time;

    row.appendChild(input);
    row.appendChild(text);
    wrap.appendChild(row);
  });
}

function renderCraftList() {
  const list = document.getElementById("wizard-craft-list");
  const clear = document.getElementById("wizard-clear-crafts");
  if (!list || !clear) return;

  const query = appState.wizard.search.trim().toLowerCase();
  const filtered = CRAFT_OPTIONS.filter((craft) => craft.toLowerCase().includes(query));

  list.innerHTML = "";

  filtered.forEach((craftName) => {
    const selected = getSelectedCraft(craftName);

    const item = document.createElement("div");

    const row = document.createElement("label");
    row.className = `option-row craft ${selected ? "active" : ""}`;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = Boolean(selected);
    input.addEventListener("change", () => {
      toggleCraft(craftName);
      renderCraftList();
    });

    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = craftName;

    row.appendChild(input);
    row.appendChild(text);
    item.appendChild(row);

    if (selected) {
      const expWrap = document.createElement("div");
      expWrap.className = "exp-wrap";

      const label = document.createElement("p");
      label.className = "exp-label";
      label.textContent = "Experience level:";
      expWrap.appendChild(label);

      const pills = document.createElement("div");
      pills.className = "exp-pills";

      ["beginner", "intermediate", "expert"].forEach((level) => {
        const pill = document.createElement("button");
        pill.type = "button";
        pill.className = `exp-pill ${selected.level === level ? "active" : ""}`;
        pill.textContent = level;
        pill.addEventListener("click", () => {
          setCraftLevel(craftName, level);
          renderCraftList();
          renderResultTags();
        });
        pills.appendChild(pill);
      });

      expWrap.appendChild(pills);
      item.appendChild(expWrap);
    }

    list.appendChild(item);
  });

  clear.classList.toggle("hidden", appState.wizard.selectedCrafts.length === 0);
}

function renderLearningOptions() {
  const wrap = document.getElementById("learning-options");
  if (!wrap) return;

  wrap.innerHTML = "";

  LEARNING_OPTIONS.forEach((option) => {
    const selected = appState.wizard.learningPreferences.includes(option);
    const row = document.createElement("label");
    row.className = `option-row learn ${selected ? "active" : ""}`;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = selected;
    input.addEventListener("change", () => {
      toggleLearningPreference(option);
      renderLearningOptions();
    });

    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = option;

    row.appendChild(input);
    row.appendChild(text);
    wrap.appendChild(row);
  });
}

function renderRepeatToggle() {
  const toggle = document.getElementById("repeat-toggle");
  const yesLabel = document.getElementById("toggle-yes");
  const noLabel = document.getElementById("toggle-no");

  if (!toggle || !yesLabel || !noLabel) return;

  const enabled = appState.wizard.repeatCraft;
  toggle.classList.toggle("off", !enabled);
  yesLabel.classList.toggle("active", enabled);
  noLabel.classList.toggle("active", !enabled);
}

function resetResultSupplyState() {
  appState.result.supplyPreferences = [];
  appState.result.zipCode = "";
  appState.result.showSupplyLinks = false;
}

function randomSuggestion() {
  const index = Math.floor(Math.random() * CRAFT_SUGGESTIONS.length);
  appState.result.currentSuggestion = CRAFT_SUGGESTIONS[index];
}

function renderResultTags() {
  const tags = document.getElementById("result-tags");
  if (!tags) return;

  tags.innerHTML = "";

  if (appState.wizard.timeCommitment) {
    const tag = document.createElement("span");
    tag.className = "tag time";
    tag.textContent = appState.wizard.timeCommitment;
    tags.appendChild(tag);
  }

  appState.wizard.selectedCrafts.forEach((craft) => {
    const tag = document.createElement("span");
    tag.className = "tag craft";
    tag.textContent = `${craft.name} - ${craft.level}`;
    tags.appendChild(tag);
  });

  appState.wizard.learningPreferences.forEach((pref) => {
    const tag = document.createElement("span");
    tag.className = "tag learn";
    tag.textContent = pref;
    tags.appendChild(tag);
  });
}

function renderResources() {
  const wrap = document.getElementById("result-resources");
  if (!wrap) return;

  wrap.innerHTML = "";

  appState.result.currentSuggestion.resources.forEach((resource) => {
    if (resource.type === "diagram" && resource.imageUrl) {
      const container = document.createElement("div");
      container.className = "resource-diagram";

      const title = document.createElement("p");
      title.textContent = resource.title;

      const img = document.createElement("img");
      img.src = resource.imageUrl;
      img.alt = resource.title;

      container.appendChild(title);
      container.appendChild(img);
      wrap.appendChild(container);
      return;
    }

    const link = document.createElement("a");
    link.className = "resource-link";
    link.href = resource.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const left = document.createElement("div");
    const title = document.createElement("div");
    title.textContent = resource.title;
    title.className = "resource-link-title";

    const type = document.createElement("div");
    type.textContent = resource.type;
    type.className = "resource-type";

    left.appendChild(title);
    left.appendChild(type);

    const arrow = document.createElement("div");
    arrow.className = "resource-arrow";
    arrow.textContent = "→";

    link.appendChild(left);
    link.appendChild(arrow);
    wrap.appendChild(link);
  });
}

function renderSuppliesList() {
  const list = document.getElementById("result-supplies-list");
  if (!list) return;

  list.innerHTML = "";

  appState.result.currentSuggestion.suppliesList.forEach((itemText) => {
    const item = document.createElement("li");
    item.textContent = itemText;
    list.appendChild(item);
  });
}

function toggleShopPreference(id) {
  if (appState.result.supplyPreferences.includes(id)) {
    appState.result.supplyPreferences = appState.result.supplyPreferences.filter((value) => value !== id);
  } else {
    appState.result.supplyPreferences.push(id);
  }

  appState.result.showSupplyLinks = false;
  renderShopOptions();
  renderSupplyLinks();
}

function renderShopOptions() {
  const wrap = document.getElementById("shop-options");
  const zipWrap = document.getElementById("zip-wrap");
  const zipInput = document.getElementById("zip-input");
  const findButton = document.getElementById("find-supplies");

  if (!wrap || !zipWrap || !zipInput || !findButton) return;

  wrap.innerHTML = "";

  SHOP_OPTIONS.forEach((option) => {
    const selected = appState.result.supplyPreferences.includes(option.id);

    const row = document.createElement("label");
    row.className = `option-row shop ${selected ? "active" : ""}`;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = selected;
    input.addEventListener("change", () => toggleShopPreference(option.id));

    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = option.label;

    row.appendChild(input);
    row.appendChild(text);
    wrap.appendChild(row);
  });

  const hasLocal = appState.result.supplyPreferences.includes("local");
  zipWrap.classList.toggle("hidden", !hasLocal);

  if (hasLocal) {
    zipInput.value = appState.result.zipCode;
  }

  findButton.classList.toggle("hidden", appState.result.supplyPreferences.length === 0);
}

function renderSupplyLinks() {
  const wrapper = document.getElementById("supply-links-wrap");
  const list = document.getElementById("supply-links");

  if (!wrapper || !list) return;

  if (!appState.result.showSupplyLinks) {
    wrapper.classList.add("hidden");
    list.innerHTML = "";
    return;
  }

  wrapper.classList.remove("hidden");
  list.innerHTML = "";

  appState.result.currentSuggestion.supplies.forEach((supply) => {
    const block = document.createElement("div");
    const name = document.createElement("p");
    name.className = "supply-item-name";
    name.textContent = supply.item;

    const row = document.createElement("div");
    row.className = "supply-link-row";

    if (appState.result.supplyPreferences.includes("amazon")) {
      const link = document.createElement("a");
      link.className = "supply-link amazon";
      link.href = supply.amazon;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "View on Amazon";
      row.appendChild(link);
    }

    if (appState.result.supplyPreferences.includes("michaels")) {
      const link = document.createElement("a");
      link.className = "supply-link michaels";
      link.href = supply.michaels;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "View on Michaels";
      row.appendChild(link);
    }

    if (appState.result.supplyPreferences.includes("hobbylobby")) {
      const link = document.createElement("a");
      link.className = "supply-link hobbylobby";
      link.href = supply.hobbylobby;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "View on Hobby Lobby";
      row.appendChild(link);
    }

    if (appState.result.supplyPreferences.includes("local") && appState.result.zipCode.trim()) {
      const link = document.createElement("a");
      link.className = "supply-link local";
      link.href = `https://www.google.com/maps/search/craft+stores+near+${encodeURIComponent(appState.result.zipCode.trim())}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Find Local Stores";
      row.appendChild(link);
    }

    block.appendChild(name);
    block.appendChild(row);
    list.appendChild(block);
  });
}

function renderTips() {
  const list = document.getElementById("result-tips");
  if (!list) return;

  list.innerHTML = "";

  appState.result.currentSuggestion.tips.forEach((tip) => {
    const item = document.createElement("li");
    item.textContent = tip;
    list.appendChild(item);
  });
}

function renderResultPage() {
  const headline = document.getElementById("result-craft-name");
  const desc = document.getElementById("result-description");
  const why = document.getElementById("result-why");
  const overview = document.getElementById("result-overview");

  if (!headline || !desc || !why || !overview) return;

  headline.textContent = `${appState.result.currentSuggestion.name}!`;
  desc.textContent = appState.result.currentSuggestion.description;
  why.textContent = appState.result.currentSuggestion.why;
  overview.textContent = appState.result.currentSuggestion.overview;

  renderResultTags();
  renderResources();
  renderYoutubeTutorial();
  renderSuppliesList();
  renderShopOptions();
  renderSupplyLinks();
  renderTips();
  renderSkillEstimator();
}

function runConfetti() {
  const layer = document.getElementById("confetti-layer");
  if (!layer) return;

  const emojis = ["🧵", "✂️", "🎨", "🖌️", "🧶", "📍", "✨"];
  layer.innerHTML = "";
  layer.classList.remove("hidden");

  for (let i = 0; i < 50; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confetti-item";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDuration = `${2 + Math.random() * 2}s`;
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    layer.appendChild(piece);
  }

  setTimeout(() => {
    layer.classList.add("hidden");
    layer.innerHTML = "";
  }, 4500);
}

function openCelebrateModal() {
  const modal = document.getElementById("celebrate-modal");
  if (!modal) return;
  modal.classList.remove("hidden");
}

function closeCelebrateModal() {
  const modal = document.getElementById("celebrate-modal");
  if (!modal) return;
  modal.classList.add("hidden");
}

function wireHome() {
  const scrollButton = document.getElementById("scroll-to-choices");
  const choicesSection = document.getElementById("choices-section");
  const inspoButton = document.getElementById("btn-inspo");
  const wizardButton = document.getElementById("btn-wizard");

  if (scrollButton && choicesSection) {
    scrollButton.addEventListener("click", () => {
      choicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (inspoButton) {
    inspoButton.addEventListener("click", () => showPage("inspiration"));
  }

  if (wizardButton) {
    wizardButton.addEventListener("click", () => showPage("wizard"));
  }
}

function wireInspiration() {
  const back = document.getElementById("inspo-back-home");
  const add = document.getElementById("inspo-add-btn");

  if (back) {
    back.addEventListener("click", () => showPage("home"));
  }

  if (add) {
    add.addEventListener("click", () => {
      alert("Add yours flow will be implemented next.");
    });
  }
}

function wireWizard() {
  const back = document.getElementById("wizard-back-home");
  const search = document.getElementById("wizard-craft-search");
  const clear = document.getElementById("wizard-clear-crafts");
  const toggle = document.getElementById("repeat-toggle");
  const submit = document.getElementById("wizard-submit");

  if (back) {
    back.addEventListener("click", () => showPage("home"));
  }

  if (search) {
    search.addEventListener("input", (event) => {
      appState.wizard.search = event.target.value;
      renderCraftList();
    });
  }

  if (clear) {
    clear.addEventListener("click", () => {
      appState.wizard.selectedCrafts = [];
      renderCraftList();
      renderResultTags();
    });
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      appState.wizard.repeatCraft = !appState.wizard.repeatCraft;
      renderRepeatToggle();
    });
  }

  if (submit) {
    submit.addEventListener("click", () => {
      if (!appState.wizard.timeCommitment) {
        alert("Please choose how much time you have to craft.");
        return;
      }

      randomSuggestion();
      resetResultSupplyState();
      renderResultPage();
      showPage("result");
      refreshSkillEstimate();
      refreshYoutubeTutorial();
    });
  }
}

function wireResult() {
  const back = document.getElementById("result-back-wizard");
  const shuffle = document.getElementById("result-shuffle");
  const zip = document.getElementById("zip-input");
  const find = document.getElementById("find-supplies");
  const crafted = document.getElementById("result-crafted-btn");
  const modal = document.getElementById("celebrate-modal");
  const share = document.getElementById("share-craft-btn");
  const keep = document.getElementById("keep-crafting-btn");

  if (back) {
    back.addEventListener("click", () => showPage("wizard"));
  }

  if (shuffle) {
    shuffle.addEventListener("click", () => {
      randomSuggestion();
      resetResultSupplyState();
      renderResultPage();
      refreshSkillEstimate();
      refreshYoutubeTutorial();
    });
  }

  if (zip) {
    zip.addEventListener("input", (event) => {
      appState.result.zipCode = event.target.value;
      if (appState.result.showSupplyLinks) {
        renderSupplyLinks();
      }
    });
  }

  if (find) {
    find.addEventListener("click", () => {
      appState.result.showSupplyLinks = true;
      renderSupplyLinks();
    });
  }

  if (crafted) {
    crafted.addEventListener("click", () => {
      runConfetti();
      setTimeout(openCelebrateModal, 500);
    });
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeCelebrateModal();
      }
    });
  }

  if (share) {
    share.addEventListener("click", () => {
      alert("Share functionality would go here!");
    });
  }

  if (keep) {
    keep.addEventListener("click", () => {
      closeCelebrateModal();
      randomSuggestion();
      resetResultSupplyState();
      renderResultPage();
      refreshSkillEstimate();
      refreshYoutubeTutorial();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initBackgroundCanvas();
  buildInspirationGrid();
  wireHome();
  wireInspiration();
  wireWizard();
  wireResult();

  renderTimeOptions();
  renderCraftList();
  renderLearningOptions();
  renderRepeatToggle();
  renderResultPage();

  initializePageFromHash();

  if (appState.page === "result") {
    refreshSkillEstimate();
    refreshYoutubeTutorial();
  }

  window.addEventListener("hashchange", initializePageFromHash);
  window.addEventListener("scroll", updateChoicesMotion, { passive: true });
  updateChoicesMotion();
});
