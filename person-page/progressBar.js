export function progressBar() {
  const verticalLines = document.querySelector(".time-line_all-line");

  gsap.to(verticalLines, {
    x: "-100%",
    scrollTrigger: {
      trigger: ".main-wrapper",
      start: "top top",
      end: "bottom bottom+=100vh",
      scrub: true,
    },
  });
}

export function progressBarText(prev, present, next) {
  let prevText = prev;
  let presentText = present;
  let nextText = next;

  const timeLinePrevLabel = document.querySelector("[data-timeline-prev-text]");
  const timeLinePresentLabel = document.querySelector(
    "[data-timeline-present-text]"
  );
  const timeLineNextLabel = document.querySelector("[data-timeline-next-text]");

  timeLinePrevLabel.textContent = prevText;
  timeLinePresentLabel.textContent = presentText;
  timeLineNextLabel.textContent = nextText;
}
