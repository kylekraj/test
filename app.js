const fortunes = [
  {
    text: "A mysterious stranger will compliment your snack choices.",
    memeSubreddit: "foodmemes"
  },
  {
    text: "Today you will win an argument with facts and a dramatic eyebrow raise.",
    memeSubreddit: "ProgrammerHumor"
  },
  {
    text: "Your coffee will be exactly the right temperature on the first sip.",
    memeSubreddit: "coffee"
  },
  {
    text: "An excellent nap is in your near future.",
    memeSubreddit: "sleep"
  },
  {
    text: "You will discover money in a jacket you haven't worn in months.",
    memeSubreddit: "personalfinance"
  },
  {
    text: "A pigeon secretly admires your walking style.",
    memeSubreddit: "birdsarentreal"
  },
  {
    text: "You will send a text with no typos and feel unstoppable.",
    memeSubreddit: "me_irl"
  },
  {
    text: "A minor inconvenience will cancel itself out before lunch.",
    memeSubreddit: "wholesomememes"
  },
  {
    text: "Your next playlist will be all bangers, no skips.",
    memeSubreddit: "MusicMemes"
  },
  {
    text: "You will remember why you entered the room before forgetting again.",
    memeSubreddit: "adhdmeme"
  },
  {
    text: "A lucky parking spot is searching for you right now.",
    memeSubreddit: "mildlyinfuriating"
  },
  {
    text: "You will find the perfect meme for every occasion this week.",
    memeSubreddit: "memes"
  },
  {
    text: "Someone will laugh at your joke exactly 3 seconds after hearing it.",
    memeSubreddit: "funny"
  },
  {
    text: "Your socks will remain mysteriously matched after laundry day.",
    memeSubreddit: "oddlysatisfying"
  },
  {
    text: "A random idea you have at 2:17 PM will be surprisingly brilliant.",
    memeSubreddit: "showerthoughts"
  },
  {
    text: "You are one bold move away from feeling very accomplished.",
    memeSubreddit: "GetMotivated"
  },
  {
    text: "The universe approves your decision to order dessert.",
    memeSubreddit: "dessert"
  },
  {
    text: "You will dodge an awkward conversation with expert timing.",
    memeSubreddit: "socialskills"
  },
  {
    text: "A houseplant will thrive simply because you looked at it kindly.",
    memeSubreddit: "plants"
  },
  {
    text: "Your next online order will arrive earlier than expected.",
    memeSubreddit: "ExpectationVsReality"
  },
  {
    text: "You will open the fridge and instantly remember what you wanted.",
    memeSubreddit: "kitchenconfidential"
  },
  {
    text: "Today, your Wi-Fi will be faster when you need it most.",
    memeSubreddit: "techsupportmemes"
  },
  {
    text: "The last cookie is yours by destiny, not chance.",
    memeSubreddit: "cookies"
  },
  {
    text: "A forgotten task will become easy the moment you start it.",
    memeSubreddit: "productivity"
  },
  {
    text: "Your future includes excellent vibes and unexpectedly good fries.",
    memeSubreddit: "fries"
  },
  {
    text: "You will survive your inbox and maybe even conquer it.",
    memeSubreddit: "WorkReform"
  },
  {
    text: "A tiny act of kindness from you will boomerang back quickly.",
    memeSubreddit: "MadeMeSmile"
  }
];

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

async function loadMeme(subreddit) {
  memeStatus.textContent = `Tuning into r/${subreddit} for a matching meme...`;
  memeImage.hidden = true;
  memeImage.removeAttribute("src");
  memeImage.alt = "";

  try {
    const response = await fetch(`https://meme-api.com/gimme/${subreddit}`);

    if (!response.ok) {
      throw new Error(`Meme request failed: ${response.status}`);
    }

    const meme = await response.json();

    if (!meme.url || !meme.title) {
      throw new Error("Meme response did not include expected fields.");
    }

    memeImage.src = meme.url;
    memeImage.alt = meme.title;
    memeImage.hidden = false;
    memeStatus.textContent = `Matched from r/${meme.subreddit}: ${meme.title}`;
  } catch (error) {
    memeStatus.textContent =
      "Meme transmission failed. Smash the fortune button for a fresh pairing.";
  }
}

fortuneBtn.addEventListener("click", async () => {
  const nextFortune = getRandomFortune();
  currentFortune = nextFortune.text;
  fortuneText.textContent = currentFortune;
  copyStatus.textContent = "";
  await loadMeme(nextFortune.memeSubreddit);
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
