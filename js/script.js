
// IPO Input-->Process-->Output   Pattern for program design
$(function(){
/*----- constant -----*/
const BASE_URL = 'https://www.superheroapi.com/api.php/10222058020294155/search/';

/*----- app's state (variables) -----*/
let herosData;
 

/*----- cached element references -----*/

const $name = $('#name');
 const $fname = $('#fname');
 const $work = $('#work')
 const $base = $('#base')
 const $intelligence = $('#intelligence');
 const $power = $('#power');
 const $speed = $('#speed');
 const $image = $('#image')
 const $group = $('#group')
const $input = $('input[type="text"]');


/*----- event listeners -----*/

$('.form').on('submit', handleSubmit);


/*----- functions -----*/

// Initial action when page loads
init();

function init() {
    herosData();
}



function handleSubmit(event) {
     event.preventDefault();
    const term = $input.val();
    $input.val("")
    $.ajax( BASE_URL + term) 
    .then(function(data) {
        // console.log('Heros Data', data); for debug purposes
        herosData = data
        render();
    }, function(error) {
        // console.log("Error: ", error);
    });
}

function render() {
        $name.text(herosData.results[0].name);
        $fname.text(herosData.results[0].biography["full-name"]);
        $work.text(herosData.results[0].work.occupation);
        $base.text(herosData.results[0].work.base);
        $intelligence.text(herosData.results[0].powerstats.intelligence);
        $power.text(herosData.results[0].powerstats.power);
        $speed.text(herosData.results[0].powerstats.speed);
        $group.text(herosData.results[0].connections['group-affiliation']);
    const $main = document.querySelector("main")
    $main.style.backgroundImage = `url(${herosData.results[0].image.url})`
};

}); // IFE Immediately Invoked Function Expresion to protect global scope






























