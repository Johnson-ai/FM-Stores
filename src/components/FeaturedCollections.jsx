import { motion } from "framer-motion";

const collections = [
  {
    title: "Cyberpunk Essentials",
    description: "Gear up with neon-inspired, tech-enhanced outfits.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Glitchcore Streetwear",
    description: "Defy norms with distorted aesthetics and futuristic fits.",
    color: "from-yellow-400 to-red-500",
  },
  {
    title: "Neo Tokyo Drop",
    description: "The latest looks straight from 2099 Tokyo.",
    color: "from-blue-500 to-cyan-400",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black transition-colors">
      <h2 className="text-3xl font-bold text-center mb-12">⚡ Featured Collections</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {collections.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-xl text-white hover:scale-105 hover:shadow-2xl transition-all duration-300`}
          >
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-sm text-white/90">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
