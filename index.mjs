import * as func from './compoundInterestFunctions.mjs';

document.addEventListener('DOMContentLoaded', () => {

 func.Submit.addEventListener('click', () => {
    func.submitted ? func.Clear() : func.compoundInterest()
    })

})