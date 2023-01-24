// check that the document is done loading before interaction of javascript with the DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", render);
} else {
  render();
}

function render() {
  // get ADD TO CART
  const getAddToCartBtn = document.getElementsByClassName(
    "collection-items-btn"
  );
  for (let i = 0; i < getAddToCartBtn.length; i++) {
    const btnElement = getAddToCartBtn[i];
    //add event listeer to each btn
    btnElement.addEventListener("click", addToCartClicked);
  }

  // listen for input changed
  const inputChangedListener =
    document.getElementsByClassName("cart-items-qty");
  for (let i = 0; i < inputChangedListener.length; i++) {
    const inputElement = inputChangedListener[i];
    //add event listeer to each btn
    inputElement.addEventListener("change", inputChanged);
  }

  const removeCartItemBtn =
    document.getElementsByClassName("cart-items-remove");
  for (let i = 0; i < removeCartItemBtn.length; i++) {
    const cartItemElement = removeCartItemBtn[i];
    //add event listeer to each btn
    cartItemElement.addEventListener("click", removeCartItem);
  }

  const purchaseItemsBtn =
    document.getElementsByClassName("cart-item-purshase");
  for (let i = 0; i < purchaseItemsBtn.length; i++) {
    const purchaseElement = purchaseItemsBtn[i];
    //add event listeer to each btn
    purchaseElement.addEventListener("click", purchaseItems);
  }
}

//addToCartClicked
//addToCartClicked
function addToCartClicked(e) {
  const collectionItems = e.target.parentElement.parentElement;

  //get title
  const titleElement = collectionItems.getElementsByClassName(
    "collection-items-title"
  )[0];
  const title = titleElement.textContent;

  //get price
  const priceElement = collectionItems.getElementsByClassName(
    "collection-items-price"
  )[0];
  const price = parseFloat(priceElement.textContent.replace("₦", ""));
  console.log(price);

  //get image
  const imageElement =
    collectionItems.getElementsByClassName("collection-img")[0];
  const imgSrc = imageElement.src;

  addToCart(title, price, imgSrc);
}

//addToCart
function addToCart(title, price, imgSrc) {
  console.log(title, price, imgSrc);

  //check that item to be added  is not in cart
  const cartTitle = document.querySelectorAll(".cart-title");

  console.log(cartTitle, "content");
  for (let i = 0; i < cartTitle.length; i++) {
    const titleElement = cartTitle[i];
    if (titleElement.textContent === title) {
      alert("Item already in Cart");
      return;
    }
  }

  //get the tbody element
  const cart = document.getElementsByTagName("tbody")[0];
  //create a tr
  const tr = document.createElement("tr");
  tr.classList.add("cart-items");

  const cartItemContent = `
     <td class="cart-items-title">
                    <img
                      src=${imgSrc}
                      alt="cart image"
                      width="100px"
                      height="100px"
                    />
                    <span class="cart-title">${title}</span>
                  </td>
                  <td class="cart-items-price">₦${price}</td>
                  <td class="class-items-qty-container">
                    <input class="cart-items-qty" type="number" value="1" />
                    <button class="btn cart-items-remove">REMOVE</button>
                  </td>`;

  tr.innerHTML = cartItemContent;

  //append the tr to the tbody
  cart.appendChild(tr);

  //   update cate total
  updateCartTotal();
}

//update cart total
function updateCartTotal() {
  const cart = document.getElementsByTagName("tbody")[0];
  const cartItems = cart.getElementsByClassName("cart-items");

  //   initiate a start sum
  let total = 0;
  for (let item of cartItems) {
    console.log(item);
    const priceElement = item.getElementsByClassName("cart-items-price")[0];
    const price = parseFloat(priceElement.textContent.replace("₦", ""));
    const qtyElement = item.getElementsByClassName("cart-items-qty")[0];
    const qty = parseInt(qtyElement.value);

    total = total + price * qty;
  }

  //   round to 2 decimal place //Math.round() and toFixed()
  const totalPrice = Math.round(total * 100) / 100;

  //add total to the DOM
  document.getElementsByClassName(
    "cart-total"
  )[0].textContent = `Total: ${totalPrice}`;

  console.log(totalPrice, "total");
}

function inputChanged(e) {
  const input = e.target;

  console.log(isNaN(input.value), "isNaN(input.value)");

  if (input.value < 1) {
    input.value = 1;
  }
  updateCartTotal();
}

function removeCartItem(e) {
  const removeBtn = e.target;
  const decision = confirm("Are you sure about reovng this item?");
  console.log(decision, "decision");
  if (!decision) {
    return;
  }

  removeBtn.parentElement.parentElement.remove();

  updateCartTotal();
}

function purchaseItems() {
  //   console.log(document.getElementsByTagName("tbody")[0].hasChildNodes());
  if (!document.getElementsByTagName("tbody")[0].hasChildNodes) {
    alert("Your cart is empty");
    return;
  }

  document.getElementsByTagName("tbody")[0].innerHTML = "";
  updateCartTotal();
}
