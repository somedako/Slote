document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.map-header__btn');
    const table = document.querySelector('.table-view');
    const mobBtn = document.querySelector('.btn_mobile');
    const tableBtn = document.querySelector('.table_modal');
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.header-nav-list');
    const langBlock = document.querySelector('.languages');
    const btnLang = document.querySelector('.header-btns__lang');
    const closeLang = document.querySelector('.close_lang');
    const closeNav = document.querySelector('.close');
    const btnPopup = document.querySelector('.footer-btn__lang');
    const popup = document.querySelector('.popup');
    const closePopup = document.querySelector('.close_popup');
    const footerBtns = document.querySelectorAll('.footer-nav__btn');

    const addClass = (a) => {
        a.classList.add('active');
    };

    const removeClass = (b) => {
        b.classList.remove('active');
    };

    const tableToggleHandler = () => {
        const initialText = 'Table view';
        table.classList.toggle('show');
        if (btn.textContent.includes(initialText)) {
            btn.textContent = 'Map view';
        } else {
            btn.textContent = initialText;
        }
    };

    footerBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const menuNumber = e.currentTarget.dataset.path;
            document.querySelectorAll('.footer-nav-list').forEach(() => {
                document
                    .querySelector(`[data-target=${menuNumber}]`)
                    .classList.toggle('active');
            });
        });
    });

    btn.addEventListener('click', tableToggleHandler);
    mobBtn.addEventListener('click', tableToggleHandler);
    tableBtn.addEventListener('click', tableToggleHandler);
    burger.addEventListener('click', () => addClass(navList));
    closeNav.addEventListener('click', () => removeClass(navList));
    btnLang.addEventListener('click', () => addClass(langBlock));
    closeLang.addEventListener('click', () => removeClass(langBlock));
    btnPopup.addEventListener('click', () => addClass(popup));
    closePopup.addEventListener('click', () => removeClass(popup));
});
