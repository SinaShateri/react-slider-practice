import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import images from "./image-import";
import "./app.css";

const App = (props) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt={image} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
