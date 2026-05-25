import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-slate-950
      "
    >
      {/* Background Gradient & Premium Grid Pattern Layer */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-slate-950
          via-slate-900/40
          to-slate-950
        "
      />
      <div 
        className="
          absolute 
          inset-0 
          bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] 
          bg-[size:4rem_4rem] 
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]
          opacity-70
        " 
      />

      {/* Force GPU Floating Blobs via Framer Motion to bypass CSS bundle bugs */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[600px]
          h-[600px]
          bg-cyan-500/10
          rounded-full
          blur-[130px]
          -top-40
          -left-40
        "
      />
      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[500px]
          h-[500px]
          bg-indigo-500/10
          rounded-full
          blur-[120px]
          -bottom-40
          -right-40
        "
      />

      {/* Main Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative
          z-10
          text-center
          px-4
          max-w-5xl
          mx-auto
          pt-20
        "
      >
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-sm shadow-cyan-950/50">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          Next-Gen AI Analysis
        </div>

        {/* Cinematic Headline */}
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-black
            tracking-tight
            text-slate-100
            leading-[1.1]
          "
        >
          AI-Powered <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            MITS Counselling
          </span>
          <br />
          Prediction System
        </h1>

        {/* Description Subtext */}
        <p
          className="
            mt-6
            text-base
            sm:text-lg
            md:text-xl
            text-slate-400
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          Predict your branch allotment chances with precision using advanced 
          statistical intelligence and deep predictive models.
        </p>

        {/* Interactive CTA Actions Container */}
        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
          "
        >
          {/* PRIMARY BUTTON WITH AN INLINE CSS SHIMMER INTERACTION */}
          <button
            onClick={() => navigate("/predict")}
            className="
              group/btn
              relative
              overflow-hidden
              w-full
              sm:w-auto
              px-8
              py-4
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-teal-400
              hover:from-cyan-300
              hover:to-teal-300
              text-slate-950
              font-bold
              text-sm
              tracking-wide
              transition-all
              duration-200
              transform
              hover:-translate-y-0.5
              shadow-lg
              shadow-cyan-500/20
              hover:shadow-cyan-500/35
            "
          >
            {/* Inline arbitrary animation mapping to guarantee runtime execution */}
            <span className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite_linear] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
            <span className="relative z-10">Predict My Branch</span>
          </button>

          <button
            onClick={() => navigate("/choice-filling")}
            className="
              w-full
              sm:w-auto
              px-8
              py-4
              rounded-xl
              border
              border-slate-800
              bg-slate-900/40
              backdrop-blur-sm
              text-slate-300
              hover:text-cyan-400
              hover:border-cyan-500/30
              hover:bg-slate-900/80
              font-semibold
              text-sm
              tracking-wide
              transition-all
              duration-200
              transform
              hover:-translate-y-0.5
            "
          >
            Smart Choice Filling
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;