import * as ci from './compoundInterestFunctions.mjs';
import * as route from './routeElements.mjs';
import * as mp from './monthlyPayments.mjs'

document.addEventListener('DOMContentLoaded', () => {
    let container = '';

    const updateDisplay = (page) => {
        container = page
        route.ci_page.style.display = container === 'CI' ? 'flex' : 'none';
        route.home_page.style.display = container === 'HOME' ? 'flex' : 'none';
        route.mp_page.style.display = container === 'MP' ? 'flex' : 'none';
        route.roi_page.style.display = container === 'ROI' ? 'flex' : 'none';
        route.npv_page.style.display = container === 'NPV' ? 'flex' : 'none';
        route.irr_page.style.display = container === 'IRR' ? 'flex' : 'none';
    }

    //==============USED TO SUBMIT, CALCULATE, AND CLEAR INPUTS
    ci.ci_submit.addEventListener('click', () => {
        ci.submitted ? ci.Clear() : ci.compoundInterest()
    })

    mp.mp_submit.addEventListener('click', () => {
        mp.submitted ? mp.Clear() : mp.monthlyRate()
    })

    //===============EVENT LISTENERS THAT CHANGE DISPLAYS
    route.home_page_btn.addEventListener('click', () => {
        console.log('HOME')
        updateDisplay('HOME')
    })

    route.ci_page_btn.addEventListener('click', () => {
        console.log('CI')
        updateDisplay('CI')
    })

    route.mp_page_btn.addEventListener('click', () => {
        console.log('MP')
        updateDisplay('MP')
    })

    route.roi_page_btn.addEventListener('click', () => {
        updateDisplay('ROI')
    })

    route.npv_page_btn.addEventListener('click', () => {
        updateDisplay('NPV')
    })

    route.irr_page_btn.addEventListener('click', () => {
        updateDisplay('IRR')
    })

})