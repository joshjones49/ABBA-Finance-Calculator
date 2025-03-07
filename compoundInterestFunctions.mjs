//==========Exports for the Compound Interest page=============
export const Principal = document.querySelector('.Principal');
export const Rate = document.querySelector('.Rate');
export const xCompound = document.querySelector('.xCompounded');
export const Years = document.querySelector('.Years');
export const Amount = document.querySelector('.Amount');
export const Submit = document.querySelector('.submit-btn');
export let submitted = false;

//function to calculate compound interest
export const compoundInterest = () => {

    submitted = !submitted;
    let principal = parseFloat(Principal.value);
    let rate = parseFloat(Rate.value) / 100;
    let compound = parseFloat(xCompound.value);
    let years = parseFloat(Years.value);

    if(isNaN(principal) || isNaN(rate) || isNaN(compound) || isNaN(years)) {
        console.log('Empty Fields')
        Amount.innerHTML = 'No fields can be empty'
        Amount.style.fontSize = '50px';
        console.log('Alerted')
        return;
    }

    let amount = principal * Math.pow(1 + rate / compound, compound*years)

    Amount.innerHTML = "$"+amount.toFixed(2);

    if (submitted) {
        Submit.innerHTML = 'Clear';
    } else {
        Submit.innerHTML = 'Submit';
    }
    console.log(submitted);
}

//function to clear after calculation
 export const Clear = () => {
    submitted = !submitted;
    Principal.value = "";
    Rate.value = "";
    xCompound.value = "";
    Years.value = "";
    Submit.innerHTML = 'Submit'
    Amount.innerHTML = "";
    console.log(submitted)
}