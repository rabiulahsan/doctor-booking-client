import { gsap } from "gsap";

const SvgLine = () => {
  const initial_path = `M 10 80 Q 300 80 990 80`;

  const handleAnimation = (e) => {
    // Get the current container and path element
    const container = e.currentTarget;
    const pathElement = container.querySelector("path"); // Specific path

    const containerRect = container.getBoundingClientRect();
    const relativeX = e.clientX - containerRect.left; // X position relative to container
    const relativeY = e.clientY - containerRect.top; // Y position relative to container

    // Dynamically update the path based on mouse position
    const path = `M 10 80 Q ${Math.min(relativeX, 590)} ${Math.min(
      relativeY,
      160
    )} 990 80`;

    gsap.to(pathElement, {
      attr: { d: path },
      duration: 0.1,
    });
  };

  const handleMouseLeave = (e) => {
    const pathElement = e.currentTarget.querySelector("path");

    // Animate back to the initial path when mouse leaves
    gsap.to(pathElement, {
      attr: { d: initial_path },
      duration: 1,
      ease: "elastic.out(1.75, 0.3)",
    });
  };

  return (
    <div
      onMouseMove={handleAnimation}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "1000px",
        height: "200px",
        position: "relative",
        pointerEvents: "all", // Allow pointer events on the container
      }}
    >
      <svg
        width="1000"
        height="160"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none", position: "absolute" }} // Ignore events for the svg
      >
        <path
          d="M 10 80 Q 500 80 990 80"
          stroke="black"
          fill="transparent"
          style={{
            pointerEvents: "auto", // Allow pointer events only on the path
            cursor: "pointer", // Optional: show pointer cursor when interacting
          }}
        />
      </svg>
    </div>
  );
};

export default SvgLine;
