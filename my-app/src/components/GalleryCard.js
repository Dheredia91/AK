"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import Card from "./Card";

const GalleryCard = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open Modal
  const openModal = (index) => {
    setSelectedImage(images[index].src);
    setCurrentIndex(index);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigate Previous Image
  const prevImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].src);
  };

  // Navigate Next Image
  const nextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].src);
  };

  return (
    <section className="bg-white py-24 px-12 flex items-center justify-center">
      <Card className="p-8 w-full max-w-6xl"> {/* Adjusted padding inside card */}
        {/* Responsive Grid: 3 columns on large screens, 2 on medium, 1 on small */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Increased gap */}
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full overflow-hidden group shadow-md cursor-pointer "
              onClick={() => openModal(idx)}
            >
              {/* Image with Hover Effect */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[220px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </Card>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-6 text-white text-3xl"
            onClick={closeModal}
          >
            <FaTimes />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-6 text-white text-4xl"
            onClick={prevImage}
          >
            <FaArrowLeft />
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Expanded view"
            className="max-w-[90%] max-h-[90%] object-contain"
          />

          {/* Right Arrow */}
          <button
            className="absolute right-6 text-white text-4xl"
            onClick={nextImage}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default GalleryCard;
