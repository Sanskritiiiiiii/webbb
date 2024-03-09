document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', function () {
        const searchText = searchInput.value.toLowerCase().trim();
        if (searchText) {
            // Perform search logic here
            alert('Search for: ' + searchText);
        } else {
            alert('Please enter a search term.');
        }
    });
});
