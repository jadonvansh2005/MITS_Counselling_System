const stats = [
  {
    title: "Historical Data",
    value: "2014 - 2025"
  },
  {
    title: "Prediction Engine",
    value: "AI + ML"
  },
  {
    title: "Branches",
    value: "20+"
  },
  {
    title: "Prediction Accuracy",
    value: "95%+"
  }
];

const StatsSection = () => {
  return (
    <section
      className="
        py-24
        bg-slate-950
        px-6
        relative
        z-10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              relative
              group
              bg-slate-900/30
              border
              border-slate-900
              hover:border-cyan-500/30
              rounded-2xl
              p-8
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.15)]
              overflow-hidden
            ) "
          >
            {/* Soft internal card hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <h2
              className="
                text-3xl
                md:text-4xl
                font-black
                tracking-tight
                bg-gradient-to-r
                from-slate-100
                via-slate-200
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              {item.value}
            </h2>

            <p
              className="
                mt-2
                text-sm
                font-semibold
                tracking-wider
                text-slate-500
                uppercase
              "
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;