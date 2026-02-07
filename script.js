// Function for returning to the top of the page when the window has fully loaded
window.onload = function() {
    window.scrollTo(0, 0); // Scroll to 0 pixels from the top
    
    // Prevent the browser from automatically restoring the previous scroll position
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'; // Set the scroll restoration to manual
    }
};
//--------------------------------------------------------------------------------------------
// TRAILER MODAL FUNCTION - JQUERY Function
const modal = document.getElementById('trailerModal');
const playBtn = document.getElementById('playTrailerBtn');
const closeModal = document.querySelector('.close');
const video = document.getElementById('trailerVideo');
// Shows the modal and plays video when the play button is clicked
$('#playTrailerBtn').on('click', function() {
    $('#trailerModal').show(); // Displays the modal
    $('#trailerVideo').get(0).play(); // Plays the video
});
// Closes the modal and pauses the video when the close button is clicked
$('.close').on('click', function() {
    $('#trailerModal').hide(); // Hide the modal
    var video = $('#trailerVideo').get(0);
    video.pause(); // Pauses the video
    video.currentTime = 0; // Restores video to the beginning
});
// Closes the modal when clicking outside of the modal content
$(window).on('click', function(event) {
    if ($(event.target).is('#trailerModal')) {
        $('#trailerModal').hide(); // Hide the modal
        var video = $('#trailerVideo').get(0);
        video.pause(); // Pauses the video
        video.currentTime = 0; // Restores video to the beginning
    }
});
//--------------------------------------------------------------------------------------------
// CURTAIN MENU FUNCTIONALITY
const iconContainer = document.querySelector('.icon-container');
const burgerIcon = document.getElementById('burgerMenu');
const closeIcon = document.getElementById('closeMenu');
const curtainMenu = document.getElementById('curtainMenu');
const movieDetailsSection = document.getElementById('movie-details');
const headerSection = document.querySelector('header');
const menuLinks = document.querySelectorAll('.curtain-menu ul li a'); // Selecting all menu links
// Checking the scroll position and change icon color based on section
window.addEventListener('scroll', function () {
    const movieDetailsTop = movieDetailsSection.offsetTop;
    const headerBottom = headerSection.offsetHeight;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    // Checking if the menu is closed and if we have scrolled past the movie details section
    if (!curtainMenu.classList.contains('active')) {
        if (scrollPosition >= movieDetailsTop) {
            iconContainer.classList.add('icon-black'); // Color: Black
        } else if (scrollPosition < headerBottom) {
            iconContainer.classList.remove('icon-black'); // Color: White
        }
    }
});
// When the burger menu is open (show curtain) -> Keep the white color on close button
burgerIcon.addEventListener('click', function () {
    curtainMenu.classList.add('active'); // Opens the curtain menu
    iconContainer.classList.remove('icon-black'); // Removes black color (keeps white)
    burgerIcon.style.display = 'none'; // Hides the burger icon
    closeIcon.style.display = 'block'; // Show close icon
    setTimeout(() => {
        closeIcon.style.opacity = '1'; // Smooth transition for opacity
    }, 10); // Delay for smooth transition
});
// When the curtain menu closes (and we return to the scroll logic)
closeIcon.addEventListener('click', function () {
    curtainMenu.classList.remove('active'); // Closes curtain menu
    closeIcon.style.opacity = '0'; // Smooth transition for opacity
    setTimeout(() => {
        closeIcon.style.display = 'none'; // Hides the close icon
        burgerIcon.style.display = 'block'; // Shows the burger icon
        // Checking position and restoring color based on section
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const movieDetailsTop = movieDetailsSection.offsetTop;
        if (scrollPosition >= movieDetailsTop) {
            iconContainer.classList.add('icon-black'); // Color: Black
        } else {
            iconContainer.classList.remove('icon-black'); // Color: White
        }
    }, 500); // Delays to match the close animation
});
//--------------------------------------------------------------------------------------------
// Monitoring that the icon passes the sections - JQUERY Function
$(window).on('scroll', function() {
    const sectionTop = $('#movie-details').offset().top; // Retrieves the position of the section
    const scrollPosition = $(window).scrollTop(); // Retrieves the current scroll position

    if (scrollPosition >= sectionTop) {
        $('.icon-container').addClass('icon-black'); // Adds black color
    } else {
        $('.icon-container').removeClass('icon-black'); // Removes black color
    }
});
//--------------------------------------------------------------------------------------------
// Closes curtain menu when clicking a menu link
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        curtainMenu.classList.remove('active'); // Closes the curtain menu
        closeIcon.style.opacity = '0'; // Hides the close icon
        setTimeout(() => {
            closeIcon.style.display = 'none'; // Hides the close icon
            burgerIcon.style.display = 'block'; // Shows the burger icon again
            // Checking position and restoring color based on section
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const movieDetailsTop = movieDetailsSection.offsetTop;
            if (scrollPosition >= movieDetailsTop) {
                iconContainer.classList.add('icon-black'); // Color: Black
            } else {
                iconContainer.classList.remove('icon-black'); // Color: White
            }
        }, 500); // Delay to match the close animation
    });
});
//--------------------------------------------------------------------------------------------
// FOOTER ARROW - JQUERY Function
// Smooth scroll to the top
$('#backToTop').click(function(event) {
    event.preventDefault(); // Prevents default link behaviour
    $('html, body').animate({ scrollTop: 0 }, 'slow'); // Slow motion
});