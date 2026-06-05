$(document).ready(function () {
    $(".menu-links li a").click(function (e) {
      $(".menu-links li.active").removeClass("active");
      var $parent = $(this).parent();
      $parent.addClass("active");
    });
    $(".hamburger-icon").click(function () {
      $(".menu-links").toggleClass("left");
    });
    $(".hamburger-icon").click(function () {
      $(this).toggleClass("ham-style");
    });
    const themeSwitch = document.querySelector("#checkbox");
    if (themeSwitch) {
      themeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("dark-theme");
      });
    }

    const normalizeText = (value) =>
      value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const searchInput = document.querySelector(".search-icon input[type='search']");
    const searchableCards = document.querySelectorAll(".trending-content");

    if (searchInput && searchableCards.length) {
      const noResults = document.createElement("p");
      noResults.className = "search-empty-message";
      noResults.textContent = "Nenhum projeto, livro ou jogo encontrado.";
      noResults.hidden = true;

      const firstGrid = document.querySelector(".trending-grid");
      if (firstGrid) {
        firstGrid.parentNode.insertBefore(noResults, firstGrid);
      }

      searchInput.addEventListener("input", () => {
        const term = normalizeText(searchInput.value.trim());
        let visibleCards = 0;

        searchableCards.forEach((card) => {
          const column = card.closest(".col-md-4") || card;
          const matches = !term || normalizeText(card.innerText).includes(term);
          column.style.display = matches ? "" : "none";
          if (matches) {
            visibleCards += 1;
          }
        });

        noResults.hidden = visibleCards > 0;
      });

      searchInput.closest("form").addEventListener("submit", (event) => {
        event.preventDefault();
      });
    }
  });

  /* Menu Animado */

  let toggleBtn = document.querySelector('.toggleBtn');
        let menu = document.querySelector('.menu');
        if (toggleBtn && menu) {
        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
        }
  
