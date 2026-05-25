const Results = () => {
  return (
    <div 
      className="
        relative
        min-h-screen 
        bg-slate-950 
        text-slate-100
        antialiased
        px-4
        sm:px-6
        py-28
        overflow-hidden
      "
    >
      {/* Background Soft Lighting Grid Pattern */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header Row */}
        <div className="mb-10 border-b border-slate-900 pb-5">
          <h1 
            className="
              text-3xl 
              md:text-4xl 
              font-black 
              tracking-tight 
              text-slate-100
            "
          >
            Prediction Results
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Review detailed statistical breakdowns and optimization strategies for your profile choices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;