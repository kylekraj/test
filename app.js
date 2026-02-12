const fortunes = [
  "A mysterious stranger will compliment your snack choices.",
  "Today you will win an argument with facts and a dramatic eyebrow raise.",
  "Your coffee will be exactly the right temperature on the first sip.",
  "An excellent nap is in your near future.",
  "You will discover money in a jacket you haven't worn in months.",
  "A pigeon secretly admires your walking style.",
  "You will send a text with no typos and feel unstoppable.",
  "A minor inconvenience will cancel itself out before lunch.",
  "Your next playlist will be all bangers, no skips.",
  "You will remember why you entered the room before forgetting again.",
  "A lucky parking spot is searching for you right now.",
  "You will find the perfect meme for every occasion this week.",
  "Someone will laugh at your joke exactly 3 seconds after hearing it.",
  "Your socks will remain mysteriously matched after laundry day.",
  "A random idea you have at 2:17 PM will be surprisingly brilliant.",
  "You are one bold move away from feeling very accomplished.",
  "The universe approves your decision to order dessert.",
  "You will dodge an awkward conversation with expert timing.",
  "A houseplant will thrive simply because you looked at it kindly.",
  "Your next online order will arrive earlier than expected.",
  "You will open the fridge and instantly remember what you wanted.",
  "Today, your Wi-Fi will be faster when you need it most.",
  "The last cookie is yours by destiny, not chance.",
  "A forgotten task will become easy the moment you start it.",
  "Your future includes excellent vibes and unexpectedly good fries.",
  "You will survive your inbox and maybe even conquer it.",
  "A tiny act of kindness from you will boomerang back quickly."
];

const peacefulKeywords = [
  "moonlight-city",
  "rain-neon",
  "quiet-cafe",
  "stargazing",
  "zen-garden",
  "night-ocean",
  "misty-mountains",
  "sunrise-lake",
  "city-skyline",
  "floating-lanterns",
  "japanese-garden",
  "forest-trail"
];

const fortuneText = document.getElementById("fortuneText");
const fortuneBtn = document.getElementById("fortuneBtn");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");
const fortuneImage = document.getElementById("fortuneImage");
const imageLabel = document.getElementById("imageLabel");

let currentFortune = "";

function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}

function keywordFromFortune(fortune) {
  let hash = 0;

  for (let i = 0; i < fortune.length; i += 1) {
    hash = (hash << 5) - hash + fortune.charCodeAt(i);
    hash |= 0;
  }

  const index = Math.abs(hash) % peacefulKeywords.length;
  return peacefulKeywords[index];
}

function updatePeacefulImage(fortune) {
  const keyword = keywordFromFortune(fortune);
  const encodedKeyword = encodeURIComponent(keyword);

  fortuneImage.src = `https://loremflickr.com/900/500/${encodedKeyword},peaceful,night?lock=${encodedKeyword}`;
  fortuneImage.alt = `A peaceful ${keyword.replace(/-/g, " ")} scene inspired by your fortune`;
  imageLabel.textContent = `Peaceful scene for your fortune: ${keyword.replace(/-/g, " ")}`;
}

fortuneBtn.addEventListener("click", () => {
  currentFortune = getRandomFortune();
  fortuneText.textContent = currentFortune;
  updatePeacefulImage(currentFortune);
  copyStatus.textContent = "";
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
