function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleMenu() {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const menuLinks = document.querySelector(".menu-links");

  hamburgerIcon.classList.toggle("open");
  menuLinks.classList.toggle("open");
}

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let currentScrollTop = window.pageYOffset;

  // Deteksi scroll ke bawah
  if (currentScrollTop > lastScrollTop) {
    document.getElementById("desktop-nav").classList.add("hidden");
  } else {
    // Deteksi scroll ke atas
    document.getElementById("desktop-nav").classList.remove("hidden");
  }

  // Simpan posisi scroll saat ini untuk deteksi berikutnya
  lastScrollTop = currentScrollTop;
});


document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0; // Keeps track of the last scroll position
  const navbar = document.querySelector('nav'); // Reference to the navbar

  // Hides the navbar when any part of the page is clicked
  document.body.addEventListener('click', function() {
      navbar.classList.add('hidden');
  });

  // Shows the navbar when the page is scrolled
  window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          // Scrolling down
          navbar.classList.add('hidden');
      } else {
          // Scrolling up
          navbar.classList.remove('hidden');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, false);
});

document.querySelector('.section__pic-container img').addEventListener('click', function() {
  let modal = document.getElementById('profileModal');
  modal.style.display = 'flex';
});

document.getElementById('profileModal').addEventListener('click', function() {
  this.style.display = 'none';
});

