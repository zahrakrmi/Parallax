import React, { useRef, useEffect } from "react";

export default function Finalsec() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const image = imageRef.current;

      if (!section || !image) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        const deltaY = scrollY - sectionTop;
        image.scrollLeft = deltaY * 2; // اسکرول افقی تصاویر
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [
    "https://sundaecreative.com/uploads/services/event_planning/1_1800xFree_Fullwidth-image-1800x1080.jpg",
    "https://sundaecreative.com/uploads/pages/home/9_450_Small_image-450w.jpg",
    "https://sundaecreative.com/uploads/services/influencer_marketing/1_1800xFree_Fullwidth-image-1800x1080.jpg",
    "https://sundaecreative.com/uploads/services/public_relation/4_450_Small_image-900w.jpg",
    "https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/586f6200-9e45-41e2-a060-2a4c95cfc4c3/raw/story-2jpg.jpeg",
    "https://sundaecreative.com/uploads/services/public_relation/8_450_Small_image-450w.jpg",
    "http://localhost:5173/4.jpg",
    "https://sundaecreative.com/uploads/services/public_relation/1_1800xFree_Fullwidth-image-1800x1080.jpg",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full h-[2200px] relative py-20"
    >
      <div
        ref={imageRef}
        className="flex gap-5 overflow-x-hidden sticky top-0 w-full py-20"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="h-96 w-[50%] object-cover"
          />
        ))}
      </div>
    </section>
  );
}
