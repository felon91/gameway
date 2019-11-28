let donatConfig = {
  relationShekel: 10,
  amount: {
    'first': 1000,
    'second': 3000,
    'third': 5000,
    'fourth': 10000,
    'fifth': 14000,
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
  const value = +evt.target.value;
  const relationShekel = this.options.relationShekel;
  const discount = additionalDiscount({
    'amount': this.options.amount,
    'amountForDiscount': this.options.amountForDiscount,
    'value': value
  }).discount;

  let amountDiscount = (discount !== 0) ? (value * discount) / 100 : 0;
  let totalShekel = Math.floor((value + amountDiscount) / relationShekel);

  this.el.textContent = `${totalShekel} SH`;
  activeListItem(additionalDiscount({
    'amount': this.options.amount,
    'amountForDiscount': this.options.amountForDiscount,
    'value': value
  }).activeItem, bonusList);
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
  const name = this.querySelector('#login').value;
  const amount = this.querySelector('#amount').value;
  alert(`Имя: ${name}, Сумма: ${amount}`);
}

const $elShekel = document.querySelector('.donat-form__shekel');
document.querySelector('input[data-amount]').addEventListener('input', {handleEvent: converterShekel, el: $elShekel, options: donatConfig});
document.querySelector('#donat').addEventListener('submit', payDonate);
const bonusList = document.querySelectorAll('.donat__bonus li');