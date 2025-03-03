const submitBtn = document.querySelector(".btn");
let value = document.querySelector(".value");
const output = document.querySelector(".output");
const wrapper = document.querySelector('.wrapper');
const secWrapper = document.querySelector('.sec-wrapper');
const buttons = document.querySelectorAll(".num");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.classList.add("num-active");
      button.classList.remove("num-active");

      value = button.id;
    });
  });
});

submitBtn.addEventListener("click", () => {
  if (!value) {
    alert('Please pick a number for rating');
    return;
  } 

  wrapper.classList.add('wrapper-active');
  secWrapper.classList.add('sec-wrapper-active');


  if (value === null) {
    alert('Please select a value');

  } else {
    output.innerHTML = `You selected ${value} out of 5`
  }

});


