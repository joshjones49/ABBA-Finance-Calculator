import * as ci from './compoundInterestFunctions.mjs';
import * as route from './routeElements.mjs';
import * as mp from './monthlyPayments.mjs'

document.addEventListener('DOMContentLoaded', () => {
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
        route.updateDisplay('HOME')
    })

    route.ci_page_btn.addEventListener('click', () => {
        console.log('CI')
        route.updateDisplay('CI')
    })

    route.mp_page_btn.addEventListener('click', () => {
        console.log('MP')
        route.updateDisplay('MP')
    })

    route.roi_page_btn.addEventListener('click', () => {
        route.updateDisplay('ROI')
    })

    route.npv_page_btn.addEventListener('click', () => {
        route.updateDisplay('NPV')
    })

    route.irr_page_btn.addEventListener('click', () => {
        route.updateDisplay('IRR')
    })

})