import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TitleSection from "../components/TitleSection";
import { data } from "../data/data";

function Certification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const certifications = data.certifications;

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section
      className="container w-full mx-auto pt-7 min-[400px]:pt-20"
      id="certifications"
    >
      <TitleSection lowerText="Certifications" upperText="Show my" />

      <div className="relative w-[92%] sm:w-4/5 gap-3 mx-auto mt-7 lg:w-3/4">
        <div className="flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 p-2 transition-colors rounded-full bg-gray-800/50 hover:bg-gray-800"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="pr-5 overflow-hidden">
            <div
              className="flex gap-3 transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex *
                  (100 /
                    (window.innerWidth < 640
                      ? window.innerWidth < 1024
                        ? 1
                        : 2
                      : 3))
                }%)`,
              }}
            >
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.linkTo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-shrink-0 w-full sm:w-[54%] lg:w-[33%] border border-gray-300 dark:border-none bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105`}
                  style={{
                    transform: isTransitioning ? "scale(0.98)" : "scale(1)",
                  }}
                >
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-gray-900/90 dark:to-transparent" />
                  </div>
                  <div className="px-6">
                    <h3 className="min-[400px]:text-xl font-bold text-gray-800 dark:invert">{cert.title}</h3>
                    <p className="mb-4 text-sm text-gray-600 dark:invert">{cert.issuer}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-10 p-2 transition-colors rounded-full bg-gray-800/50 hover:bg-gray-800"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
    // </div>
  );
}

export default Certification;
