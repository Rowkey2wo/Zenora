"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, Leaf, Clock, MapPin, CheckCircle, Calendar, Users, Home as HomeIcon } from 'lucide-react'; // Renamed 'Home' icon to 'HomeIcon'

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Parallax effect for the subtle background gradient - FIX: Removed extra comma in useTransform call
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const cardImages = ["/bathroom3.jpg", "/bedroom2.jpg", "/living-room.jpg"];
  const cardTitles = ["Bathroom Oasis", "Bedroom Sanctuary", "Living Room Luxury"];

  const steps = [
    { title: "Schedule Effortlessly", desc: "Choose a service, date, and time that fits your busy lifestyle using our seamless online portal.", icon: Calendar },
    { title: "Professionals Arrive", desc: "Our vetted, trained professionals arrive on time, fully equipped with premium eco-friendly supplies.", icon: Users },
    { title: "Experience Zen", desc: "Step back into a spotless, refreshed space. Enjoy peace of mind with our 100% satisfaction guarantee.", icon: HomeIcon }, // Use the renamed 'HomeIcon' here
  ];

  const stats = [
    { value: "5,000+", label: "Homes Transformed", icon: CheckCircle },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "10+", label: "Years of Expertise", icon: Clock },
    { value: "100%", label: "Eco-Conscious", icon: Leaf },
  ];

  const testimonials = [
    {
      name: "Anna R.",
      quote: "Zenora made my condo feel brand new. Impeccable attention to detail and a breath of fresh air!",
    },
    {
      name: "Michael T.",
      quote: "Professional, punctual, and worth every peso. This is a premium service I highly recommend.",
    },
    {
      name: "Sofia L.",
      quote: "Luxury-level cleaning without the stress. They truly deliver tranquility and I'm a regular client now.",
    },
  ];

  return (
    // Updated color scheme to a premium, warm palette
    <div className="relative min-h-screen overflow-hidden bg-[#e2d8d1] text-[#0d1a44]">

      {/* HERO SECTION (High Impact Promotion) */}
      <section className="relative min-h-dvh flex items-center justify-center text-center text-[#efd1a1] overflow-hidden">
        <div className="absolute h-full w-full bg-black/30 z-10" />

        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0 z-0"
        >
          {/* Make sure you have this image in your public folder */}
          <Image src="/afasfasf.jpeg" alt="Hero Background" fill priority className="object-cover object-center contrast-140" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative z-20 max-w-6xl px-6"
        >
          <div className="flex flex-col items-center mb-6">
            {/* Make sure you have this logo in your public folder */}
            <img src="/AAAA.png" alt="Zenora Logo" className="h-50 w-50 filter brightness-110 contrast-125 drop-shadow-white drop-shadow-[0_0_15px_#c59761,0_0_30px_#efd1a1]" />
            <h1 className="text-7xl md:text-8xl font-serif font-extrabold tracking-widest text-white drop-shadow-white drop-shadow-[0_0_20px_#c59761]">
              ZENORA
            </h1>
          </div>
          <p className="mt-4 text-2xl text-yellow-300/90 font-light italic">
            Where cleanliness meets calm luxury
          </p>
          <div className="mt-12 flex justify-center gap-6">
            <button className="flex items-center gap-3 cursor-pointer rounded-full bg-[#FFF] px-10 py-4 text-lg font-bold text-[#0d1a44] shadow-xl hover:scale-105 hover:bg-[#fcf191] transition duration-300 transform">
              Book Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="rounded-full text-white cursor-pointer border-2 border-[#FFF]/60 px-10 py-4 text-lg hover:bg-[#fcf191]/20 hover:scale-105 transition duration-300">
              Explore Services
            </button>
          </div>
        </motion.div>
      </section>

      {/* FEATURE IMAGES SECTION (Enhanced Visual Appeal) */}
      <section className="min-h-dvh py-32 px-6 md:px-10 lg:px-20 bg-[#0d1a44] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-4xl font-extrabold text-[#FFF] font-serif"
        >
          A Higher Standard of Clean
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-3 px-20">
          {cardTitles.map((title, i) => (
            <motion.div
              key={title}
              whileHover={{ y: -15, scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer aspect-square drop-shadow-[0_0_10px]"
            >
              <Image
                src={cardImages[i]}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-1">{title}</h3>
                <p className="text-lg opacity-90 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-[#fcf191] fill-[#fcf191]" /> Rated 5.0
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: VALUE PROPOSITION & VISUALS */}
      <section className="mx-auto max-w-7xl px-6 py-40">
        <div className="grid gap-16 md:grid-cols-2 items-center">

          {/* LEFT SIDE CONTENT (with animation) */}
          <motion.div
            className="md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#c59761] font-semibold uppercase tracking-wider mb-3 block">Our Commitment</span>
            <h2 className="text-5xl font-extrabold mb-6 text-[#0d1a44]">
              Precision Cleaning, <br /> Every Single Time
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our professional team uses premium, eco-friendly products and meticulous attention to detail to ensure your space is not just clean, but deeply refreshed. We go above and beyond surface-level dirt to create a truly healthy environment.
            </p>
            <ul className="list-none space-y-4 text-gray-700 mb-8">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-[#0d1a44]" /> Vetted and trained professionals</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-[#0d1a44]" /> Eco-friendly and non-toxic solutions</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-[#0d1a44]" /> 100% satisfaction guarantee</li>
            </ul>
            <button className="mt-4 rounded-full bg-[#0d1a44] px-8 py-4 font-semibold text-[#efd1a1] hover:bg-[#1a3455] transition shadow-lg flex items-center gap-2">
              Learn About Our Process <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* RIGHT SIDE IMAGES (Dynamic) */}
          <div>
              <Image
                  src="/livingroom.gif" // Reusing the hero image as a placeholder for the visual side
                  alt="A clean, minimalist home interior"
                  width={600}
                  height={800}
                  className="rounded-3xl shadow-2xl object-cover h-125"
              />
          </div>
        </div>
      </section>


      {/* PROCESS SECTION (Clear Steps) - UPDATED TO CARD STEPS */}
      <section className="py-40 bg-[#0d1a44] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center text-4xl font-extrabold text-[#FFF] font-serif"
          >
            Your Path to Zen in 3 Simple Steps
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {steps.map((step, index) => {
                const Icon = step.icon; // Get the corresponding Lucide React icon

                return (
                  <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative flex flex-col items-center p-8 bg-[#1a3455] rounded-xl shadow-lg transform transition duration-500 hover:scale-105 border border-[#efd1a1]/30"
                    >
                        {/* Step Number Badge */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-full bg-[#efd1a1] text-[#0d1a44] font-bold text-xl shadow-xl">
                            {index + 1}
                        </div>

                        {/* Icon */}
                        <div className="mt-8 mb-4">
                            <Icon className="w-16 h-16 text-[#efd1a1]" />
                        </div>

                        <h3 className="text-2xl font-semibold mb-3 text-center">{step.title}</h3>
                        <p className="text-gray-300 text-center">{step.desc}</p>
                    </motion.div>
                );
            })}
          </div>
        </div>
      </section>


      {/* STATS SECTION (Trust Building) */}
      <section className="py-24 bg-[#e2d8d1]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center p-4"
                >
                  <Icon className="w-10 h-10 mb-3 text-[#c59761]" />
                  <p className="text-5xl font-extrabold text-[#0d1a44]">{stat.value}</p>
                  <p className="text-gray-600 mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* TESTIMONIALS SECTION (Social Proof) */}
      <section className="py-40 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-20 text-center text-4xl font-extrabold text-[#0d1a44] font-serif">
            Voices of Tranquility
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-[#f4d9a5] p-10 rounded-xl shadow-lg border-t-4 border-[#c59761] flex flex-col h-full"
              >
                <p className="text-xl italic text-gray-700 mb-6 grow">
                  "{testimonial.quote}"
                </p>
                <p className="font-bold text-[#0d1a44]">{testimonial.name}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-7 h-7 text-[#ffe600] fill-[#ffff00]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FOOTER (Contact Info & CTA) */}
      <footer className="bg-[#0d1a44] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-2xl font-bold text-[#efd1a1] mb-4 font-serif">Zenora</h4>
            <p className="text-gray-400">
              Creating tranquil spaces across Canberra City since 2015.
              Experience the luxury of clean today.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b border-[#1a3455] pb-2">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Post-Construction</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b border-[#1a3455] pb-2">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Our Process</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b border-[#1a3455] pb-2">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center"><MapPin className="w-5 h-5 mr-3 text-[#c59761]" /> Canberra City, AU </li>
              <li className="flex items-center"><Clock className="w-5 h-5 mr-3 text-[#c59761]" /> Mon-Sat: 8am - 5pm</li>
              <li className="mt-4">
                <button className="rounded-full bg-[#efd1a1] px-6 py-3 font-semibold text-[#0d1a44] hover:bg-[#fcf191] transition shadow-lg">
                  Book A Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 border-t border-[#1a3455] pt-10 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Zenora Cleaning Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
