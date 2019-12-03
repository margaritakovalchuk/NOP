window.onload = init;

function init() {
    new MobileMenu({
        mainClass: '.main-content',
        pageClass: '.page',
        headerClass: '.header-wrapper',
        menuClass: '.navigation-main',
        menuButtonClass: '.nav-toggle',
        sidebarClass: '.sidebar-menu',
        mobileMenuClass: '.mobile-menu',
        cross: '.menu-toggle__close',
        overlayClass: '.overlay',
    });

    new Search();

    new FilterArticles({
        wrapper: '.inner__filter',
        current: '.filter-current',
        list: '.filter-list-pulldown',
    });

    // new SearchSidebar({
    //     // mainClass: '.main-content',
    //     // pageClass: '.page',
    //     // headerClass: '.header-wrapper',
    //     // menuClass: '.navigation-main',
    //     searchButtonClass: '.navigation__search',
    //     // sidebarClass: '.sidebar-menu',
    //     // // mobileMenuClass: '.mobile-menu',
    //     // cross: '.menu-toggle__close',
    //     // overlayClass: '.overlay',
    // });
}