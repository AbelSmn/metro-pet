let emoticon = document.getElementById('emoticon');
let currentEmotionText = document.getElementById('current-emotion');

let hungerBar = document.getElementById('hunger-bar');
let funBar = document.getElementById('fun-bar');
let thirstBar = document.getElementById('thirst-bar');

// Load previous values or set defaults
let hunger = parseInt(localStorage.getItem('hunger')) || 100;
let fun = parseInt(localStorage.getItem('fun')) || 100;
let thirst = parseInt(localStorage.getItem('thirst')) || 100;

updateBars();
updateEmotion();

// Decrease stats every 30-60 seconds
setInterval(() => {
  hunger = Math.max(0, hunger - 5);
  fun = Math.max(0, fun - 5);
  thirst = Math.max(0, thirst - 5);
  
  saveData();
  updateBars();
  updateEmotion();
}, Math.floor(Math.random() * 30000) + 30000); // 30-60 sec

function feed() {
  hunger = Math.min(100, hunger + 30);
  updateBars();
  updateEmotion();
  saveData();
}

function giveToy() {
  fun = Math.min(100, fun + 30);
  updateBars();
  updateEmotion();
  saveData();
}

function giveWater() {
  thirst = Math.min(100, thirst + 30);
  updateBars();
  updateEmotion();
  saveData();
}

function updateBars() {
  hungerBar.style.width = `${hunger}%`;
  funBar.style.width = `${fun}%`;
  thirstBar.style.width = `${thirst}%`;
}

function updateEmotion() {
  if (hunger <= 20) {
    emoticon.textContent = ':-o';
    currentEmotionText.textContent = 'Hungry';
  } else if (thirst <= 20) {
    emoticon.textContent = ':-(';
    currentEmotionText.textContent = 'Thirsty';
  } else if (fun <= 20) {
    emoticon.textContent = ':-/';
    currentEmotionText.textContent = 'Bored';
  } else {
    emoticon.textContent = ':-)';
    currentEmotionText.textContent = 'Happy';
  }
}

function saveData() {
  localStorage.setItem('hunger', hunger);
  localStorage.setItem('fun', fun);
  localStorage.setItem('thirst', thirst);
}
