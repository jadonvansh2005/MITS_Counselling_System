import { motion } from "framer-motion";

const getColor = (status) => {
  if (status === "Very Safe") {
    return "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30 dynamic-bar:bg-gradient-to-r dynamic-bar:from-emerald-500 dynamic-bar:to-teal-400";
  }
  if (status === "Safe") {
    return "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 dynamic-bar:bg-gradient-to-r dynamic-bar:from-cyan-500 dynamic-bar:to-blue-400";
  }
  if (status === "Moderate") {
    return "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30 dynamic-bar:bg-gradient-to-r dynamic-bar:from-amber-400 dynamic-bar:to-orange-500";
  }
  return "from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30 dynamic-bar:bg-gradient-to-r dynamic-bar:from-rose-500 dynamic-bar:to-pink-500";
};

// Subtle background hover glow utility based on status
const getHoverGlow = (status) => {
  if (status === "Very Safe") return "group-hover:border-emerald-500/20 group-hover:shadow-[0_10px_30px_-15px_rgba(16,185,129,0.12)]";
  if (status === "Safe") return "group-hover:border-cyan-500/20 group-hover:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.12)]";
  if (status === "Moderate") return "group-hover:border-amber-500/20 group-hover:shadow-[0_10px_30px_-15px_rgba(245,158,11,0.12)]";
  return "group-hover:border-rose-500/20 group-hover:shadow-[0_10px_30px_-15px_rgba(244,63,94,0.12)]";
};

// Pure extraction helper for raw CSS classes from string template configuration
const extractBarColor = (styleString) => {
  const match = styleString.match(/dynamic-bar:(bg-\S+|from-\S+|to-\S+)/g);
  return match ? match.map(c => c.replace("dynamic-bar:", "")).join(" ") : "bg-cyan-400";
};

const extractBadgeColor = (styleString) => {
  return styleString.split(" ").filter(c => !c.includes("dynamic-bar:")).join(" ");
};

const ResultCard = ({ item, index }) => {
  const styleConfig = getColor(item.Status);
  const badgeClasses = extractBadgeColor(styleConfig);
  const barClasses = extractBarColor(styleConfig);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
      className={`
        group
        relative
        bg-slate-900/20
        border
        border-slate-900
        rounded-2xl
        p-6
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        ${getHoverGlow(item.Status)}
      `}
    >
      {/* Upper Information Section */}
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
          mb-5
        "
      >
        <h2
          className="
            text-lg
            md:text-xl
            font-extrabold
            tracking-tight
            text-slate-100
            leading-snug
          "
        >
          {item.Branch}
        </h2>

        {/* Minimalized Micro Status Badge */}
        <span
          className={`
            shrink-0
            px-2.5
            py-1
            rounded-md
            text-[10px]
            font-bold
            tracking-widest
            uppercase
            border
            bg-gradient-to-r
            ${badgeClasses}
          `}
        >
          {item.Status}
        </span>
      </div>

      {/* Progress Metric Matrix Block */}
      <div className="space-y-5">
        <div>
          <div
            className="
              flex
              justify-between
              items-baseline
              text-xs
              mb-2
            "
          >
            <span className="text-slate-500 font-medium tracking-wide uppercase">
              Final Probability
            </span>
            <span className="text-sm font-bold text-slate-200 tracking-tight">
              {item.FinalProbability}%
            </span>
          </div>

          {/* Ultra-Sleek Probability Slider Container */}
          <div
            className="
              h-1.5
              w-full
              bg-slate-950
              border
              border-slate-900
              rounded-full
              overflow-hidden
            "
          >
            <div
              style={{ width: `${item.FinalProbability}%` }}
              className={`
                h-full
                rounded-full
                transition-all
                duration-500
                ${barClasses}
              `}
            />
          </div>
        </div>

        {/* Dual Metric Analytics Data Grid Section */}
        <div
          className="
            grid
            grid-cols-2
            gap-3
          "
        >
          <div
            className="
              bg-slate-950/40
              border
              border-slate-900/60
              p-3.5
              rounded-xl
            "
          >
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
              Future Closing Rank
            </p>
            <h3
              className="
                text-slate-200
                text-base
                font-black
                tracking-tight
                mt-1
              "
            >
              {item.FutureClosingRank.toLocaleString('en-IN')}
            </h3>
          </div>

          <div
            className="
              bg-slate-950/40
              border
              border-slate-900/60
              p-3.5
              rounded-xl
            "
          >
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
              Rank Gap
            </p>
            <h3
              className="
                text-slate-200
                text-base
                font-black
                tracking-tight
                mt-1
              "
            >
              {item.RankGap > 0 ? `+${item.RankGap.toLocaleString('en-IN')}` : item.RankGap.toLocaleString('en-IN')}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;