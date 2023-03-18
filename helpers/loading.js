export default {
  show () {
    const spinDiv = document.createElement('div');
    spinDiv.id = 'spin-overlay';
    spinDiv.classList.add('spin-overlay');
    spinDiv.innerHTML += '<div class="wrap"><div class="circle"></div></div>';
    document.body.appendChild(spinDiv);
    setTimeout(() => {
      document.getElementById('spin-overlay').style.opacity = 1;
    });
  },
  hide () {
    const spinOverlay = document.getElementById('spin-overlay');
    if (!spinOverlay) {
      return;
    }
    document.getElementById('spin-overlay').style.opacity = '';
    setTimeout(() => {
      document.getElementById('spin-overlay').remove();
    }, 500);
  }
};
