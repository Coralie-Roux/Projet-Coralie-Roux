window.addEventListener('load', () => {
    const targetSections = document.querySelectorAll('.definition-osteopathie, .a-propos, .pourquoi-osteopathe');
  
    targetSections.forEach(section => {
      const images = section.querySelectorAll('img');
  
      images.forEach(img => {
        if (img.complete) {
          addOrientationClass(img);
        } else {
          img.onload = () => addOrientationClass(img);
        }
      });
    });
  
    function addOrientationClass(img) {
      if (img.naturalHeight > img.naturalWidth) {
        img.classList.add('vertical');
      } else {
        img.classList.add('horizontal');
      }
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".slideout-menu ul li a");

    function onScroll() {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href").substring(1);
        if (href === current) {
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
  });