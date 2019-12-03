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

    new Search({
        mainClass: '.main-content',
        pageClass: '.page',
        headerClass: '.header-wrapper',
        menuClass: '.navigation-main',
        menuButtonClass: '.nav-toggle',
        mobileMenuClass: '.mobile-menu',
        sidebarClass: '.sidebar-menu.search-sidebar',
        search:'.navigation__search',
        searchField: '.search-wrapper',
        searchInput: '.search-wrapper input',
        searchWrapperClass: '.search-sidebar__wrapper',
        cross: '.menu-toggle__close',
        overlayClass: '.overlay',
    });

    new FilterArticles({
        wrapper: '.inner__filter',
        current: '.filter-current',
        list: '.filter-list-pulldown',
    });
}