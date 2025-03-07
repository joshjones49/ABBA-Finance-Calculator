export const CI_PAGE_BTN = document.querySelector('.ci-page-btn');
export const DISPLAY = document.querySelector('.display-div');
export const HOME = document.querySelector('.home-div');
export const HOME_BTN = document.querySelector('.home-page-btn');
export const CI_DIV = document.querySelector('.ci-div');

export const changePage = (toPage, fromPage) => {
    fromPage.style.display = "none";
    toPage.style.display = 'flex';
}

