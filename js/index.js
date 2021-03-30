// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroomOne => {
    if (state.mushrooms) {
      mushroomOne.style.visibility = 'visible';
    } else {
      mushroomOne.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(greenPeper => {
    if (state.greenPeppers) {
      greenPeper.style.visibility = 'visible';
    } else {
      greenPeper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(whiteSaucePar => {
    if (state.whiteSauce) {
      whiteSaucePar.classList.add('sauce-white');
    } else {
      whiteSaucePar.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(glutenCrust => {
    if (state.glutenFreeCrust) {
      glutenCrust.classList.add('crust-gluten-free')
    //  glutenCrust.setAttribute('class', 'crust-gluten-free')
    } else {
      glutenCrust.classList.remove('crust-gluten-free')
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepBtn = document.querySelector('.btn-pepperoni');
    if (state.pepperoni) {
      // button.setAttributeNode('class', 'active')
      pepBtn.classList.add('active')
    } else {
      // button.removeAttributeNode('class', 'active');
      pepBtn.classList.remove('active')
    }
  const mushroomBtn = document.querySelector('.btn-mushrooms');
    if (state.mushrooms) {
      mushroomBtn.classList.add('active')
    } else {
      mushroomBtn.classList.remove('active')
    }
  const peppersBtn = document.querySelector('.btn-green-peppers');
    if (state.greenPeppers) {
      peppersBtn.classList.add('active')
    } else {
      peppersBtn.classList.remove('active')
    }
  const sauceBtn = document.querySelector('.btn-sauce');
    if (state.whiteSauce) {
      sauceBtn.classList.add('active')
    } else {
      sauceBtn.classList.remove('active')
    }
  const glutenBtn = document.querySelector('.btn-crust');
    if (state.glutenFreeCrust) {
      glutenBtn.classList.add('active')
    } else {
      glutenBtn.classList.remove('active')
    }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
}

renderEverything();

document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
