gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

gsap.from(".box", {
  opacity: 0,
  delay: 1.5,
  x: -20,
});

gsap.from(".box2", {
  opacity: 0,
  delay: 2,
  x: 20,
});

gsap.fromTo(
  ".brainrot",
  { scale: 0, opacity: 0 }, // Start state
  { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
);

gsap.fromTo(
  ".max-cat",
  { scale: 0, opacity: 0 }, // Start state
  { scale: 1, opacity: 1, duration: 3, ease: "power2.out" }
);

tl.fromTo(
  ".jacky-img img",
  { opacity: 0 },
  { opacity: 1, duration: 2, delay: 2, ease: "power2.out" }
).fromTo(
  ".jacky-img h2",
  { opacity: 0 },
  { opacity: 1, duration: 2, ease: "power2.out" },
  "+=0.2"
);
