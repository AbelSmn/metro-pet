let emoticon = document.getElementById('emoticon');
let currentEmotionText = document.getElementById('current-emotion');

// Load saved values or set defaults
let hunger = parseInt(localStorage.getItem('hunger')) || 100;
let fun = parseInt(localStorage.getItem('fun')) || 100;
let thirst = parseInt(localStorage.getItem('thirst')) || 100;
let isBlinking = false;

updateEmotion();

// Decrease stats every 1-2 minutes
setInterval(() => {
  hunger = Math.max(0, hunger - 5);
  fun = Math.max(0, fun - 5);
  thirst = Math.max(0, thirst - 5);
  
  saveData();
  updateEmotion();
}, Math.floor(Math.random() * 60000) + 60000); // 1-2 minutes

// Random blinking every 5-10 seconds
setInterval(() => {
  isBlinking = !isBlinking;
  updateEmotion();
}, Math.floor(Math.random() * 5000) + 5000); // 5-10 sec

function feed() {
  hunger = Math.min(100, hunger + 30);
  updateEmotion();
  saveData();
}

function giveToy() {
  fun = Math.min(100, fun + 30);
  updateEmotion();
  saveData();
}

function giveWater() {
  thirst = Math.min(100, thirst + 30);
  updateEmotion();
  saveData();
}

function updateEmotion() {
  let eyes = isBlinking ? "¦" : ":"; // Blink randomly
  
  if (hunger <= 20) {
    emoticon.textContent = `${eyes}-o`;
    currentEmotionText.textContent = 'Hungry';
  } else if (thirst <= 20) {
    emoticon.textContent = `${eyes}-(`;
    currentEmotionText.textContent = 'Thirsty';
  } else if (fun <= 20) {
    emoticon.textContent = `${eyes}-/`;
    currentEmotionText.textContent = 'Bored';
  } else {
    emoticon.textContent = `${eyes}-)`;
    currentEmotionText.textContent = 'Happy';
  }
}

function saveData() {
  localStorage.setItem('hunger', hunger);
  localStorage.setItem('fun', fun);
  localStorage.setItem('thirst', thirst);
}