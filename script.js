document.addEventListener('DOMContentLoaded', function() {
    loadSearchHistory();
});

const searchB = document.getElementById('searchB');
const clear = document.getElementById('clear');

searchB.addEventListener('click', function() {
    const searchI = document.getElementById('searchI').value;
    if (searchI) {
        saveSearch(searchI);
        displaySearchHistory();
        document.getElementById('searchI').value = '';
    }
});
clear.addEventListener('click', function() {
    localStorage.removeItem('searchHistory');
    displaySearchHistory();
});

function saveSearch(searchTerm) {
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistory.push(searchTerm);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function loadSearchHistory() {
    displaySearchHistory();
}

function displaySearchHistory() {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const searchHistoryList = document.getElementById('searchHistory');
    searchHistoryList.innerHTML = '';

    searchHistory.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        searchHistoryList.appendChild(li);
    });
}
