export const mp_principal = document.querySelector('#mp-principal');
export const mp_rate = document.querySelector('#mp-rate');
export const mp_years = document.querySelector('#mp-years');
export const mp_amount = document.querySelector('#mp-amount');
export const mp_submit = document.querySelector('#mp-submit')
export let submitted = false;

export const monthlyRate = () => {
    submitted = !submitted;

    let principal = parseInt(mp_principal.value);
    let rate = parseInt(mp_rate.value);
    let years = parseInt(mp_years.value);

    if(isNaN(principal) || isNaN(rate) || isNaN(years)) {
        console.log('Empty Fields')
        mp_amount.innerHTML = 'No fields can be empty'
        mp_amount.style.fontSize = '50px';
        console.log('Alerted')
        return;
    }

    const monthRate = rate / 12;
    const totalPayments = years * 12;

    const payment = principal * (monthRate * Math.pow(1 + monthRate, totalPayments)) / (Math.pow(1 + monthRate, totalPayments) -1);

     mp_amount.innerHTML = '$'+payment.toFixed(2);

    submitted ? mp_submit.innerHTML = 'Clear': mp_submit.innerHTML = 'Submit';
    console.log(submitted);
}

 export const Clear = () => {
    submitted = !submitted;
    mp_principal.value = "";
    mp_rate.value = "";
    mp_years.value = "";
    mp_submit.innerHTML = 'Submit'
    mp_amount.innerHTML = "";
    console.log(submitted)
}