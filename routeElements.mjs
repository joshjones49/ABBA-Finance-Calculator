//========================HOME PAGE ELEMENTS
export const home_page = document.querySelector('.home-page');
export const home_page_btn = document.querySelector('.home-page-btn');

//========================COMPOUND INTEREST ELEMENTS
export const ci_page = document.querySelector('#ci-page');
export const ci_page_btn = document.querySelector('.ci-page-btn');

//========================MONTHLY PAYMENTS ELEMENTS
export const mp_page = document.querySelector('#mp-page');
export const mp_page_btn = document.querySelector('.mp-page-btn');

//========================ROI ELEMENTS
export const roi_page = document.querySelector('#roi-page');
export const roi_page_btn = document.querySelector('.roi-page-btn');

//========================NPV ELEMENTS
export const npv_page = document.querySelector('#npv-page');
export const npv_page_btn = document.querySelector('.npv-page-btn');

//========================IRR ELEMENTS
export const irr_page = document.querySelector('#irr-page');
export const irr_page_btn = document.querySelector('.irr-page-btn');

//========================FUNCTION TO UPDATE DISPLAY
export const updateDisplay = (page) => {
        let container = page
        ci_page.style.display = container === 'CI' ? 'flex' : 'none';
        home_page.style.display = container === 'HOME' ? 'flex' : 'none';
        mp_page.style.display = container === 'MP' ? 'flex' : 'none';
        roi_page.style.display = container === 'ROI' ? 'flex' : 'none';
        npv_page.style.display = container === 'NPV' ? 'flex' : 'none';
        irr_page.style.display = container === 'IRR' ? 'flex' : 'none';
    }