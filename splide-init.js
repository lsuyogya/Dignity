document.addEventListener('DOMContentLoaded', () => {
  const heroSplide = new Splide('#heroimage-carousel', {
    type: 'loop',
    clones: 0,
    perPage: 1,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    cover: true,
    arrows: false,
    dots: false,
    pagination: false,
  });
  heroSplide.on('mounted', () => {
    const totalSlides = heroSplide.length; // Total number of slides
    const outerContent = document.querySelector('.heroContent.outer');
    const outerProgBar = outerContent.querySelector('.prog_bar');
    const outerHeader = outerContent.querySelector('.heading');
    const outerLink = outerContent.querySelector('.link');
    heroSplide.on('active', (Slide) => {
      const currentIndex = Slide.index; // Get the current slide index
      const progressPercent = ((currentIndex + 1) / totalSlides) * 100; // Calculate percentage width
      console.log(Slide.slide);
      const innerContent = Slide.slide.querySelector('.heroContent');
      const innerHeader = innerContent.querySelector('.heading');
      const innerLink = innerContent.querySelector('.link');

      outerProgBar.style.setProperty('--progress', `${progressPercent}%`);
      outerHeader.innerText = innerHeader.textContent;
      console.log(innerHeader);
      outerLink.href = innerLink.href;
      // activeBar = Slide.slide.querySelector('.prog_bar');
    });
  });
  // heroSplide.on("autoplay:playing", (rate) => {
  //   activeBar.style.setProperty("--progress", `${rate * 100}%`);
  //   activeBar.style.background = "red";
  //   console.log(rate);
  // });
  heroSplide.mount();
});
