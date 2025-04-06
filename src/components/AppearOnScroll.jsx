import React, { useEffect, useState, useRef } from "react";
import "./AppearOnScroll.css"; // Add custom styles for appearing animations

const AppearOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`content ${isVisible ? "visible" : ""}`}
    >
      <h1>Hello, I appear on scroll!</h1>
      <p>Scroll down to see me in action.</p>
    </div>
  );
};

export default AppearOnScroll;