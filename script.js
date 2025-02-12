const emoticon = document.getElementById('emoticon');
const emotionBar = document.getElementById('emotion-bar');
const emotionText = document.getElementById('emotion-text');

// Load the stored emotion from localStorage
let currentEmotion = localStorage.getItem('currentEmotion') || 'happy';
updateEmotion(currentEmotion);

// Function to change the emotion
function changeEmotion(emotion) {
  currentEmotion = emotion;
  localStorage.setItem('currentEmotion', emotion);
  updateEmotion(emotion);
}

// Update the display based on the current emotion
function updateEmotion(emotion) {
  switch (emotion) {
    case 'happy':
      emoticon.textContent = ':-)';
      emotionText.textContent = 'Happy';
      break;
    case 'sad':
      emoticon.textContent = ':-(';
      emotionText.textContent = 'Sad';
      break;
    case 'bored':
      emoticon.textContent = ':-/';
      emotionText.textContent = 'Bored';
      break;
    case 'hungry':
      emoticon.textContent = ':-o';
      emotionText.textContent = 'Hungry';
      break;
  }
}

// Feed the pet (sets it to happy)
function feed() {
  changeEmotion('happy');
  alert('You fed your pet!');
}

// Give water to the pet (sets it to happy)
function giveWater() {
  changeEmotion('happy');
  alert('You gave water to your pet!');
}

// Give a toy to the pet (sets it to bored)
function giveToy() {
  changeEmotion('bored');
  alert('You gave a toy to your pet!');
}

// Randomly change the pet's emotion over time
function randomEmotionChange() {
  const emotions = ['hungry', 'sad', 'bored'];
  const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
  changeEmotion(randomEmotion);
}

// Change the emotion randomly at random intervals
setInterval(randomEmotionChange, Math.random() * 5000 + 5000); // Between 5 and 10 seconds
