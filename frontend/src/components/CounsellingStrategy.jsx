const CounsellingStrategy = ({ results }) => {
  const dream = results.filter(
    item => item.FinalProbability < 50
  );

  const reach = results.filter(
    item =>
      item.FinalProbability >= 50 &&
      item.FinalProbability < 75
  );

  const safe = results.filter(
    item => item.FinalProbability >= 75
  );

  const renderBranches = (branches, color) => (
    <div
      className="
        flex
        flex-wrap
        gap-2
        mt-5
      "
    >
      {branches.map((item, index) => (
        <div
          key={index}
          className={`
            px-3.5
            py-1.5
            rounded-xl
            text-xs
            font-bold
            tracking-wide
            text-slate-100
            shadow-md
            backdrop-blur-md
            border
            border-white/5
            transition-all
            duration-200
            hover:brightness-110
            ${color}
          `}
        >
          {item.Branch}
        </div>
      ))}
    </div>
  );

  return (
    <section className="mt-24 relative z-10 px-1">
      {/* Structural Header Section */}
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
          AI Counselling Strategy
        </h1>
        <p className="text-xs md:text-sm text-slate-500 mt-1">
          Automated decision matrix splitting target selections into precise tactical tiers.
        </p>
      </div>

      {/* Main Grid Wrapper */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {/* DREAM CARD */}
        <div
          className="
            relative
            bg-slate-900/20
            border
            border-slate-900
            hover:border-rose-500/20
            rounded-2xl
            p-6
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_12px_30px_-15px_rgba(244,63,94,0.1)]
          "
        >
          <div className="flex items-center justify-between">
            <h2
              className="
                text-lg
                font-extrabold
                tracking-tight
                text-rose-400
              "
            >
              Dream Branches
            </h2>
            <span className="text-[10px] uppercase font-bold tracking-widest text-rose-500/80 px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">
              Tier 1
            </span>
          </div>

          <p
            className="
              text-xs
              text-slate-500
              mt-2
              leading-relaxed
            "
          >
            High competition variants. Place these right at the top tier of your priority list.
          </p>

          {renderBranches(
            dream,
            "bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-300 border-rose-500/30"
          )}
        </div>

        {/* REACH CARD */}
        <div
          className="
            relative
            bg-slate-900/20
            border
            border-slate-900
            hover:border-amber-500/20
            rounded-2xl
            p-6
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_12px_30px_-15px_rgba(245,158,11,0.1)]
          "
        >
          <div className="flex items-center justify-between">
            <h2
              className="
                text-lg
                font-extrabold
                tracking-tight
                text-amber-400
              "
            >
              Reach Branches
            </h2>
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-500/80 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
              Tier 2
            </span>
          </div>

          <p
            className="
              text-xs
              text-slate-500
              mt-2
              leading-relaxed
            "
          >
            Moderate probability. Excellent optimization balance points for safe targeting.
          </p>

          {renderBranches(
            reach,
            "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30"
          )}
        </div>

        {/* SAFE CARD */}
        <div
          className="
            relative
            bg-slate-900/20
            border
            border-slate-900
            hover:border-emerald-500/20
            rounded-2xl
            p-6
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_12px_30px_-15px_rgba(16,185,129,0.1)]
          "
        >
          <div className="flex items-center justify-between">
            <h2
              className="
                text-lg
                font-extrabold
                tracking-tight
                text-emerald-400
              "
            >
              Safe Branches
            </h2>
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-500/80 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              Tier 3
            </span>
          </div>

          <p
            className="
              text-xs
              text-slate-500
              mt-2
              leading-relaxed
            "
          >
            Highly achievable pathways. Must-have fallback nodes to lock in confirmation.
          </p>

          {renderBranches(
            safe,
            "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30"
          )}
        </div>
      </div>
    </section>
  );
};

export default CounsellingStrategy;