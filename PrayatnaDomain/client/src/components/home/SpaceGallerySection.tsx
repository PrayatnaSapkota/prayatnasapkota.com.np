import { ArrowRightIcon, ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Space images featuring significant astronomical images
const spaceImages = [
  {
    id: 1,
    title: "James Webb Deep Field",
    description: "An unprecedented deep infrared view of the universe, revealing countless galaxies as they appeared billions of years ago.",
    imageUrl: "/images/space/webb-deep-field.jpg",
    credit: "NASA, ESA, CSA, and STScI"
  },
  {
    id: 2,
    title: "Cosmic Cliffs in the Carina Nebula",
    description: "This landscape of 'mountains' and 'valleys' speckled with glittering stars captured by James Webb Space Telescope.",
    imageUrl: "/images/space/carina-nebula.jpg",
    credit: "NASA, ESA, CSA, and STScI"
  },
  {
    id: 3,
    title: "Pale Blue Dot",
    description: "Earth as seen from Voyager 1 in 1990 from about 6 billion kilometers away - a humbling perspective of our planet.",
    imageUrl: "/images/space/pale-blue-dot.jpg",
    credit: "NASA/JPL-Caltech"
  },
  {
    id: 4,
    title: "First Image of a Black Hole",
    description: "The first direct visual evidence of a supermassive black hole and its shadow at the center of galaxy M87.",
    imageUrl: "/images/space/black-hole.jpg",
    credit: "Event Horizon Telescope Collaboration"
  }
];

export default function SpaceGallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === spaceImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? spaceImages.length - 1 : prevIndex - 1
    );
  };
  
  const currentImage = spaceImages[currentImageIndex];
  
  return (
    <section id="gallery" className="py-20 relative bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-pink-500 opacity-10 rounded-full filter blur-3xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-3xl md:text-4xl mb-4">Space <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Gallery</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A collection of fascinating cosmic imagery that inspires my work and passion.</p>
          <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Main image display */}
            <div className="rounded-xl overflow-hidden bg-gray-900/70 border border-gray-800 shadow-2xl">
              <div className="relative h-96 md:h-[500px] select-none protected-image-container">
                <img 
                  src={currentImage.imageUrl} 
                  alt={currentImage.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                  onDragStart={(e) => e.preventDefault()}
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ 
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    pointerEvents: 'none'
                  }}
                />
                <div 
                  className="absolute inset-0 z-10" 
                  onContextMenu={(e) => e.preventDefault()} 
                  onMouseDown={(e) => e.preventDefault()}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="font-space text-2xl text-white mb-2">{currentImage.title}</h3>
                  <p className="text-gray-300 mb-1">{currentImage.description}</p>
                  <p className="text-sm text-gray-400">Credit: {currentImage.credit}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full hover:bg-purple-900/70 hover:scale-110 transition-all duration-300"
              onClick={prevImage}
            >
              <ArrowLeftIcon className="h-6 w-6 text-white" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full hover:bg-purple-900/70 hover:scale-110 transition-all duration-300"
              onClick={nextImage}
            >
              <ArrowRightIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
          
          {/* Thumbnail navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {spaceImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentImageIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentImageIndex 
                    ? "bg-purple-500 w-6" 
                    : "bg-gray-600 hover:bg-purple-400"
                )}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-400 text-sm">
              <ExternalLinkIcon className="inline mr-2 h-4 w-4 text-purple-400" />
              Images sourced from NASA and scientific organizations, showcasing the beauty of our cosmos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}