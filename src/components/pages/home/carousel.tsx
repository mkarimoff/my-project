import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import drawer2 from "../../../assets/images/drawer2.webp";
import bgdecor from "../../../assets/images/bg-decor.jpg";
import bglight from "../../../assets/images/bg-light.jpg";
import granit from "../../../assets/images/granit.jpg";
import home from "../../../assets/images/home-page-img.jpeg";

const images: string[] = [
  drawer2,
  bgdecor,
  bglight,
  granit,
  home,
  "instagram-slide" // Adding Instagram slide as part of the images array
];

export default function Carousel() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length); // Including the Instagram slide in the loop
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle looping for proper slicing, including the Instagram slide
  const visibleImages = [...images, ...images].slice(index, index + 5);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex gap-2" style={{ display: 'flex',marginBottom:'-10px' }}>
        <AnimatePresence initial={false} mode="popLayout">
          {visibleImages.map((src: string, i: number) => (
            <motion.div
              key={`${src}-${i}`}
              className="flex-none w-1/5 object-cover rounded-lg"
              initial={{ opacity: 0, x: 50 }}  // Slide in from right with fade-in
              animate={{ opacity: 1, x: 0 }}   // Slide to center and fade-in
              exit={{ opacity: 0, x: -50 }}    // Exit with sliding left and fade-out
              transition={{ duration: 0.3 }}   // Faster animation, set duration to 0.3 seconds
            >
              {src === "instagram-slide" ? (
                <div className="insta-wrap text-center p-4">
                  <h1 className="text-2xl font-bold mb-4">Connect To Instagram</h1>
                  <p className="mb-4">
                    The pinnacle of versatility, our core collection is flattering.
                  </p>
                  <a href="https://www.instagram.com/m_karimoff/" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                      Join now
                    </button>
                  </a>
                </div>
              ) : (
                <img src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover rounded-lg" />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}


