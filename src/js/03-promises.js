import { Notify } from "notiflix";

function createPromise(position, delay) {   
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() =>{
      if (shouldResolve)  resolve({ position, delay }); 
      else reject({ position, delay }); 
    }, delay);
  })
}
const form = document.querySelector('.form');

form.addEventListener('submit', e => { 
  e.preventDefault();
  const first_delay =Number(form.delay.value);
  const step = Number(form.step.value);
  const amount =Number(form.amount.value);   
  [...Array(amount).keys()]
    .map(x => ++x)
    .map(x => createPromise(x, (step * (x-1)+first_delay)))
    .forEach(x => x
      .then(({ position, delay }) => {     
          Notify.success
          (`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
          Notify.failure
          (`❌ Rejected promise ${position} in ${delay}ms`);
      }));
})