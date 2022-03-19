const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescription = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', (event) => {
    tabButton.dataset.active = '123'
    tabDescription.forEach((descr, indexDescr) => {
      if(index === indexDescr) {
        descr.classList.remove('hidden');
      } else {
        descr.classList.add('hidden');
      }
    })
    tabImages.forEach((images, indeximages) => {
      if(index === indeximages) {
        images.classList.remove('hidden');
      } else {
        images.classList.add('hidden');
      }
    })
    tabButtons.forEach((btn) => {
      if(btn === event.target) {
        btn.classList.add('design-list__item_active');
      } else {
        btn.classList.remove('design-list__item_active');
      }
    })
  })
})


// Day 1: 38:30