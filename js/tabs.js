const tabButtons = document.querySelectorAll('.design-list__item');
console.dir(tabButtons);

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', (event) => {
    console.dir(event.target);
  })
})