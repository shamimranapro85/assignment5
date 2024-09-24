const hostS = [
  {
    price: 45,
    bannerUrl: "./assets/noakhali.png",
    distric: "Noakhali",
    des: "Thousands affected by devastating floods in Noakhali need your help. Donate now to provide food, water, shelter, and medical aid. Every contribution matters. Thank you!",
  },
  {
    price: 405,
    bannerUrl: "./assets/feni.png",
    distric: "Feni",
    des: "Thousands affected by devastating floods in feni need your help. Donate now to provide food, water, shelter, and medical aid. Every contribution matters. Thank you!",
  },
  {
    price: 405,
    bannerUrl: "./assets/quota-protest.png",
    distric: "Quota-protest",
    des: "Thousands affected by devastating floods in Quota-protest need your help. Donate now to provide food, water, shelter, and medical aid. Every contribution matters. Thank you!",
  },
];

let mainBalance = 500;
let All_isp = ``;
let all_history = `
<div class="card_history p-3 rounded-lg border flex gap-2 mb-4 flex-col">
        <h2 class="font-bold flex gap-1">
          <p class="price_donate">900Taka</p>
          Donate for flood at Noakhali, Bangladesh
        </h2>
        <p class="bg-gray-100 rounded p-3">
          
      Tue Sep 24 2024 20:29:05 GMT+0600 (Bangladesh Standard Time)
      
        </p>
      </div>  
`;

document.querySelector(".balance h3").innerHTML = mainBalance;
const section_donations = document.body.querySelector(".donations");
for (let host of hostS) {
  All_isp += `<div
        class="Card rounded-lg w-full flex flex-col md:flex-row gap-8 border p-4 mb-2"
      >
        <div
          class="rounded-lg w-full md:w-1/2 h-64 md:h-auto bg-center bg-cover bg-[url('${host.bannerUrl}')]"
        ></div>
        <div class="flex w-full md:w-1/2 flex-col gap-2">
          <span
            class="bg-gray-200 w-24 text-sm items-center justify-center gap-1 p-2 flex rounded-xl"
          >
            <img src="./assets/coin.png" alt="$" />
            <p class="single_compani_donation_price">${host.price}</p>
            BDT
          </span>

          <h2 class="font-bold">Donate for flood at ${host.distric}, Bangladesh</h2>

          <p>
            ${host.des}
          </p>

          <input
            type="text"
            class="border input rounded p-2 "
            placeholder="Enter your amount for Donate"
          />

          <button class="btn DonatSubmition btn-success text-white text-center text" onclick="">
            Donate Now
          </button>
        </div>
      </div>`;
}
section_donations.innerHTML += All_isp;

// active button\

const all_nav_buton = document.querySelectorAll(".navBTN");
const all_button_Action = (e) => {
  all_nav_buton.forEach((el) => {
    el.classList.remove("btn-success");
    el.classList.add("bg-gray-100");
  });
  e.target.classList.remove("bg-gray-100");
  e.target.classList.add("btn-success");

  // history static page
  if (e.target.innerText == "History") {
    section_donations.innerHTML = all_history;
  } else {
    section_donations.innerHTML = All_isp;
    location.reload()
  }
};

let donatBTN = document.querySelectorAll(".DonatSubmition");

for (const item of all_nav_buton) {
  item.addEventListener("click", all_button_Action);
}

// calculation---------------------------------------------------------------

const calculation = (e) => {
  const parent = e.target.parentElement;
  const inputTage = parent.querySelector("input");
  const title = parent.querySelector("h2");
  const inputValue = inputTage.value;
  const price = parent.querySelector("span p");

  if (inputValue.match(/[a-zA-Z]/)) {
    alert("Please enter a valid amount");
  } else if (inputValue == "") {
    alert("please enter your amount");
  } else if (0 >= inputValue) {
    alert("Please enter a valid number");
  } else if (inputValue > mainBalance) {
    alert("insufficient balance");
  } else {
    price.innerHTML = Number(price.innerHTML) + Number(inputValue);
    mainBalance -= Number(inputValue);
    document.querySelector(".balance h3").innerHTML = mainBalance;
    inputTage.value = "";

    all_history += `<div class="card_history p-3 rounded-lg border flex gap-2 mb-4 flex-col">
      <h2 class="font-bold flex gap-1">
      <p class="price_donate">${inputValue}Taka</p>
      ${title.innerHTML}
      </h2>
      <p class="bg-gray-100 rounded p-3">
      ${new Date()}
      </p>
      </div>`;
    messageModal.showModal();
  }
};

for (let submit_btn of donatBTN) {
  submit_btn.addEventListener("click", calculation);
}
