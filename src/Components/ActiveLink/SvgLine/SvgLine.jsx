import { gsap } from "gsap";

const SvgLine = () => {
  const initial_path = `M 10 80 Q 300 80 990 80`;

  const handleAnimation = (e) => {
    // Get bounding box of the container
    const container = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - container.left; // X position relative to the container
    const relativeY = e.clientY - container.top; // Y position relative to the container

    // Update the path dynamically based on the mouse position
    const path = `M 10 80 Q ${Math.min(relativeX, 590)} ${Math.min(
      relativeY,
      160
    )} 990 80`;

    gsap.to("svg path", {
      attr: { d: path },
      duration: 0.1,
    });
  };

  const handleMouseLeave = () => {
    // Animate back to the initial path when the mouse leaves
    gsap.to("svg path", {
      attr: { d: initial_path },
      duration: 1,
      ease: "elastic.out(1.75, 0.3)",
    });
  };

  return (
    <div
      className=""
      onMouseMove={handleAnimation}
      onMouseLeave={handleMouseLeave}
      style={{ width: "1000px", height: "200px" }}
    >
      <svg width="1000" height="160" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 80 Q 500 80 990 80" stroke="black" fill="transparent" />
      </svg>
    </div>
  );
};

export default SvgLine;
