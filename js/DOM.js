//get elemet by tag nae
const h2 = document.getElementsByTagName("h2");
console.log(h2, "h2");
//change the h2 color
for (let i = 0; i < h2.length; i++) {
  console.log(h2[i], "forInner");
  h2[i].style.color = "#fff";
  h2[i].style.backgroundColor = "#333333";
}

//getElementsByClassName
const h2_text = document.getElementsByClassName("h2-text");
console.log(h2_text, "h2_text");
for (let i = 0; i < h2_text.length; i++) {
  console.log(h2_text[i], "forInner");
  h2_text[i].style.fontWeight = "bold";
  h2_text[i].style.transform = "scale(0.8)";
}

//getElementById()
const data = [
  {
    id: 1,
    products: [
      {
        name: "product_1",
        price: "$250",
      },
      {
        name: "product_2",
        price: "$350",
      },
      {
        name: "product_3",
        price: "$200",
      },
      {
        name: "product_4",
        price: "$300",
      },
    ],
    countries: [
      "Nigeria",
      "Togo",
      "Brazil",
      "Ghana",
      "Spain",
      "Niger",
      "Singapore",
    ],
  },
];

const btn = document.getElementById("submit");

btn.addEventListener("click", (e) => {
  const input_text = document.getElementById("day").value;

  //let filteredData = data[0].countries;

  let filteredData = data[0].products;

  //   if (input_text) {
  //     filteredData = filteredData.filter((country) =>
  //       country.toLowerCase().startsWith(input_text)
  //     );
  //   }

  if (input_text) {
    filteredData = filteredData.filter(
      (product) =>
        product.name.toLowerCase().startsWith(input_text) ||
        parseInt(product.price.replace("$", "")) <= parseInt(input_text)
    );
  }

  console.log(filteredData, "filteredData");
});

// const searchHandler = ;
