import { motion } from "motion/react";

const photos = [
  { url: "https://images.unsplash.com/photo-1629909613654-28a3a7c4eb40?auto=format&fit=crop&q=80&w=800", span: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=800", span: "col-span-2" },
  { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800", span: "" },
  { url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800", span: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800", span: "col-span-2" },
  { url: "https://images.unsplash.com/photo-1609139006211-19d658933b9c?auto=format&fit=crop&q=80&w=800", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-dental-turquoise font-display font-medium tracking-[0.2em] uppercase text-xs mb-4">
            Our Facility
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-premium">
            Experience the <span className="italic font-serif font-medium text-dental-turquoise">Ambience</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${photo.span}`}
            >
              <img 
                src={photo.url} 
                alt="Clinic Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-premium/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <div className="w-4 h-4 text-navy-premium">🔍</div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
