import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { galleryImages } from "@/data/gallery";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Moments & Memories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Relive the excitement and joy from our past events through these captured moments.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {galleryImages.map((image, index) => (
                <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer "
                onClick={() => setSelectedImage(image.src)}
                >
                    {/* <img src={`${image.src}`} alt="" /> */}
                {/* Placeholder with gradient */}
                <div className="absolute inset-0 flex items-center overflow-hidden justify-center">
                    <img src={image.src} alt="" height="300px"/>
                  {/* <span className="text-4xl opacity-50">📸</span> */}
                  </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-center justify-center">
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <p className="text-primary-foreground font-medium text-sm">{image.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Lightbox */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-club-blue/30 via-club-green/30 to-club-red/30"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-90"><img src={selectedImage} alt="" /></span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
