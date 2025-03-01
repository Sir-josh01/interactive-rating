const submitBtn = document.querySelector('.btn')
let value = document.querySelector('.value')
const output = document.querySelector('.output');

const buttons = document.querySelectorAll('.num');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.add('num-active');
        button.classList.remove('num-active');

        value = button.id;
        console.log(value);
      })
    })
  })


submitBtn.addEventListener('click', () => {
  const secondWrap = document.querySelector('.second-page');
  // secondWrap.classList.add('second-page-active');
  if (value === null) {
    alert('Please select a value');

  } else {
    output.innerHTML = `You selected ${value} out of 5`
  secondWrap.classList.add('second-page-active');

  }

})