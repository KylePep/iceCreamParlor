const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1.25,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 1.25,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: .25,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: .25,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
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
  let addItem = iceCream.find(iceCreamItem => iceCreamItem.name = iceCreamName)
  addItem.quantity++
  console.log(addItem)

  drawCart()
}

function drawCart() {
  let cartItems = iceCream.forEach(iceCreamItem => iceCreamItem.quantity{
    if(iceCreamItem.quantity > 0)
})
}