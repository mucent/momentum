function setDarkMode() {
  const darkMode = document.querySelectorAll('.darkMode');
  const wrap = document.querySelector('#wrap');
  const darkModeImg = darkModeBtn.querySelector('img');
  const outBtn = document.querySelector('#outBtn');
  const outBtnImg = outBtn.querySelector('img');
  const isDarkMode = localStorage.getItem('darkmode');
  if (isDarkMode === 'true') {
    darkMode.forEach((element) => {
      element.style.background = `rgba(255, 255, 255, 0.3)`;
      element.style.boxshadow = `7px 25px 45px rgb(255 255 255 / 10%)`;
      element.style.border = `1px solid rgba(255, 255, 255, 0.8);`;
    });
    wrap.style.background = `rgba(255, 255, 255, 0.3)`;
    darkModeImg.src = './img/dark.png';
    outBtnImg.src = './img/logout-dark.png';
    localStorage.setItem('darkmode', false);
  } else {
    darkMode.forEach((element) => {
      element.style.background = `rgba(0, 0, 0, 0.3)`;
      element.style.boxshadow = `7px 25px 45px rgb(0 0 0 / 10%)`;
      element.style.border = `1px solid rgba(0, 0, 0, 0.8);`;
    });
    wrap.style.background = `rgba(0, 0, 0, 0.3)`;
    darkModeImg.src = './img/light.svg';
    outBtnImg.src = './img/logout-light.png';
    localStorage.setItem('darkmode', true);
  }
}

const darkModeBtn = document.querySelector('#darkMode');
darkModeBtn.addEventListener('click', setDarkMode);
