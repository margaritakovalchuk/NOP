// const SearchSidebar = () => {
//     const body = document.body,
//         // mainContent = document.querySelector(mainClass),
//         // page = document.querySelector(pageClass),
//         // header = document.querySelector(headerClass),
//         // menu = document.querySelector(menuClass),
//         searchButton = document.querySelector(searchButtonClass),
//         // sidebar = document.querySelector(sidebarClass),
//         // mobileMenu = document.querySelector(mobileMenuClass),
//         closeButton = document.querySelector(cross),
//         overlay = document.querySelector(overlayClass);
//
//     const showSearch = () => {
//         sidebar.classList.add('sidebar-menu_active');
//         mainContent.classList.add('main-content_active');
//         header.classList.add('main-content_active');
//         page.style.overflow = 'hidden';
//         overlay.style.display = 'block';
//         menuButton.style.display = 'none';
//     };
//
//     const hideSearch = () => {
//         sidebar.classList.remove('sidebar-menu_active');
//         mainContent.classList.remove('main-content_active');
//         header.classList.remove('main-content_active');
//         page.style.overflow = 'visible';
//         overlay.style.display = 'none';
//         menuButton.style.display = 'block';
//     };
//
//     searchButtonClass.addEventListener('click', showSearch, false);
//     overlay.addEventListener('click', hideSearch, false);
//     closeButton.addEventListener('click', hideSearch, false);
// };