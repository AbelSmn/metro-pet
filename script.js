let emoticon = document.getElementById('emoticon');

function changeEmotion(emotion) {
  switch (emotion) {
    case 'happy':
      emoticon.textContent = ':-)';
      break;
    case 'sad':
      emoticon.textContent = ':-(';
      break;
    case 'bored':
      emoticon.textContent = ':-/';
      break;
    case 'hungry':
      emoticon.textContent = ':-o';
      break;
  }
}

function feed() {
  changeEmotion('happy');
  alert('You fed your pet!');
}

function giveWater() {
  changeEmotion('happy');
  alert('You gave water to your pet!');
}

function giveToy() {
  changeEmotion('bored');
  alert('You gave a toy to your pet!');
}
