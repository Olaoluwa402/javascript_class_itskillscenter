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
}
