const Search = function() {
    const body = document.body,
        search = document.querySelector('.navigation__search'),
        searchField = document.querySelector('.search-wrapper'),
        searchInput = document.querySelector('.search-wrapper input'),
        searchButton = document.querySelector('.search-wrapper .btn-search');

    const toggleSearchField = () => {
        if (searchField.classList.contains('d-block')) {
            searchField.classList.remove('d-block');
            searchField.classList.add('d-none');
        } else {
            searchField.classList.remove('d-none');
            searchField.classList.add('d-block');
            searchInput.focus();
        }
    };

    search.addEventListener('click', toggleSearchField);
};