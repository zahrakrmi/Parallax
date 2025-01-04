import React, { useEffect, useRef } from "react";

export default function CursorManager() {
  const secondaryRef = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - secondaryRef.current.clientWidth / 2;
      const mouseY = clientY - secondaryRef.current.clientHeight / 2;

      positionRef.current.mouseX = mouseX;
      positionRef.current.mouseY = mouseY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) < 
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (secondaryRef.current) {
        secondaryRef.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`;
      }
    };

    followMouse();

    return () => {
      cancelAnimationFrame(positionRef.current.key);
    };
  }, []);

  return (
    <div className="cursor-default">
      <div
        ref={secondaryRef}
        className="secondary-cursor w-8 h-8 bg-orange-100 rounded-full fixed pointer-events-none z-[1000]"
      ></div>
    </div>
  );
}
