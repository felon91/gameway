let donatConfig = {
  relationShekel: 1000,
  maxShekel: 99999,
  amount: {
    'first': 100,
    'second': 300,
    'third': 500,
    'fourth': 1000,
    'fifth': 1400,
  },
  amountForDiscount: {
    'first': 20,
    'second': 25,
    'third': 30,
    'fourth': 35,
    'fifth': 50,
  },
};

function converterShekel(evt) {
  const value = +priceLimit(this.options.maxShekel, this.inputShekel, evt.target.value);
  const relationShekel = this.options.relationShekel;

  //Кол-во бонусных шейкелей
  const discount = additionalDiscount({
    'amount': this.options.amount,
    'amountForDiscount': this.options.amountForDiscount,
    'value': value
  }).discount;

  let amountDiscount = (discount !== 0) ? (value * discount) / 100 : 0;
  let totalShekel = Math.floor(value + amountDiscount);
  let fullPrice = Math.floor(value * relationShekel);

  this.el.textContent = `${totalShekel} SH`;
  this.btnSpan.textContent = fullPrice;
  activeListItem(additionalDiscount({
    'amount': this.options.amount,
    'amountForDiscount': this.options.amountForDiscount,
    'value': value
  }).activeItem, bonusList);
}

function priceLimit(countShekel, inputShekel, value) {
  value = (value > countShekel) ? countShekel : value;
  inputShekel.value = value;
  return value;
}

function additionalDiscount(options) {
  let discount = 0;
  let activeItem = 0;

  if (
      options.value >= options.amount.first
      &&
      options.value < options.amount.second
  ) {
    discount = options.amountForDiscount.first;
    activeItem = 1;
  }
  else if (
      options.value >= options.amount.second
      &&
      options.value < options.amount.third
  ) {
    discount = options.amountForDiscount.second;
    activeItem = 2;
  }
  else if (
      options.value >= options.amount.third
      &&
      options.value < options.amount.fourth
  ) {
    discount = options.amountForDiscount.third;
    activeItem = 3;
  }
  else if (
      options.value >= options.amount.fourth
      &&
      options.value < options.amount.fifth
  ) {
    discount = options.amountForDiscount.fourth;
    activeItem = 4;
  }
  else if (options.value >= options.amount.fifth) {
    discount = options.amountForDiscount.fifth;
    activeItem = 5;
  }
  return {'discount': discount, 'activeItem': activeItem};
}

function activeListItem(itemNumber, listEl) {
  for(let i = 0; i < listEl.length; i++) {
    listEl[i].classList.remove('active');
  }
  listEl[itemNumber].classList.add('active');
}

function payDonate(evt) {
  evt.preventDefault();
  const name = this.querySelector('#email').value;
  const amount = this.querySelector('#amount').value;
  alert(`Имя: ${name}, Сумма: ${amount}`);
}

const $elShekel = document.querySelector('.donat-form__shekel');
const $btnSpan = document.querySelector('.donat-form__btn button span');
const $inputShekel = document.querySelector('#amount');
document.querySelector('input[data-amount]').addEventListener('input', {handleEvent: converterShekel, el: $elShekel, inputShekel: $inputShekel, options: donatConfig, btnSpan: $btnSpan});
document.querySelector('#donat').addEventListener('submit', payDonate);
const bonusList = document.querySelectorAll('.donat__bonus li');
