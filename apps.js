const hamburger = document.querySelector('.bars');
const overlay = document.querySelector('.open');
const cancel = document.querySelector('.close');
const mobileNavItems = document.querySelectorAll('.navlistmoblie > li');
console.log(mobileNavItems)

hamburger.addEventListener('click', () => {
  overlay.classList.remove('hidden') 
  overlay.classList.add('show')
  });
  
  cancel.addEventListener('click', () => {
    overlay.classList.add('hidden')
    overlay.classList.remove('show') 
  });

  mobileNavItems.forEach((e) => {
    e.addEventListener('click', () => {
    overlay.classList.add('hidden')
    overlay.classList.remove('show')
    })
  })

 