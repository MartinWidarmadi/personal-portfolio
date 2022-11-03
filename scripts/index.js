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
