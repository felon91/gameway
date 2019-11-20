window.addEventListener('resize', throttle(checkFullPage, 500));
document.querySelectorAll('[data-popup="video"]').forEach(function(item) {
  item.addEventListener('click', openPopup);
});

document.querySelector('[data-popup="close"]').addEventListener('click', closePopup);
document.querySelector('[data-popup="close"]').addEventListener('click', closePopup);

function openPopup(evt) {
  evt.preventDefault();
  document.querySelector('.popup').classList.add('popup--active');
}

function closePopup(evt) {
  evt.preventDefault();
  document.querySelector('.popup').classList.remove('popup--active');
}

function throttle(func, ms) {

  let isThrottled = false,
      savedArgs,
      savedThis;

  function wrapper() {

    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

let exists = null;
if (window.innerWidth >= 990) {
  exists = true;
  initialization();
}

function checkFullPage() {
  if (window.innerWidth <= 990) {
    if (exists) {
      fullpage_api.destroy('all');
      document.querySelector('[data-anchor="secondScreen"]').id = 'secondScreen';
      document.querySelector('[data-anchor="howToPlay"]').id = 'howToPlay';
      exists = false;
    }
  } else {
    if (!exists) {
      document.querySelector('[data-anchor="secondScreen"]').id = '';
      document.querySelector('[data-anchor="howToPlay"]').id = '';
      initialization();
      exists = true;
    }
  }
}

function initialization(){
  let myFullPage = new fullpage('.fullpage', {
    scrollOverflow: true,
    responsiveWidth: 990,
    licenseKey: 'DB42A1BE-F3064F15-81F794D3-BAFDD808',
  });
}


(function() {

  let increment = 0;
  let drops = "";
  let backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  document.querySelector('.rain.front-row').insertAdjacentHTML('beforeend', drops);
  document.querySelector('.rain.back-row').insertAdjacentHTML('beforeend', backDrops);
})();