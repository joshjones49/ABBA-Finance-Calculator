export const npv_investment = document.querySelector('#npv-investment');
export const npv_discount_rate = document.querySelector('#npv-discount-rate');
export const npv_cashflows = document.querySelector('#npv-cashflows');
export const npv_amount = document.querySelector('#npv-amount');
export const npv_submit = document.querySelector('#npv-submit');
export let submitted = false;

export const netPresentValue = () => {
    submitted = !submitted;

    let investment = parseInt(npv_investment.value);
    let rate = parseInt(npv_discount_rate.value) / 100;
    let cashflow = npv_cashflows.value;
    
    let array = [];
    cashflow = cashflow.split(',');
    cashflow.forEach(number => {
    number = parseInt(number)
    array.push(number);
    })

    let npv = -investment;
    for(let i = 0; i < cashflow.length; i++) {
        npv += cashflow[i] / Math.pow(1 + rate, i + 1)
    }

    npv_amount.innerHTML = '$'+npv.toFixed(2);

    submitted ? npv_submit.innerHTML = 'Clear': npv_submit.innerHTML = 'Submit';
    console.log(submitted);

}

 export const Clear = () => {
    submitted = !submitted;
    npv_investment.value = "";
    npv_discount_rate.value = "";
    npv_cashflows.value = "";
    npv_submit.innerHTML = 'Submit'
    npv_amount.innerHTML = "";
    console.log(submitted)
}
