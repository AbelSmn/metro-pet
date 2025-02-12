document.querySelectorAll('.tile').forEach(tile => {
  tile.addEventListener('click', () => {
    alert(`${tile.querySelector('.tile-content').textContent} clicked!`);
  });
});
