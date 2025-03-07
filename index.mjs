import * as func from './compoundInterestFunctions.mjs';
import * as route from './routeFunctions.mjs';

document.addEventListener('DOMContentLoaded', () => {
//USED TO SUBMIT INPUTS AND CALCULATE AND THEN CLEAR INPUTS
 func.Submit.addEventListener('click', () => {
    func.submitted ? func.Clear() : func.compoundInterest()
    })
//USED TO CHANGE TO THE HOME PAGE
    route.HOME_BTN.addEventListener('click', () => {
        route.changePage(route.HOME, route.CI_DIV)
    })
//USED TO CHANGE TO THE COMPOUND INTEREST PAGE
    route.CI_PAGE_BTN.addEventListener('click', () => {
        route.changePage(route.CI_DIV, route.HOME)
    })

})