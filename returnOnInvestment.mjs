export const roi_cost = document.querySelector('#roi-cost');
export const roi_gain = document.querySelector('#roi-gain');
export const roi_amount = document.querySelector('#roi-amount');
export const roi_submit = document.querySelector('#roi-submit');
export let submitted = false;

export const returnOnInvestment = () => {
    submitted = !submitted;
    let cost = parseInt(roi_cost.value);
    let gain = parseInt(roi_gain.value);

    if(isNaN(cost) || isNaN(gain)) {
        console.log('Empty Fields');
        roi_amount.innerHTML = 'No fields can be empty';
        roi_amount.style.fontSize = '50px';
        return;
    }

    const roi = (gain - cost) / cost * 100;
    roi_amount.innerHTML = roi.toFixed(2)+'%';

    submitted ? roi_submit.innerHTML = 'Clear': roi_submit.innerHTML = 'Submit';
    console.log(submitted);

    
} 

 export const Clear = () => {
    submitted = !submitted;
    roi_cost.value = "";
    roi_gain.value = "";
    roi_submit.innerHTML = 'Submit'
    roi_amount.innerHTML = "";
    console.log(submitted)
}
