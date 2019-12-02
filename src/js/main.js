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
        overlayClass: '.overlay',
    });

    new Search();
}