const nav = document.querySelector('nav');

        window.addEventListener('scroll', ()=>{
            
            if(window.scrollY>=50){
                nav.classList.add('active_nav')
            }
            else{
                nav.classList.remove('active_nav')
            }


        })
        var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// window.onscroll = function()
// {scrollFunction()};
// function top(){
//     document.body.scrollTop=0;
//     document.documentElement.scrollTop=0;
// }
const searchBar = document.getElementById('search-bar');
const suggestions = document.getElementById('suggestions');

// Sample suggestion data
const suggestionData = [
    'Mecerdes-Benz G63',
    'Mecerdes-Benz F78',
    'Mecerdes-Benz MS',
    'Mecerdes-Benz Z2000'
];

searchBar.addEventListener('input', function () {
    const query = searchBar.value.toLowerCase();
    suggestions.innerHTML = '';

    const filteredSuggestions = suggestionData.filter(suggestion => suggestion.toLowerCase().includes(query));

    if (filteredSuggestions.length > 0) {
        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = suggestion;
            suggestionItem.addEventListener('click', () => {
                searchBar.value = suggestion;
                suggestions.style.display = 'none';
            });
            suggestions.appendChild(suggestionItem);
        });

        suggestions.style.display = 'block';
    } else {
        suggestions.style.display = 'none';
    }
});

document.addEventListener('click', function (event) {
    if (event.target !== searchBar) {
        suggestions.style.display = 'none';
    }
});


const buyBtn = document.querySelector('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalclose = document.querySelector('.js-modal-close')

const modalContainer = document.querySelector('.js-modal-container')

function showBuyTickets()
{
    modal.classList.add('open')
}
function hideBuyTickets() 
{
    modal.classList.remove('open')
}

buyBtn.addEventListener('click', showBuyTickets);

modalclose.addEventListener('click', hideBuyTickets);
modal.addEventListener('click', hideBuyTickets);
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});