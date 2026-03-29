import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Facebook, Twitter, ArrowRight, Calendar, MapPin, Phone, Clock } from "lucide-react";
import { cn } from "./lib/utils";

const SERVICES = [
  {
    category: "Color Artistry",
    items: [
      { name: "Lived-in Blonde", price: "From $350", description: "Seamless, low-maintenance blonde that grows out beautifully." },
      { name: "Signature Balayage", price: "From $280", description: "Hand-painted highlights for a natural, sun-kissed dimension." },
      { name: "Full Dimensional Color", price: "From $220", description: "Rich, multi-tonal color tailored to your skin tone." },
    ]
  },
  {
    category: "Precision Cutting",
    items: [
      { name: "The Signature Cut", price: "From $120", description: "Expertly crafted shape designed for your hair texture and lifestyle." },
      { name: "Editorial Restyle", price: "From $180", description: "A complete transformation inspired by modern runway trends." },
      { name: "Textural Shaping", price: "From $110", description: "Enhancing natural movement and weight distribution." },
    ]
  },
  {
    category: "Rituals & Care",
    items: [
      { name: "Lumière Gloss", price: "From $95", description: "High-shine treatment to refresh tone and add brilliant luminosity." },
      { name: "Scalp Detox Ritual", price: "From $75", description: "Deep cleansing and hydration for optimal hair health." },
      { name: "Molecular Repair", price: "From $65", description: "Advanced bond-building treatment for compromised hair." },
    ]
  }
];

const GALLERY = [
  "https://picsum.photos/seed/hair1/800/1000",
  "https://picsum.photos/seed/hair2/800/1000",
  "https://picsum.photos/seed/hair3/800/1000",
  "https://picsum.photos/seed/hair4/800/1000",
  "https://picsum.photos/seed/hair5/800/1000",
  "https://picsum.photos/seed/hair6/800/1000",
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 flex items-center justify-between",
        isScrolled ? "bg-black/80 backdrop-blur-xl py-4 border-b border-white/10" : "bg-transparent"
      )}>
        <div className="flex items-center gap-8">
          <a href="#" className="text-2xl font-serif italic tracking-tighter">Lumière</a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-widest uppercase opacity-60">
            <a href="#services" className="hover:opacity-100 transition-opacity">Services</a>
            <a href="#about" className="hover:opacity-100 transition-opacity">Philosophy</a>
            <a href="#gallery" className="hover:opacity-100 transition-opacity">Portfolio</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Menu className="size-6" />
          </button>
          <a 
            href="#booking"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-opacity-90 transition-all active:scale-95"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-black p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-serif italic">Lumière</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X className="size-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-4xl font-serif italic">
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Philosophy</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
              <a href="#booking" onClick={() => setMobileMenuOpen(false)}>Book Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://picsum.photos/seed/blonde-hair/1920/1080" 
            alt="Stylist working on blonde hair" 
            className="w-full h-full object-cover brightness-[0.6]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xs md:text-sm font-medium tracking-[0.4em] uppercase mb-6 block opacity-80"
          >
            The Art of Lived-In Luxury
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-serif italic leading-[1.1] mb-8"
          >
            Elevating your <br /> natural artistry.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a 
              href="#booking"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-semibold rounded-full text-lg hover:px-12 transition-all group"
            >
              Reserve Your Experience
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Floating Book Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-8 right-6 z-40">
        <motion.a 
          href="#booking"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center size-16 bg-white text-black rounded-full shadow-2xl"
        >
          <Calendar className="size-6" />
        </motion.a>
      </div>

      {/* Philosophy Section */}
      <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://picsum.photos/seed/salon-interior/1000/1250" 
              alt="Salon Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <span className="text-sm font-medium tracking-[0.3em] uppercase opacity-40">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
              Where fashion meets <br /> individual expression.
            </h2>
            <p className="text-lg md:text-xl text-black/60 leading-relaxed font-light">
              Lumière was founded on the belief that hair is the ultimate accessory. We specialize in editorial-grade techniques adapted for the modern individual. Our approach is bespoke, focusing on lived-in color and precision shapes that evolve with you.
            </p>
            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 font-medium border-b border-black pb-1 hover:opacity-60 transition-opacity">
                Meet the Collective <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-40 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-sm font-medium tracking-[0.3em] uppercase opacity-40">The Menu</span>
              <h2 className="text-5xl md:text-7xl font-serif italic">Specialized Services</h2>
            </div>
            <p className="max-w-md text-white/50 text-lg font-light">
              All services include a comprehensive consultation, signature wash, and editorial finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-24">
            {SERVICES.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <h3 className="text-xl font-medium tracking-widest uppercase border-b border-white/10 pb-4">
                  {category.category}
                </h3>
                <div className="space-y-10">
                  {category.items.map((item, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-serif italic group-hover:text-white/70 transition-colors">{item.name}</h4>
                        <span className="text-sm font-medium opacity-40">{item.price}</span>
                      </div>
                      <p className="text-sm text-white/40 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-40 bg-[#0f0f0f]">
        <div className="px-6 md:px-12 mb-16">
          <span className="text-sm font-medium tracking-[0.3em] uppercase opacity-40 block mb-4">The Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-serif italic">Recent Artistry</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 px-1">
          {GALLERY.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 0.98 }}
              className="aspect-[3/4] overflow-hidden bg-white/5"
            >
              <img 
                src={img} 
                alt={`Portfolio ${idx + 1}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 md:py-40 px-6 md:px-12 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-8xl font-serif italic leading-tight">
            Ready for your <br /> transformation?
          </h2>
          <p className="text-xl md:text-2xl text-black/60 font-light max-w-2xl mx-auto">
            Secure your appointment with our collective of master stylists. We recommend booking 2-4 weeks in advance for color services.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <button className="w-full md:w-auto px-12 py-5 bg-black text-white font-semibold rounded-full text-lg hover:bg-black/80 transition-all active:scale-95">
              Book Online
            </button>
            <button className="w-full md:w-auto px-12 py-5 border border-black text-black font-semibold rounded-full text-lg hover:bg-black hover:text-white transition-all active:scale-95">
              Call Studio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 md:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <a href="#" className="text-4xl font-serif italic tracking-tighter">Lumière</a>
            <p className="max-w-xs text-white/40 font-light leading-relaxed">
              A sanctuary for luxury hair artistry. Dedicated to the craft of lived-in color and precision shaping.
            </p>
            <div className="flex gap-6">
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Instagram className="size-5" /></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Facebook className="size-5" /></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Twitter className="size-5" /></a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-xs font-semibold tracking-widest uppercase opacity-40">Visit Us</h5>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 shrink-0 mt-0.5" />
                <span>124 Editorial Way, <br /> Fashion District, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0" />
                <span>+1 (212) 555-0198</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-xs font-semibold tracking-widest uppercase opacity-40">Hours</h5>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li className="flex items-start gap-3">
                <Clock className="size-4 shrink-0 mt-0.5" />
                <div>
                  <p>Tue – Fri: 10am – 8pm</p>
                  <p>Sat: 9am – 6pm</p>
                  <p>Sun – Mon: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.2em] opacity-30">
          <p>© 2026 Lumière Salon Collective. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
