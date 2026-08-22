document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        navbar.classList.add("bg-slate-950", "shadow-md", "text-slate-600");
        navbar.classList.remove("bg-transparent");
        updateNavbarTextColor("text-gray-950", "text-gray-950");
      } else {
        navbar.classList.remove("bg-slate-950", "shadow-md");
        navbar.classList.add("bg-transparent");
        updateNavbarTextColor("text-slate-950", "text-slate-950");
      }
    });
  });

  function carousel() {
    return {
        currentSlide: 0,

        totalSlides: 9,

        touchStartX: 0,

        touchEndX: 0,

        nextSlide() {
            this.currentSlide =
                (this.currentSlide + 1) % this.totalSlides;
        },

        prevSlide() {
            this.currentSlide =
                (this.currentSlide - 1 + this.totalSlides) %
                this.totalSlides;
        },

        goToSlide(index) {
            this.currentSlide = index;
        },

        touchStart(event) {
            this.touchStartX = event.touches[0].clientX;
            this.touchEndX = event.touches[0].clientX;
        },

        touchMove(event) {
            this.touchEndX = event.touches[0].clientX;
        },

        touchEnd() {
            const swipeDistance =
                this.touchStartX - this.touchEndX;

            const minimumSwipeDistance = 50;

            if (swipeDistance > minimumSwipeDistance) {
                this.nextSlide();
            } else if (
                swipeDistance < -minimumSwipeDistance
            ) {
                this.prevSlide();
            }

            this.touchStartX = 0;
            this.touchEndX = 0;
        }
    };
}
