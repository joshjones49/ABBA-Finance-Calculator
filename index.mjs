import * as func from './compoundInterestFunctions.mjs';
import * as route from './routeFunctions.mjs';

document.addEventListener('DOMContentLoaded', () => {
    let container = 'MP';

    const updateDisplay = (page) => {
        container = page
        route.CI_PAGE.style.display = container === 'CI' ? 'flex' : 'none';
        route.HOME_PAGE.style.display = container === 'HOME' ? 'flex' : 'none';
        route.MP_PAGE.style.display = container === 'MP' ? 'flex' : 'none';
    }

    //USED TO SUBMIT INPUTS AND CALCULATE AND THEN CLEAR INPUTS
    func.CI_Submit.addEventListener('click', () => {
        func.submitted ? func.Clear() : func.compoundInterest()
    })

    route.CI_PAGE_BTN.addEventListener('click', () => {
        console.log('CI')
        updateDisplay('CI')
    })

    route.HOME_PAGE_BTN.addEventListener('click', () => {
        console.log('HOME')
        updateDisplay('HOME')
    })

    route.MP_PAGE_BTN.addEventListener('click', () => {
        console.log('MP')
        updateDisplay('MP')
    })

})