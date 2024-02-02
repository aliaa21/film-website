let dataarray = [];
let row = document.querySelector('.row');
let links = document.querySelectorAll('.menu .nav-link');
let imgPath = 'https://image.tmdb.org/t/p/w500';
let stars;
let searchInput = document.querySelector('#search');





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








// ---------------------------------------Get api variable--------------------------------------------

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {

        // console.log(e.target.innerText)

        if (e.target.innerText == 'Top Rated') {

            get_data('top_rated');
        }
        else if (e.target.innerText == 'Now playing') {
            get_data('now_playing');
        }
        else if (e.target.innerText == 'Upcoming') {
            get_data('upcoming');
        }
        else if (e.target.innerText == 'Popular') {
            get_data('popular');
        }

        get_data(e.target.innerText);
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







// -----------------------------------------Display data---------------------------------------------------


function display_data() {
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
        
            <div class="bg-info cardimage">
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


    $('body , html').animate({ scrollTop: 4202 }, 2000);

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




























