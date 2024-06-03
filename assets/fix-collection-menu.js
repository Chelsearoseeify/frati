const section2 = document.getElementById('shopify-section-template--17595768996068__product-grid');
const menu = document.getElementById('collections-list__fixed-menu');
const section2Top = section2.offsetTop;
const section2Height = section2.offsetHeight;

window.onscroll = function (e) {

    if (window.scrollY >= section2Top && window.scrollY + 200 < (section2Top + section2Height)) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }

}

