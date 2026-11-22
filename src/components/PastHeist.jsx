
import { useState ,useEffect} from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "../css/pastHeist.css";

function PastHeists() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/Past-Heist/The-Crew.jpg",
      title: "THE CREW",
      label: "OPERATION 001",
    },
    {
      src: "/Past-Heist/The-Execution.JPG" ,
      title: "THE EXECUTION",
      label: "24 HOURS OF CHAOS",
    },
    {
      src: "/Past-Heist/The-Masterminds.JPG",
      title: "THE MASTERMINDS",
      label: "BUILDING THE FUTURE",
    },
    {
      src: "/Past-Heist/The-Aftermath.jpg",
      title: "THE AFTERMATH",
      label: "MISSION COMPLETE",
    },
    {
      src: "/Past-Heist/The-Memories.jpg",
      title: "THE MEMORIES",
      label: "ANOTHER SUCCESSFUL HEIST",
    },
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
  if (selectedImage === null) return;

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    }

    if (e.key === "ArrowRight") {
      nextImage();
    }

    if (e.key === "ArrowLeft") {
      prevImage();
    }
  };

  // Disable background scrolling
  document.body.style.overflow = "hidden";

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedImage]);

  return (
    <section className="past-heists" id="past-heists">

      <div className="past-heists-header">
        <span className="archive-label">THE ARCHIVE / 001</span>

        <h2>
          PREVIOUS <span>HEISTS.</span>
        </h2>

        <p>
          Every great heist leaves behind a story.
          A glimpse into the chaos, creativity, and memories
          of our previous missions.
        </p>
      </div>

      <div className="past-heists-gallery">
        {images.map((image, index) => (
          <motion.div
            className={`heist-image heist-image-${index + 1}`}
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            onClick={() => setSelectedImage(index)}
          >
            <img src={image.src} alt={image.title} />

            <div className="heist-image-overlay">
              <span>{image.label}</span>
              <h3>{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN IMAGE VIEWER */}

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="heist-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >

            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              <X size={26} />
            </button>

            <button
              className="lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft size={32} />
            </button>

            <motion.img
              key={selectedImage}
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              className="lightbox-image"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight size={32} />
            </button>

            <div className="lightbox-caption">
              <span>{images[selectedImage].label}</span>
              <h3>{images[selectedImage].title}</h3>
              <p>
                {selectedImage + 1} / {images.length}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default PastHeists;