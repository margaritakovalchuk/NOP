const MobileMenu = ({mainClass, pageClass, headerClass, menuClass, menuButtonClass, sidebarClass, mobileMenuClass, overlayClass}) => {
    const body = document.body,
        mainContent = document.querySelector(mainClass),
        page = document.querySelector(pageClass),
        header = document.querySelector(headerClass),
        menu = document.querySelector(menuClass),
        menuButton = document.querySelector(menuButtonClass),
        sidebar = document.querySelector(sidebarClass),
        mobileMenu = document.querySelector(mobileMenuClass),
        overlay = document.querySelector(overlayClass);

    const showMenu = () => {
        sidebar.classList.add('sidebar-menu_active');
        mainContent.classList.add('main-content_active');
        header.classList.add('main-content_active');
        page.style.overflow = 'hidden';
        overlay.style.display = 'block';
        menuButton.style.display = 'none';
    };

    const hideMenu = () => {
        sidebar.classList.remove('sidebar-menu_active');
        mainContent.classList.remove('main-content_active');
        header.classList.remove('main-content_active');
        page.style.overflow = 'visible';
        overlay.style.display = 'none';
        menuButton.style.display = 'block';
    };

    menuButton.addEventListener('click', showMenu, false);
    overlay.addEventListener('click', hideMenu, false);
};
