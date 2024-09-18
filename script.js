new Swiper('.courses-wrapper', {

  loop: true,
  spaceBetween: 30,

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

breakpoints:{
  0:{
      slidesPerView:1
  },
  600:{
      slidesPerView:2
  },
  1024:{
      slidesPerView:3
  },
  }
}
);



// impact

const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
    if (
        pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
        activated === false
    ) {
        counters.forEach(counter => {
            counter.innerHTML = 0;
            let count = 0;

            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if (count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            }

            updateCount(); // Call the function to start counting
        });
        activated = true;
    } else if (
        pageYOffset < container.offsetTop - container.offsetHeight - 500 ||
        (pageYOffset === 0 && activated === true)
    ) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });

        activated = false;
    }
});
