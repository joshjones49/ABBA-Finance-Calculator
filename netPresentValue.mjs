export const npv_investment = document.querySelector('#npv-investment');
export const npv_discount_rate = document.querySelector('#npv-discount-rate');
export const npv_cashflows = document.querySelector('#npv-cashflows');
export const npv_amount = document.querySelector('#npv-amount');
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

    

}