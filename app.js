const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  class: 'Cookie-Dough',
  price: 1.25,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  class: 'Vanilla',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  class: 'Strawberry',
  price: 1.25,
  quantity: 0
}
]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  class: 'Sprinkles',
  price: .25,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  class: 'Chocolate-Chips',
  price: .25,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  class: 'Waffle-Cone',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  class: 'Waffle-Bowl',
  price: 4,
  quantity: 0
}]

//const cart = []

// function buyCookieDough() {
//   let buyCookieDough = iceCream.find(iceCreamItem => iceCreamItem.name = 'Cookie Dough')
//   buyCookieDough.quantity++
//   console.log(buyCookieDough)
// }
function addIceCreamToCart(iceCreamName) {
  let addItem = iceCream.find(iceCreamItem => iceCreamItem.name == iceCreamName)
  addItem.quantity++
  //console.log(addItem)
  drawCart()
  drawCone()
}
function addToppingToCart(toppingsName) {
  let addItem = toppings.find(toppingsItem => toppingsItem.name == toppingsName)
  addItem.quantity++
  drawCart()
  drawCone()
}
function addContainerToCart(containerName) {
  let addItem = containers.find(containerItem => containerItem.name == containerName)
  containers.forEach(containersItem => containersItem.quantity = 0)
  if (addItem.quantity < 1)
    addItem.quantity++
  drawCart()
  drawCone()
}

function drawCart() {
  // console.log(addToCartArray)
  let stringOfMenuItemHtml = ' '

  let iceCreamCart = document.getElementById('cartList');
  let allSelections = [
    iceCream,
    toppings,
    containers
  ]
  allSelections.forEach(arrays => {
    arrays.forEach(arrayItem => {
      if (arrayItem.quantity > 0) {
        stringOfMenuItemHtml += `
        <li class= "d-flex justify-content-between ">
            <p>${arrayItem.name}</p>
            <p>${arrayItem.quantity}</p>
            <p>$${arrayItem.price.toFixed(2)}</p>
            <p>$${(arrayItem.price * arrayItem.quantity).toFixed(2)}</p>
        </li>
        `
      }
    });
    iceCreamCart.innerHTML = stringOfMenuItemHtml
  })
  // iceCream.forEach(iceCreamItem => {
  //   if (iceCreamItem.quantity > 0) {
  // stringOfMenuItemHtml += `
  // <li class= "d-flex justify-content-between">
  //     <p>${iceCreamItem.name}</p>
  //     <p>${iceCreamItem.quantity}</p>
  //     <p>$${iceCreamItem.price}</p>
  //     <p>$${iceCreamItem.price * iceCreamItem.quantity}</p>
  // </li>
  // `
  //   }
  //   iceCreamCart.innerHTML = stringOfMenuItemHtml

  // })
  // toppings.forEach(toppingsItem => {
  //   if (toppingsItem.quantity > 0) {
  //     stringOfMenuItemHtml += `
  //     <li class= "d-flex justify-content-between">
  //         <p>${toppingsItem.name}</p>
  //         <p>${toppingsItem.quantity}</p>
  //         <p>$${toppingsItem.price}</p>
  //         <p>$${toppingsItem.price * toppingsItem.quantity}</p>
  //     </li>
  //     `
  //   }
  //   iceCreamCart.innerHTML = stringOfMenuItemHtml
  // })
  drawTotal()
}

function drawCone() {
  console.log('draw-cone')
  let stringOfMenuItemHtml = ' '
  let iceCreamCone = document.getElementById('iceCreamCone');
  let allSelections = [
    toppings,
    iceCream,
    containers
  ]
  allSelections.forEach(arrays => {
    arrays.forEach(arrayItem => {
      if (arrayItem.quantity > 0) {
        for (let I = 0; I < arrayItem.quantity; I++) {
          stringOfMenuItemHtml +=
            `
              <p onclick= "removeItem('${arrayItem.name}')"class= "${arrayItem.class} cone-element my-0 px-2"></p>
          `
        }
        console.log(`<p class="${arrayItem.class}">${arrayItem.name}</p>`)
      }
      iceCreamCone.innerHTML = stringOfMenuItemHtml
    })
  })
}

function drawTotal() {
  let sumCart = 0
  iceCream.forEach(iceCreamItem => {
    sumCart += (iceCreamItem.price * iceCreamItem.quantity)
  })
  toppings.forEach(toppingsItem => {
    sumCart += (toppingsItem.price * toppingsItem.quantity)
  })
  containers.forEach(containersItem => {
    sumCart += (containersItem.price * containersItem.quantity)
  })
  document.getElementById('total').innerText = `$${sumCart.toFixed(2)}`
  console.log(sumCart)
}

function removeItem(itemToBeRemoved) {
  let allArrays = [
    toppings,
    iceCream,
    containers
  ]
  allArrays.forEach(array => {
    array.forEach(arrayItem => {
      if (arrayItem.name == itemToBeRemoved)
        arrayItem.quantity--
    })
  })
  drawCart()
  drawCone()
}

function pay() {
  const wantsToCheckOut = window.confirm('Check Out?')
  if (!wantsToCheckOut) {
    return
  } else {
    let allArrays = [
      iceCream,
      toppings,
      containers
    ]
    allArrays.forEach(arrays => {
      arrays.forEach(arrayItem => arrayItem.quantity = 0)
    })
    drawCart()
    drawCone()
  }
}