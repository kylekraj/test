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
  "A tiny act of kindness from you will boomerang back quickly.",
  "A calm breeze will arrive exactly when your brain needs a reset.",
  "You will find a song tonight that feels like home.",
  "A small detour will lead you to something surprisingly lovely.",
  "Tomorrow's first message will make you smile for real.",
  "You will finish one annoying task in half the expected time.",
  "An unexpected compliment will stick with you all week.",
  "Your next deep breath will feel like turning the lights back on.",
  "A cozy drink and good timing are headed your way.",
  "You will remember an old goal and feel ready for it again.",
  "A gentle rain will make your day better, not worse.",
  "You will laugh at exactly the moment tension starts to rise.",
  "A cluttered corner will become your favorite calm spot.",
  "A delayed plan will improve in the waiting.",
  "You will notice beauty in a place you usually rush past.",
  "Your kindness today will quietly repair someone else's day.",
  "A question you've been carrying will answer itself soon.",
  "You will have just enough energy for the thing that matters.",
  "A peaceful evening is already reserving your name.",
  "You will discover that consistency is suddenly easier this week.",
  "A friend will reach out right when you were thinking of them.",
  "Your next decision will feel clear the moment you choose it.",
  "A long-standing worry is about to shrink to manageable size.",
  "You will catch a perfect sunset by accident.",
  "A small repair will prevent a larger headache.",
  "You will find the exact words you needed in time.",
  "A quiet morning will recharge you more than expected.",
  "The right idea will arrive while you are doing something ordinary.",
  "You will receive good news in a very casual way.",
  "An old hobby will suddenly feel fresh again.",
  "Your next to-do list will look less scary by noon.",
  "You will notice progress where you thought there was none.",
  "A tiny victory today will lead to a bigger one tomorrow.",
  "The answer you need is already in your notes somewhere.",
  "You will meet patience halfway and both of you will win.",
  "A bright sign appears right after your moment of doubt.",
  "You will get a lucky second chance at a first impression.",
  "Something you've misplaced will reappear in plain sight.",
  "A peaceful walk will untangle a noisy thought.",
  "You will solve a problem by simplifying, not adding more.",
  "A thoughtful stranger will restore your faith in people.",
  "Your instincts are sharper than your doubts today.",
  "You will turn a near-miss into a clean success.",
  "A little rest now will save a lot of effort later.",
  "You will find rhythm in work that felt chaotic yesterday.",
  "A sincere apology will reach you or leave you lighter either way.",
  "Your best idea this week arrives while doing dishes.",
  "You will notice that good boundaries attract better outcomes.",
  "A gentle yes is more powerful than a stressed maybe.",
  "You will step away at the right moment and return wiser.",
  "A playlist from the past will become your new favorite again.",
  "You will choose calm and still get everything done.",
  "A difficult conversation will end in relief.",
  "You will feel proud of how you handled a small challenge.",
  "The universe grants you premium timing for one important task.",
  "You will catch the exact train, bus, or moment you need.",
  "A warm light in a window will remind you to slow down.",
  "You will find unexpected comfort in a routine errand.",
  "A better plan will appear after you release the perfect one.",
  "You will receive help before you have to ask twice.",
  "Your next weekend holds at least one deeply peaceful hour.",
  "You will notice your confidence returning in quiet ways.",
  "A minor delay is protecting you from a bigger inconvenience.",
  "You will impress yourself with your calm under pressure.",
  "A fresh start hides inside a very normal Tuesday.",
  "You will remember that progress can be gentle and still real.",
  "A good idea from months ago is ready now.",
  "You will clean one drawer and also clear your mind.",
  "Someone around you will mirror your optimism today.",
  "You will feel less rushed after saying no to one thing.",
  "A spontaneous plan will be exactly what you needed.",
  "You will find gratitude in a moment you almost ignored.",
  "A late-night thought will become tomorrow's smart move.",
  "You will make peace with a choice you already made.",
  "A little courage today saves a lot of overthinking later.",
  "You will be pleasantly surprised by your own discipline.",
  "A kind message you send will echo back multiplied.",
  "You will discover that the hard part is already behind you.",
  "Your next meeting will end earlier and better than expected.",
  "A soft reset is coming for your mood and your inbox.",
  "You will spot an opportunity where others see only delay.",
  "A practical solution appears after one honest pause.",
  "You will reconnect with a place that makes you feel grounded.",
  "A tiny celebration today will fuel tomorrow's momentum.",
  "You will make room for joy and it will show up quickly.",
  "Your next step doesn't need to be big to be correct.",
  "A compliment you forgot is about to become true again.",
  "You will leave one room with less stress than you entered.",
  "A patient choice today creates freedom next week.",
  "You will notice how far you've come while doing something simple.",
  "A long exhale will unlock the answer you've been chasing.",
  "You will choose the wiser shortcut and avoid needless drama.",
  "A gentle routine will outperform a heroic sprint.",
  "You will find the right balance between hustle and ease.",
  "An overdue breakthrough is closer than it appears.",
  "You will be in the right place at a beautifully ordinary time.",
  "A peaceful ending makes room for an exciting beginning.",
  "You will wake up soon with unusual clarity and steady focus.",
  "A small promise you keep to yourself will change your week.",
  "You will discover that calm is your competitive advantage.",
  "A lucky coincidence is already on its way to your afternoon."
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
