const a = +prompt("Введите число a:");
const b = +prompt("Введите число b:");
const sum = a + b;
function showMessage() {
    alert(sum);
  }

// Плавный скролл при клике на ссылки меню
var menuLinks = document.querySelectorAll('.menu a');
    for(var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            var targetSectionId = this.getAttribute('href').substr(1);
            var targetSection = document.getElementById(targetSectionId);
            var targetSectionOffsetTop = targetSection.offsetTop;
            window.scrollTo({
                top: targetSectionOffsetTop,
                behavior: 'smooth'
            });
        });
    }