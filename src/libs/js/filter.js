const filterArticles = ({wrapper, current, list}) => {
    const body = document.body,
        filterWrapper = document.querySelector(wrapper),
        currentValue = document.querySelector(current),
        filterList = document.querySelector(list);

    const showFilter = () => {
        filterList.style.display = 'inline-flex';
        filterList.style.flexDirection = 'column';
    };

    const hideFilter = () => {
        filterList.style.display = 'none';
    };

    currentValue.addEventListener('mouseenter', showFilter);
    filterWrapper.addEventListener('mouseleave', hideFilter);
    filterList.addEventListener('mouseleave', hideFilter);
};