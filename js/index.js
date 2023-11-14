// import '@splidejs/splide/css';
// import { Splide } from "@splidejs/splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  focus: "center",
  perPage: 6,
  autoScroll: {
    speed: 1,
  },
});

splide.mount();