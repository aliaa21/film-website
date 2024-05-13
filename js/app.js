let dataarray = [];
let row = document.querySelector('.row1');
let links = document.querySelectorAll('.menu .nav-link');
let imgPath = 'https://image.tmdb.org/t/p/w500';
let stars;
let searchInput = document.querySelector('#search');
let home = document.querySelector('#home');
let videoPath = 'https://www.youtube.com/embed/';


// Create a link element1
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://unpkg.com/open-props/open-props.min.css';
document.head.appendChild(link);










//------------------------------------ Re-load page------------------------------------------------

$(document).ready(function () {

    $('#loading').fadeOut(1000);

})



// ---------------------------------------Nav-bar----------------------------------------------------

$('.nav-menu ').on('click', function () {

    if ($("nav").css("margin-left") == "250px") {
        $('.menu ul li').animate({ "paddingTop": "250px", "opacity": "0" }, 1000);
        $(".side-nav").css("margin-left", "-250px");
        $("nav").css("margin-left", "0px");
        $('.nav-menu').html('<i class="fa-solid fa-align-justify"></i>');

    }
    else {
        $(".side-nav").css("margin-left", "0px");
        $("nav").css("margin-left", "250px");
        $('.menu ul li').animate({ "paddingTop": "25px", "opacity": "1" }, 1000);
        $('.nav-menu').html('<i class="fa-solid fa-xmark"></i>');
    }

});







// -------------------------------------------Get data from api--------------------------------------

async function get_data(x) {
    let response;
    if (x == "Trending") {
        response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    }
    else {
        response = await fetch(`https://api.themoviedb.org/3/movie/${x}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    }


    let data = await response.json();
    dataarray = data.results;
    display_data();
}
get_data('popular');



// ----------------------------------------hide and show home--------------------------------------------------


function hide_home() {
    document.getElementById('details').classList.add('d-none');
    home.classList.replace('d-block', 'd-none');
    searchInput.classList.replace('d-none', 'd-block');
    row.classList.remove('d-none');

}

function show_home() {

    document.getElementById('details').classList.add('d-none');
    home.classList.replace('d-none', 'd-block');
    searchInput.classList.replace('d-block', 'd-none');
    row.classList.add('d-none');

}






// ---------------------------------------Get api variable--------------------------------------------

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {

        // console.log(e.target.innerText)
        if (e.target.innerText == 'Home') {
            show_home();
        }
        else if (e.target.innerText == 'Top Rated') {
            hide_home();
            get_data('top_rated');

        }
        else if (e.target.innerText == 'Now playing') {
            hide_home();
            get_data('now_playing');
        }
        else if (e.target.innerText == 'Upcoming') {
            hide_home();
            get_data('upcoming');
        }
        else if (e.target.innerText == 'Popular') {
            hide_home();
            get_data('popular');
        }

        // get_data(e.target.innerText);
    })
}







// ----------------------------------------Get stars rated------------------------------------------------

function checkMovieVote(movie) {
    if (movie.vote_average <= 1) {
        stars = `<i class="fa-solid fa-star fs-6 text-warning"></i>`;
    }
    else if (movie.vote_average <= 2) {
        let term = '';
        stars = term + `<i class="fa-solid fa-star-half-stroke fs-6 text-warning"></i>`;
    }
    else if (movie.vote_average <= 3) {
        stars = `<i class="fa-solid fa-star fs-6 text-warning"></i>`;
    }
    else if (movie.vote_average <= 4) {
        let term = '';
        for (let i = 0; i < 1; i++) {
            term += `<i class="fa-solid fa-star fs-6 text-warning"></i>`;
        }
        stars = term + `<i class="fa-solid fa-star-half-stroke fs-6 text-warning"></i>`;
    }
    else if (movie.vote_average <= 5) {
        let term = '';
        for (let i = 0; i < 2; i++) {
            term += `<i class="fa-solid fa-star fs-6 text-warning"></i>`;
        }
        stars = term;
    }
    else if (movie.vote_average <= 6) {
        let term = '';
        for (let i = 0; i < 2; i++) {
            term += `<i class="fa-solid fa-star fs-6 text-warning"></i>`;
        }
        stars = term + `<i class="fa-solid fa-star-half-stroke fs-6 text-warning"></i>`;
    }
    else if (movie.vote_average <= 7) {
        let term = '';
        for (let i = 0; i < 3; i++) {
            term += `<i class="fa-solid fa-star fs-6 text-warning"></i>`;
        }
        stars = term;
    }
    else if (movie.vote_average <= 8) {
        let term = '';
        for (let i = 0; i < 3; i++) {
            term += `<i class="fa-solid fa-star fs-6 text-warning"></i>`;
        }
        stars = term + `<i class="fa-solid fa-star-half-stroke fs-6 text-warning"></i>`;
    }
    else if (movie.vote_average <= 9) {
        let term = '';
        for (let i = 0; i < 4; i++) {
            term += `<i class="fa-solid fa-star fs-6 text-warning"></i>`;
        }
        stars = term;
    }
    else if (movie.vote_average <= 10) {
        let term = '';
        for (let i = 0; i < 4; i++) {
            term += `<i class="fa-solid fa-star fs-6 text-warning"></i>`;
        }
        stars = term + `<i class="fa-solid fa-star-half-stroke fs-6 text-warning"></i>`;
    }
    else {
        let term = '';
        for (let i = 0; i < 6; i++) {
            term += `<i class="fa-solid fa-star fs-6 text-warning"></i>`;
        }
        stars = term;
    }
    // console.log(vote_average);
    return stars;
}


// ----------------------back arrow -----------------------------------
let arrow = document.querySelector('#arrow');


function Arrow() {

    window.open("index.html", "_self");


}






// ------------------------display details----------------------------------





async function display_details(id) {
    try {
    document.getElementById('details').classList.remove('d-none');

        let response1 = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
        let response2 = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
        let response3 = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
        let response4 = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);


        if (!response1.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (!response2.ok) {
            throw new Error(`HTTP error! Status: ${response2.status}`);
        }
        if (!response3.ok) {
            throw new Error(`HTTP error! Status: ${response3.status}`);
        }
        if (!response4.ok) {
            throw new Error(`HTTP error! Status: ${response3.status}`);
        }

        let data = await response1.json();
        let videos = await response2.json();
        let images = await response3.json();
        let recomend = await response4.json();


        console.log(videos);
        console.log(data);
        searchInput.classList.replace('d-block', 'd-none');
        row.classList.add('d-none');

        let div = '';
        let elements = '';
        let posters='';
        let recomendations='';
        for (let i = 0; i < images.backdrops.length; i++){
            elements+=`   <li class="track__item">
            <img src="${imgPath+images.backdrops[i].file_path}" alt="" width="300" height="300" />
          </li>`
        }
        for (let i = 10; i < 13; i++){
             posters+=`  <img src="${imgPath+images.posters[i].file_path}"> `
        }

        for (let i = 0; i < 3; i++){
            recomendations+=
          `  <div class="card me-3 ">
             
          <img src="${imgPath+recomend.results[i].poster_path}" class="card-img-top" >
         </div>`
            
        }
        
      

        div += `
            <div class="movie-detail position-relative" style="background-image:  linear-gradient(rgb(0,0,0,0.8), rgb(0,0,0,0.8)),url(${imgPath + data.backdrop_path});" id="landscape">
            <div class="trail position-absolute">
            <iframe id="trail" class="d-none" width="560" height="315" src="${videoPath + videos.results[0].key}"
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>
                <div class="arrow position-absolute">
                    <i id="arrow" onclick="Arrow()" class="fa-solid fa-circle-chevron-left"></i>
              </div>
            <div class="container">
                    <div class="row">
                        <div class="col-md-6 film-poster">
                            <img id="poster"  src="${imgPath + data.poster_path}" alt="" class="w-75">
                        </div>
                        <div class="col-md-6 film-content">
                            <div class="title">
                                <h1 class="text-white" id="Ptitle">${data.original_title}</h1>
                            </div>

                            <div class="trailer">
                                <h3 class="">Trailer</h3>
                                <a onclick="showT()" id="trailer" class="btn btn-hover">
                                    <i class="fa-solid fa-circle-play"></i>
                                    <span id="watchB">Watch Trailer</span>
                                </a>
                                <a class="btn btn-hover">
                                    <i class="fa-solid fa-circle-play"></i>
                                    <span id="watchB">Watch Now</span>
                                </a>
                            </div>

                            <div class="rating">
                                <h3>Rating</h3>
                                <div class="movie-info">
                                    <i class="fa-solid fa-star fs-3"></i>
                                    <span id="rating">${data.vote_average}</span>
                                </div>
                            </div>

                            <div class="overview overflow-y-scroll">
                                <h3>Over View</h3>
                                <p class="text-white" id="overview">${data.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container">
                <div class="section-header">
                    Movie Backdrops
                </div>
                <div class="track-wrapper">
                <ul class="track">
            ${elements}
                </ul>
            </div>
            <div class="section-header mt-5 mb-5">
            Movie Posters
        </div>

        <div class="gallery">
          ${posters}
      
          </div>
            </div>

            <div class="section-header mt-5 mb-5">
            Recomendations
        </div>


        <div class="card-group mb-5 ">
        ${recomendations}
        
           
          </div>


            `;

        // Assuming 'details' is the ID of the element where you want to display details
        let details = document.getElementById('details');
        if (!details) {
            throw new Error("Details element not found!");
        }
        details.innerHTML = div;
    } catch (error) {
        console.error('Error displaying details:', error.message);
        // Handle the error, show a message to the user or perform any necessary action
    }
}




// -----------------------------------------Display data---------------------------------------------------


function display_data() {

    // row.classList.remove('d-none');

    let div = '';
    for (let i = 0; i < dataarray.length; i++) {
        let movieOverView = '';

        if (dataarray[i].overview) {
            if (dataarray[i].overview.length > 300) {
                movieOverView = `${dataarray[i].overview.slice(0, 300)}...`;
            } else {
                movieOverView = `${dataarray[i].overview}`;
            }
        }

        if (dataarray[i].poster_path == null) {
            movie_image = `images/default-movie.jpg`;
        }
        else {
            movie_image = imgPath + dataarray[i].poster_path
        }

        div += ` 
        
        <div class="col-lg-4 col-md-6 col-sm-12 box-content">
        
            <div class="bg-info cardimage" onclick="display_details(${dataarray[i].id})">
                <img src='${movie_image}' class='w-100'>
                
                <div class="overlay">
                    <h1 class="animate__animated title">${dataarray[i].original_title}</h1>    
                    <p class="animate__animated desc">${movieOverView}</p>
                    <p class="animate__animated date"><span class="fst-normal">Release Date<span> : ${dataarray[i].release_date}</p>
                    <h3 class="rate animate__animated star">${checkMovieVote(dataarray[i])}</h3>
                    <h3 class="rate animate__animated vote">${dataarray[i].vote_average.toFixed(1)}</h3>
                </div>
            </div>
           
        </div>`;

    }
    row.innerHTML = div;
}









//----------------------------------------------Search function--------------------------------------------

async function search(x) {
    try {
        let response;
        if (searchInput.value == "") {
            response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)

        }
        else {
            response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${x}&api_key=eba8b9a7199efdcb0ca1f96879b83c44`);

        }

        let data = await response.json();
        dataarray = data.results;
        display_data();
    } catch (error) {
        console.error('Error:', error);
    }
}
searchInput.addEventListener('input', () => search(searchInput.value));









// ---------------------------------------------Form validation-------------------------------------------

function form_validations() {



    function checkClassError() {
        if ($('#contact .error').hasClass('animate__flipInX')) {
            return true;
        }
        else {
            return false;
        }
    }


    $('#contact input').on("input", function () {
        $('#contact input').on("input", function () {
            if (checkClassError()) {
                $('form button').addClass('animate__shakeX bg-danger buttonFormActive');
                $(`form button`).mouseenter(formButtonValidation);
                $('form button').addClass('animate__shakeX bg-danger buttonFormActive');
                $('form button').css({ 'cursor': 'default', 'userSelect': 'none' });
            }
            else {
                $('form button').removeClass('animate__shakeX bg-danger buttonFormActive');
                $(`form button`).css({ "marginLeft": "0px" });
                $('form button').off('mouseenter', formButtonValidation);
                $('form button').removeClass('animate__shakeX bg-danger buttonFormActive');
                $('form button').css('cursor', 'pointer');
            }
        })

    })



    $('#contact #name').on("input", function () {
        const regex = /^[a-zA-z\s]{1,36}$/
        const $error = $('#name').next();
        const $this = $(this);
        if ($(this).val() == "") {
            hideError($error, $this);
        }
        else if (regex.test($(this).val())) {
            hideError($error, $this);
        }
        else {
            $error.html("Invalid Name , only Characters allowed");
            ShowError($error, $this);
        }
    })



    $('#contact #email').on("input", function () {
        const regex = /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{3}$/;
        const $error = $('#email').next();
        const $this = $(this);
        if ($(this).val() == "") {
            hideError($error, $this);
        }
        else if (regex.test($(this).val())) {
            hideError($error, $this);
        }
        else {
            $error.html("Invalid Email , try example@domain.com");
            ShowError($error, $this);
        }
    })



    $('#contact #phone').on("input", function () {
        const regex = /^(02)?(01)[0125][0-9]{8}$/;
        const $error = $('#phone').next();
        const $this = $(this);
        if ($(this).val() == "") {
            hideError($error, $this);
        }
        else if (regex.test($(this).val())) {
            hideError($error, $this);
        }
        else {
            $error.html("Invalid Phone Number");
            ShowError($error, $this);
        }
    })



    $('#contact #age').on("input", function () {
        const regex = /^(1[6-9]|[2-9][0-9]|100)$/;
        const $error = $('#age').next();
        const $this = $(this);
        if ($(this).val() == "") {
            hideError($error, $this);
        }
        else if (regex.test($(this).val())) {
            hideError($error, $this);
        }
        else {
            $error.html("Your age must be over 16+");
            ShowError($error, $this);
        }
    })



    $('#contact #password').on("input", function () {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const $error = $('#password').next();
        const $this = $(this);
        if ($(this).val() == "") {
            hideError($error, $this);
        }
        else if (regex.test($(this).val())) {
            hideError($error, $this);
        }
        else {
            $error.html("password must contain numbers & letters at least 8 character");
            ShowError($error, $this);
        }
    })



    $('#contact #repassword').on("input", function () {
        const $error = $('#repassword').next();
        const $this = $(this);
        if ($(this).val() == "") {
            hideError($error, $this);
        }
        else if ($(this).val() == $('#password').val()) {
            hideError($error, $this);
        }
        else {
            $error.html("Password not match");
            ShowError($error, $this);
        }
    })



    $('.showPass').click(function () {
        if ($('#password').attr('type') == "text") {
            $('#password').attr('type', 'password');
            $('.showPass').html('<i data-show="show" class="fa-solid fa-eye-slash"></i>');
        } else {
            $('#password').attr('type', 'text');
            $('.showPass').html('<i data-show="show" class="fa-solid fa-eye"></i>');
        }
    })


    $('#password').focus(function () {
        $('.showPass').css("opacity", 1);
        $('.showPass').css("bottom", 10);
    })


    $(document).click(function (e) {
        if ($(e.target)[0] == $('#password')[0] || $(e.target).attr('data-show') == $('.showPass i').attr('data-show')) {
            $('.showPass').css("opacity", 1);
            $('.showPass').css("bottom", 10);
        }
        else {
            $('.showPass').css("opacity", 0);
            $('.showPass').css("bottom", -20);
        }
    })


    function hideError($error, $this) {
        $this.css("border-bottom-color", "#CED4DA");
        $error.html(null);
        $error.removeClass('animate__animated animate__flipInX');
        $error.addClass('animate__animated animate__fadeOutUp');
    }



    function ShowError($error, $this) {
        $this.css("border-bottom-color", "rgb(214, 46, 51)");
        $error.removeClass('animate__animated animate__fadeOutUp');
        $error.addClass('animate__animated animate__flipInX');
    }




    function formButtonValidation() {
        let buttonLocation = $(`form button`).css("marginLeft")
        if (buttonLocation == "250px") {
            $(`form button`).css({ "marginLeft": "0px" });
        }
        else {
            $(`form button`).css({ "marginLeft": "250px" });
        }
        $(`form button`).keydown(function (e) {
            if (e.key == "Enter") {
                e.preventDefault();
            }
        })
    }
}

form_validations();







// -------------------------------------------Button up-----------------------------------------------------


$(document).on('scroll', function () {

    let documentScroll = $(document).scrollTop();
    console.log(documentScroll);

    if (documentScroll > 80) {

        $('.button-up i').show(500);

    }
    else {

        $('.button-up i').hide(300);
    }


})


$('.button-up i').on('click', function () {


    $('body , html').animate({ scrollTop: 0 }, 2000);

})


$('#contact-us').on('click', function () {




    $('body , html').animate({ scrollTop: 15028 }, 5000);

})





// $(document).on('mouseleave', '.cardimage',function() {


//    $(' .overlay .desc ').css({'transform' :'translateX(-100%)'})


// });



$(document).on('mouseenter', '.cardimage', function () {
    var $desc = $(this).find('.overlay .desc');

    if (getTranslateY($desc) === -100) {
        $desc.css({ 'transform': 'translateX(-100%)' });
    } else {
        $desc.css({ 'transform': 'translateY(0)' });
    }
});



$('.cardimage').hover(
    function () {
        var $desc = $(this).find('.overlay .desc');

        if (getTranslateY($desc) === -100) {
            $desc.css({ 'transform': 'translateY(0)' });
        }
    },
    function () {
        var $desc = $(this).find('.overlay .desc');

        if (getTranslateY($desc) === 0) {
            $desc.css({ 'transform': 'translateX(-100%)' });
        }
    }
);

function getTranslateY(element) {
    var matrix = element.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
    return parseInt(matrix[5]);
}






// ------------------card payment----------------------


function showLoading(event, button) {
    event.preventDefault(); // Prevent form submission

    button.innerHTML = "Processing Payment...";

    // Simulate payment processing
    setTimeout(function () {
        button.innerHTML = "Payment completed.";
        button.style.backgroundColor = "green"; // Change button color to green

        // Check if payment is completed
        if (button.innerHTML === "Payment completed.") {
            // Redirect to index page after payment completed
            setTimeout(function () {
                window.open("index.html", "_self");
            }, 2000); // Redirect after 2 seconds
        }
    }, 3000); // Simulate payment processing for 3 seconds
}


function validatename(input){
    input.value = input.value.toUpperCase();
    input.value = input.value.replace(/[^a-zA-Z\s]+/g, '').replace(/\s{2,}/g, ' ');

    if (input.value.length > 20) {
        // If so, truncate the input to 14 characters
        input.value = input.value.slice(0, 20);
    }
}

function validateInput(input) {
    // Remove any non-numeric characters
    input.value = input.value.replace(/[^\d]/g, '');

    // Check if the input length is greater than 14
    if (input.value.length > 16) {
        // If so, truncate the input to 14 characters
        input.value = input.value.slice(0, 16);
    }

}
function validateCVV(input) {
    // Remove any non-numeric characters
    input.value = input.value.replace(/[^\d]/g, '');

    // Check if the input length is greater than 14
    if (input.value.length > 3) {
        // If so, truncate the input to 14 characters
        input.value = input.value.slice(0, 3);
    }

}








//-----------------------------------trail vid--------------------------------------------
function showT() {
    document.querySelector('#trail').classList.toggle('d-none');
    let Btn = document.querySelector('#watchB');
    if (Btn.innerHTML == 'Watch Trailer') {
        Btn.innerHTML = 'Hide Trailer';

    } else {
        Btn.innerHTML = 'Watch Trailer';
    }
}













