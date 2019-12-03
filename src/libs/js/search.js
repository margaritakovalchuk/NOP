const Search = ({sidebarClass, searchClass, searchFieldClass, searchInputClass,
                    cross, overlayClass, mainClass, pageClass, headerClass, menuClass, menuButtonClass}) => {
    const body = document.body,
        sidebar = document.querySelector(sidebarClass),
        search = document.querySelector(searchClass),
        searchField = document.querySelector(searchFieldClass),
        searchInput = document.querySelector(searchInputClass),
        close = document.querySelector(cross),
        overlay = document.querySelector(overlayClass),
        mainContent = document.querySelector(mainClass),
        page = document.querySelector(pageClass),
        header = document.querySelector(headerClass),
        menu = document.querySelector(menuClass),
        menuButton = document.querySelector(menuButtonClass);

    const toggleSearchField = () => {

        if (window.matchMedia("(max-width: 767px)").matches) {

            if (sidebar.classList.add('sidebar-menu_active')) {
                mainContent.classList.add('main-content_active');
                header.classList.add('main-content_active');
                page.style.overflow = 'hidden';
                overlay.style.display = 'block';
                menuButton.style.display = 'none';
            } else {
                sidebar.classList.remove('sidebar-menu_active');
                mainContent.classList.remove('main-content_active');
                header.classList.remove('main-content_active');
                page.style.overflow = 'visible';
                overlay.style.display = 'none';
                menuButton.style.display = 'block';
            }

        } else {

            if (searchField.classList.contains('d-block')) {
                searchField.classList.remove('d-block');
                searchField.classList.add('d-none');
            } else {
                searchField.classList.remove('d-none');
                searchField.classList.add('d-block');
                searchInput.focus();
            }
        }

        search.addEventListener('click', toggleSearchField);
    }
};