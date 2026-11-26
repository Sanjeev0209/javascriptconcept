
// Employee array
let value1 = [
  { id: 1, name: "sanjeev", position: "react", salary: 25000 },
  { id: 2, name: "Hari", position: "node", salary: 20000 },
  { id: 3, name: "Naveen", position: "react", salary: 30000 }
];
const arrayvalue = document.getElementById("arrayvalue");
const btn4 = document.getElementById("btn4");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

document.getElementById("arrayvalue").innerHTML =
  value1.map(value => `
        <p>
            Name: ${value.name}<br>
            Position: ${value.position}<br>
            Salary: ${value.salary}
        </p>
    `).join("");
// MAP - Display employee names
btn4.addEventListener("click", function () {



  let result = value1.myMap(value => value.name);
  document.getElementById("arrayoutput").textContent =
    result.join(", ");
});

// FILTER - Search by position
btn2.addEventListener("click", function () {
  let arrayinput = document.getElementById("arrayinput").value;
  let result = value1.filter(value =>
    value.position === arrayinput.toLowerCase().trim()
  );
  document.getElementById("arrayoutput1").textContent =
    result.map(value => value.name).join(", ") || "No employees found";
});

// Reduce
btn3.addEventListener("click", function () {
  let total = value1.reduce((acc, item) => {
    return acc + item.salary;
  }, 0);
  document.getElementById("arrayoutput2").textContent = total;
});
// ---------------------------------------------------------------------------------
// Lexical Scope is  function can access the variable in out side the function  
const nameInput = document.getElementById("nameInput");
const lexicalBtn = document.getElementById("lexicalBtn");
const lexicalOutput = document.getElementById("lexicalOutput");

lexicalBtn.addEventListener("click", function () {
  let a = nameInput.value;
  function display1() {
    return a;
  }
  lexicalOutput.textContent = display1();
});
// --------------------------------------------------------------------------------------------
//Closures
function balance() {
  let amount = 1000;
  return {
    deposit(money) {
      if (money <= 0 || isNaN(money)) return "Enter a valid amount.";
      amount += money;
      return {
        message: `Deposited: ₹${money}, New Balance: ₹${amount}`,
        current: amount
      };
    },
    withdraw(money) {
      if (money <= 0 || isNaN(money)) return "Enter a valid amount.";
      if (money > amount) return "Insufficient balance!";
      amount -= money;
      return {
        message: `Withdrew: ₹${money}, New Balance: ₹${amount}`,
        current: amount
      };
    }
  };
}

// Initialize closure account
const account = balance();

// Select HTML elements
const moneyInput = document.getElementById("moneyInput");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const balanceDisplay = document.getElementById("currentBalance");
const logDisplay = document.getElementById("transactionLog");

// Helper function to update the UI
function updateUI(result) {
  if (typeof result === "string") {
    // Show error/validation message
    logDisplay.innerHTML += `<p style="color: red;">${result}</p>`;
  } else {
    // Update balance header and append transaction history
    balanceDisplay.textContent = `Balance: ₹${result.current}`;
    logDisplay.innerHTML += `<p>${result.message}</p>`;
  }
  moneyInput.value = ""; // Clear input box
}

// 2. Attach button click events
depositBtn.addEventListener("click", function () {
  const val = Number(moneyInput.value);
  const result = account.deposit(val);
  updateUI(result);
});

withdrawBtn.addEventListener("click", function () {
  const val = Number(moneyInput.value);
  const result = account.withdraw(val);
  updateUI(result);
});
// ----------------------------------------------------------------------------------
//Hoisting
//not declare, function before console  
// console.log(c);
// console.log(b);

let b = 10;  //undefined
var c = 20;  //ReferenceError

//Execution context
// java script execute line by line
let d = 10;
let e = 20;
function add() {
  return d + e;
}
console.log(d);
console.log(add());
// -------------------------------------------------------------------------------
//promise async/await
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hi Sanjeev!");
    }, 2000);
  });
}
async function displayData() {
  let result = await getData();
  console.log(result);
  document.getElementById("promise").textContent = result;
}
document.getElementById("btn").addEventListener("click", displayData);

// ==================================================================================
//shallow copy
//change the original value
let value3 = {
  name: "Sanjeev",
  address: {
    city: "Coimbatore"
  }
};

let copy = { ...value3 };
copy.address.city = "pollachi";

console.log(value3.address.city);
console.log(copy.address.city);
// ---------------------------------------------------------------------------------
// //deep copy
let value4 = {
  name: "Sanjeev",
  address: {
    city: "Coimbatore"
  }
};

let copys = structuredClone(value4);

copys.address.city = "Chennai";

console.log(value4.address.city);
console.log(copys.address.city);
// --------------------------------------------------------------------------------------------
//curring
const input1 = document.getElementById("input1");
const btn1 = document.getElementById("btn1");
const output = document.getElementById("taxvalue");

function calculateTax(rate) {
  return function (price) {
    return (price * rate) / 100;
  };
}
const gst = calculateTax(18);

btn1.addEventListener("click", function () {
  const price = Number(input1.value); // Convert input string to a number
  if (price > 0) {
    const taxAmount = gst(price);
    output.textContent = `Your TAX Amount(18%) = ₹${taxAmount}`;
  } else {
    output.textContent = "Please enter a valid amount.";
  }
});
// -----------------------------------------------------------------------------------------------------------
// Event delegation
// parent container inside child button to click only affect one child not all child
const container = document.getElementById("product-container");
const displayDiv = document.getElementById("eventdelegation");
container.addEventListener("click", function (event) {

  if (event.target.classList.contains("add-cart")) {
    const product = event.target.closest(".product");
    const name = product.querySelector("h3").textContent;
    const price = product.querySelector("p").textContent;

    displayDiv.innerHTML += `
        <p>
          <strong>Product Added!</strong><br>
          Name: ${name}<br>
          Price: ${price}
        </p>
      `;
  }
});
// ------------------------------------------------------------------------------
// prototypes
// student.greet();
const person = {
  name: "Sanjeev",

  greet: function () {
    return "Hello " + this.name +
      "! Welcome to our company.";
  }
};
// Child object
const student = {
  age: 22
};
// Inheritance
Object.setPrototypeOf(student, person);

// Display inherited and own properties
document.getElementById("name").innerText =
  student.name;
document.getElementById("age").innerText =
  "Age: " + student.age;
// Call inherited method
function showGreeting() {
  document.getElementById("message").innerText =
    student.greet();
}
// -----------------------------------------------------------------------
// inheritance
// Parent class
class Animal {

  eat() {
    document.getElementById("result")
      .innerText = "Max is eating food!";
  }
}

// Child class
class Dog extends Animal {
  bark() {
    document.getElementById("result")
      .innerText = "Max is barking!";
  }
}
// Create object
const myDog = new Dog();
// ------------------------------------------------------------------
// Polyfills for Promise
function MyPromise(callback) {
    let state = "pending";
    let value;
    function resolve(result) {
        if (state === "pending") {
            state = "fulfilled";
            value = result;
        }
    }
    function reject(error) {
        if (state === "pending") {
            state = "rejected";
            value = error;
        }
    }
    callback(resolve, reject);
    this.then = function (success) {
        if (state === "fulfilled") {
            success(value);
        }
        return this;
    };
    this.catch = function (failure) {
        if (state === "rejected") {
            failure(value);
        }
        return this;
    };
}
const orderBtn = document.getElementById("orderBtn");
const output11 = document.getElementById("output11");
const polypromiseinput = document.getElementById("polypromiseinput");
orderBtn.addEventListener("click", function () {
    output11.innerHTML = "";
    const order = new MyPromise((resolve, reject) => {
        let payment = polypromiseinput.checked;
        if (payment) {
            resolve("Order Confirmed");
        } else  {
            reject("Payment Failed");
        }
    });
    order
        .then(result => {
            output11.innerHTML = `
                <p style="color:green">${result}</p> 
            `;
        })
        .catch(error => {
            output11.innerHTML = `
                <p style="color:red">${error}</p>
            `;
        });
});
// ---------------------------------------------------------------------------
// Polyfills for filter
const polyfilterdata = document.getElementById("polyfilterdata");
const products = [
    { name: "Laptop", stock: 10 },
    { name: "Mobile", stock: 0 },
    { name: "Keyboard", stock: 5 },
    { name: "Mouse", stock: 0 }
];

const polybtn = document.getElementById("polybtn");
const polyfilteroutput = document.getElementById("polyfilteroutput");

document.getElementById("polyfilterdata").innerHTML =
products.map(value11 =>`
<p>${(value11.name)+" "+value11.stock}</p>
`).join("");
// Custom Filter Method
Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
// Button Click
polybtn.addEventListener("click", function () {
    const available = products.myFilter(
        product => product.stock > 0
    );
    polyfilteroutput.innerHTML = "";
    available.forEach(product => {
        polyfilteroutput.innerHTML += `
            <p>
                Product: ${product.name} |
                Stock: ${product.stock}
            </p>
        `;
    });
});
// ========================================================================================
// polyfils map()
const polybtn1 = document.getElementById("polybtn1");
const polyoutput1 = document.getElementById("polyoutput1");
Array.prototype.myMap = function (callback) {

  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
polybtn1.addEventListener("click", function () {

const gstPrices = products.myMap(product => product.name );
polyoutput1.innerHTML = gstPrices;

});
// ================================================================================
//Event Loop and Microtasks
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

console.log(4);
// =============================================================================
    // Debounce helper
    function debounce(func, delay) {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }
       const searchInput = document.getElementById("searchInput");
    const debounceOutput = document.getElementById("debounceOutput");

    const updateSearch = debounce((text) => {
      debounceOutput.textContent = `Debounced value: "${text}"`;
    }, 500);
        searchInput.addEventListener("input", (e) => {
      updateSearch(e.target.value);
    });

// ===============================================================================
// throttle
    const buyBtn = document.getElementById("buyBtn");
    const result = document.getElementById("result11");

function throttle(func, delay) {
    let lastCall = 0;
    return function () {
        let currentTime = Date.now();
        if (currentTime - lastCall >= delay) {
            lastCall = currentTime;
            func();
        }
    };
}
function buyProduct() {
    result.textContent = "Product purchased successfully!";
    console.log("Buy button clicked");
}
const throttledBuy = throttle(buyProduct, 3000);
buyBtn.addEventListener("click", throttledBuy);