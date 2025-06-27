const categories = [
  { title: "Jackets", color: "bg-purple-600" },
  { title: "Shoes", color: "bg-pink-500" },
  { title: "Accessories", color: "bg-yellow-400 text-black" },
  { title: "Hoodies", color: "bg-blue-500" },
  { title: "Techwear", color: "bg-cyan-500" },
  { title: "Futuristic", color: "bg-rose-500" },
  { title: "Limited Edition", color: "bg-lime-500 text-black" },
];

const CategoryCarousel = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black transition-colors">
      <h2 className="text-3xl font-bold text-center mb-10">🌀 Browse by Category</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6 justify-center w-max mx-auto px-2 pb-2 snap-x snap-mandatory scroll-smooth">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`min-w-[160px] snap-start shrink-0 rounded-xl ${cat.color} text-white text-center px-6 py-4 font-semibold hover:scale-105 transition`}
            >
              {cat.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
