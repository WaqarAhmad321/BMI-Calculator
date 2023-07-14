const calculateBtn = document.querySelector('button[type="button"]');
const result = document.querySelector('#result');
calculateBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid height.`
    } else if (weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please enter valid weight.`
    }
    else{
        let bmiValue = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI is ${bmiValue}</span>`
    }
})

