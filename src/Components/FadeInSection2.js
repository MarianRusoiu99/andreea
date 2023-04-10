import React from "react";

function FadeInSection2(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section2 ${isVisible ? 'is-visible2' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );

  }
  export default FadeInSection2