const fortunes = [
  {
    text: "A dank prophecy says your next snack will taste 47% better when eaten over the sink.",
    keywords: ["food", "snack", "eat", "kitchen"],
    memeSubreddits: ["foodmemes", "meirl", "memes"]
  },
  {
    text: "The meme council grants you one perfect comeback, but only 9 hours too late.",
    keywords: ["comeback", "argument", "debate", "brain"],
    memeSubreddits: ["meirl", "dankmemes", "memes"]
  },
  {
    text: "Your coffee will hit so hard this morning that your to-do list will fear you.",
    keywords: ["coffee", "morning", "energy", "work"],
    memeSubreddits: ["coffee", "ProgrammerHumor", "wholesomememes"]
  },
  {
    text: "A nap of legendary power approaches. Do not resist the blanket DLC.",
    keywords: ["sleep", "nap", "tired", "bed"],
    memeSubreddits: ["wholesomememes", "meirl", "memes"]
  },
  {
    text: "Your playlist will slap so hard today even your houseplant will nod on beat.",
    keywords: ["music", "playlist", "song", "vibes"],
    memeSubreddits: ["MusicMemes", "memes", "funny"]
  },
  {
    text: "You will open the fridge, forget why, and still leave with emotional support cheese.",
    keywords: ["fridge", "food", "hungry", "kitchen"],
    memeSubreddits: ["foodmemes", "meirl", "dankmemes"]
  },
  {
    text: "A random idea at 2:17 PM will be either billion-dollar genius or absolute chaos meme.",
    keywords: ["idea", "brain", "creative", "chaos"],
    memeSubreddits: ["dankmemes", "memes", "ProgrammerHumor"]
  },
  {
    text: "You are one tiny task away from unlocking Main Character Productivity Arc.",
    keywords: ["productivity", "task", "work", "focus"],
    memeSubreddits: ["ProgrammerHumor", "meirl", "memes"]
  },
  {
    text: "Today your Wi-Fi will be stable exactly when you need to pretend you were listening.",
    keywords: ["wifi", "internet", "tech", "meeting"],
    memeSubreddits: ["ProgrammerHumor", "techsupportgore", "memes"]
  },
  {
    text: "The universe confirms your decision to order fries, dessert, and zero regrets.",
    keywords: ["fries", "dessert", "food", "happy"],
    memeSubreddits: ["foodmemes", "wholesomememes", "memes"]
  },
  {
    text: "Someone will finally laugh at your joke, and your ego will install RGB lighting.",
    keywords: ["joke", "laugh", "funny", "social"],
    memeSubreddits: ["funny", "memes", "dankmemes"]
  },
  {
    text: "You will survive your inbox today by clicking 'mark as read' with cinematic confidence.",
    keywords: ["inbox", "email", "work", "office"],
    memeSubreddits: ["ProgrammerHumor", "meirl", "memes"]
  },
  {
    text: "Your socks will emerge from laundry still matched. This is the rarest loot drop.",
    keywords: ["laundry", "socks", "home", "rare"],
    memeSubreddits: ["meirl", "wholesomememes", "memes"]
  },
  {
    text: "A small act of kindness from you will return as unexpectedly premium vibes.",
    keywords: ["kindness", "wholesome", "good", "friend"],
    memeSubreddits: ["wholesomememes", "MadeMeSmile", "memes"]
  }
];

const allowedMemeExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
const blockedTitleTerms = ["ama", "discussion", "question", "help", "advice", "serious"];

const fortuneText = document.getElementById("fortuneText");
const fortuneBtn = document.getElementById("fortuneBtn");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");
const memeStatus = document.getElementById("memeStatus");
const memeImage = document.getElementById("memeImage");

let currentFortune = "";

function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}

function isLikelyMemePost(post) {
  if (!post || !post.url || !post.title) {
    return false;
  }

  const lowerUrl = post.url.toLowerCase();
  const hasImageExtension = allowedMemeExtensions.some((ext) => lowerUrl.includes(ext));
  const isSafe = !post.nsfw && !post.spoiler;
  const title = post.title.toLowerCase();
  const looksLikeDiscussion = blockedTitleTerms.some((term) => title.includes(term));

  return hasImageExtension && isSafe && !looksLikeDiscussion;
}

function scoreRelevance(post, keywords) {
  const title = (post.title || "").toLowerCase();
  return keywords.reduce((score, keyword) => {
    return score + (title.includes(keyword.toLowerCase()) ? 1 : 0);
  }, 0);
}

async function fetchMemeCandidates(subreddit) {
  const response = await fetch(`https://meme-api.com/gimme/${subreddit}/15`);

  if (!response.ok) {
    throw new Error(`Meme request failed: ${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data.memes) ? data.memes : [];
}

async function loadMeme(fortune) {
  memeStatus.textContent = "Consulting the meme archives...";
  memeImage.hidden = true;
  memeImage.removeAttribute("src");
  memeImage.alt = "";

  try {
    const allCandidates = [];

    for (const subreddit of fortune.memeSubreddits) {
      const memes = await fetchMemeCandidates(subreddit);
      allCandidates.push(...memes);
    }

    const filtered = allCandidates.filter(isLikelyMemePost);

    if (filtered.length === 0) {
      throw new Error("No quality meme candidates returned.");
    }

    filtered.sort((a, b) => scoreRelevance(b, fortune.keywords) - scoreRelevance(a, fortune.keywords));
    const bestMeme = filtered[0];

    memeImage.src = bestMeme.url;
    memeImage.alt = bestMeme.title;
    memeImage.hidden = false;
    memeStatus.textContent = `Meme match (${bestMeme.subreddit}): ${bestMeme.title}`;
  } catch (error) {
    memeStatus.textContent =
      "The meme satellites are being weird. Hit the fortune button again for a fresh pull.";
  }
}

fortuneBtn.addEventListener("click", async () => {
  const nextFortune = getRandomFortune();
  currentFortune = nextFortune.text;
  fortuneText.textContent = currentFortune;
  copyStatus.textContent = "";
  await loadMeme(nextFortune);
});

copyBtn.addEventListener("click", async () => {
  const fortuneToCopy = currentFortune || fortuneText.textContent;

  if (!fortuneToCopy || fortuneToCopy === "Your fortune will appear here.") {
    copyStatus.textContent = "Get a fortune first, then copy it.";
    return;
  }

  try {
    await navigator.clipboard.writeText(fortuneToCopy);
    copyStatus.textContent = "Fortune copied to clipboard!";
  } catch (error) {
    copyStatus.textContent = "Clipboard access failed. Please copy manually.";
  }
});
