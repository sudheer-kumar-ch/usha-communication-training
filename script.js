// Change navbar background and add shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled'); // Add shadow class
    } else {
        navbar.classList.remove('scrolled'); // Remove shadow class
    }
});
const hamburger = document.getElementById('hamburger');
//const menu =document.getElementById('menu');
const navItems = document.getElementById('navItems');

hamburger.onclick = function() {
    
    navItems.classList.toggle('open')
};





const words = ["With Self", "With Others", "in Business"];
let index = 0;
const carouselText = document.querySelector('.text-carousel-text');

function changeWord() {
  // Slide the current word out of view
  carouselText.style.top = '-100%';
  
  setTimeout(() => {
    // Update the text once it's out of view
    carouselText.textContent = words[index];
    
    // Reset position to below the view, then slide it in
    carouselText.style.top = '100%';
    
    setTimeout(() => {
      carouselText.style.top = '0'; // Slide in the new word
    }, 50);

    index = (index + 1) % words.length;
  }, 500); // Delay for sliding out
}

setInterval(changeWord, 3000); // Change word every 2 seconds




//row detail
document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelectorAll('.number');

    // Function to increment the numbers
    const incrementNumbers = (num) => {
        const target = +num.getAttribute('data-target');
        let count = 0;

        const increment = setInterval(() => {
            if (count < target) {
                count++;
                num.textContent = count;
            } else {
                clearInterval(increment);
            }
        }, 10); // Adjust the interval duration for speed
    };

    // Intersection Observer to check when cards are in view
    const options = {
        root: null, // Use the viewport as the container
        threshold: 0.1 // Trigger when at least 10% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the entry is in view, start incrementing the numbers
                const numberElements = entry.target.querySelectorAll('.number');
                numberElements.forEach(num => incrementNumbers(num));
                observer.unobserve(entry.target); // Stop observing after the numbers have been incremented
            }
        });
    }, options);

    // Observe the container that holds the cards
    const cardsContainer = document.querySelector('.custom-arrow-container');
    observer.observe(cardsContainer);
});



/*document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelectorAll('.number');

    numbers.forEach((num) => {
        const target = +num.getAttribute('data-target');
        let count = 0;

        const increment = setInterval(() => {
            if (count < target) {
                count++;
                num.textContent = count;
            } else {
                clearInterval(increment);
            }
        }, 20); // Adjust the interval duration for speed
    });
});
*/

//row detail end
/*
const carousel = document.querySelector('.custom-carousel');
const cards = document.querySelectorAll('.testimonial-card-unique');
const totalCards = cards.length;
const cardWidth = cards[0].offsetWidth; // Width of a single card

// Clone all cards and append them to the carousel
for (let i = 0; i < totalCards; i++) {
    const cardClone = cards[i].cloneNode(true);
    carousel.appendChild(cardClone);
}

// Update the total number of cards after cloning
const totalClonedCards = totalCards * 2; // Double the number of cards for continuous flow

let currentIndex = 0; // Start index for the carousel

function moveCarousel() {
    currentIndex++;

    // Move the carousel
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Check if we reached the original last card
    if (currentIndex >= totalCards) {
        // Reset the index to the original position
        setTimeout(() => {
            carousel.style.transition = 'none'; // Disable transition for instant jump
            carousel.style.transform = 'translateX(0)'; // Jump back to the start
            currentIndex = 0; // Reset the index
        }, 1000); // Wait for the duration of the transition before jumping
    }
}

// Automatically move the carousel every 3 seconds
setInterval(moveCarousel, 3000);

// Pause scrolling on hover
carousel.addEventListener('mouseover', () => {
    //clearInterval(moveCarousel);
});

carousel.addEventListener('mouseout', () => {
    setInterval(moveCarousel, 3000);
});
*/

/*const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.testimonial-card');

let currentIndex = 0;
const cardCount = cards.length;
const intervalTime = 6000; // Total time per card (3 seconds pause + 3 seconds movement)
const cardWidth = 320; // Card width plus margin

function moveCarousel() {
    currentIndex++;
    if (currentIndex >= cardCount / 2) {
        currentIndex = 0; // Reset to first card after all have been shown
    }
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Move to the next card
}

// Start the carousel movement
setInterval(moveCarousel, intervalTime); // Change every 6 seconds (3 seconds pause + 3 seconds to move)

//testimonial carousel end
*/


// Select all training cards
const trainingCards = document.querySelectorAll('.training-card');

// Function to add the show class when the card comes into view
function showCards() {
    trainingCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (cardPosition < screenPosition) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', showCards);

// Initial call to show cards on page load
showCards();

//
//carousel
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

// Auto-slide every 5 seconds (optional)
setInterval(nextSlide, 5000);

//carousel end