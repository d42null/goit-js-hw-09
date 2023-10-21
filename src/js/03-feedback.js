import throttle from "lodash.throttle";
const L_STORAGE_KEY='feedback-form-state'

const form = document.querySelector('.feedback-form');
const frmData = JSON.parse(localStorage.getItem(L_STORAGE_KEY) ?? '{"email":"","message":""}');
const { email, message } = frmData;
form.elements.email.value = email;
form.elements.message.value = message;
form.addEventListener('input',
    throttle(e =>
    {
        frmData[e.target.name] = e.target.value;            
        localStorage.setItem(L_STORAGE_KEY, JSON.stringify(frmData));
    },500)
)
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(frmData);
    if(localStorage.getItem(L_STORAGE_KEY))
        localStorage.removeItem(L_STORAGE_KEY);
    frmData.email = frmData.message = '';
    e.target.reset();
})
