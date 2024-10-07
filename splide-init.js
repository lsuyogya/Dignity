document.addEventListener("DOMContentLoaded", () => {
  const heroSplide = new Splide("#heroimage-carousel", {
    // type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    cover: true,
    arrows: false,
    dots: false,
    pagination: false,
  });
  heroSplide.on("mounted", () => {
    const totalSlides = heroSplide.length; // Total number of slides

    heroSplide.on("active", (Slide) => {
      const currentIndex = Slide.index; // Get the current slide index
      const progressPercent = ((currentIndex + 1) / totalSlides) * 100; // Calculate percentage width
      activeBar = Slide.slide.querySelector(".prog_bar");
      activeBar.style.setProperty("--progress", `${progressPercent}%`);
    });
  });
  // heroSplide.on("autoplay:playing", (rate) => {
  //   activeBar.style.setProperty("--progress", `${rate * 100}%`);
  //   activeBar.style.background = "red";
  //   console.log(rate);
  // });
  heroSplide.mount();
});
