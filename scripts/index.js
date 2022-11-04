let tabLinks = document.querySelectorAll('.tab-links');
let tabContents = document.querySelectorAll('.tab-contents');
console.log(tabContents);

const openTab = (tabName) => {
  for (tabLink of tabLinks) {
    tabLink.classList.remove('active-link');
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');
  document.querySelector(`#${tabName}`).classList.add('active-tab');
};

const sideMenu = document.querySelector('#sideMenu');

const openMenu = () => {
  sideMenu.style.right = '0';
  console.log('lalala');
};

const closeMenu = () => {
  sideMenu.style.right = '-200px';
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbx6hPSLGdDE0Qg1-lIEUILUfd9tUDqZoqse5riD2trcHRcTnUdyQWQS8TCFb6MAdp0Reg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.querySelector('#msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Message sent successfully';
      setTimeout(() => {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
