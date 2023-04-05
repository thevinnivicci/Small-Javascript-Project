const decrementbtn = document.getElementById("decrementbtn");
const displayValue  = document.getElementById("displayValue");
const incrimentbtn = document.getElementById("incrimentbtn");
const resetbtn = document.getElementById("resetbtn");

// for decrement btn 
decrementbtn.addEventListener("click",()=>{
    const value = Number(displayValue.innerText);
    if (value > 0) {
      displayValue.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
})

// for incerement btn 
incrimentbtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayValue.innerText = value + 1;
    }
  });

//  for reset 
resetbtn.addEventListener("click", () => {
    displayValue.innerText = 0;
  });