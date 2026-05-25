import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        bg-slate-950/70
        border-b
        border-slate-800/60
        shadow-sm
        shadow-slate-950/20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-16
          flex
          items-center
          justify-between
        "
      >
        {/* Brand Logo with Premium Glow Accent */}
        <h1
          className="
            text-xl
            font-bold
            tracking-tight
            bg-gradient-to-r
            from-cyan-400
            via-teal-400
            to-indigo-400
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]
          "
        >
          MITS Predictor
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/"
            className="
              px-4
              py-2
              text-sm
              font-medium
              text-slate-300
              hover:text-cyan-400
              rounded-lg
              hover:bg-slate-900/50
              transition-all
              duration-200
            "
          >
            Home
          </Link>

          <Link
            to="/predict"
            className="
              px-4
              py-2
              text-sm
              font-medium
              text-slate-300
              hover:text-cyan-400
              rounded-lg
              hover:bg-slate-900/50
              transition-all
              duration-200
            "
          >
            Predict
          </Link>

          <Link
            to="/choice-filling"
            className="
              ml-2
              px-4
              py-2
              text-sm
              font-medium
              text-slate-950
              bg-gradient-to-r
              from-cyan-400
              to-teal-400
              hover:from-cyan-300
              hover:to-teal-300
              rounded-lg
              shadow-lg
              shadow-cyan-500/10
              hover:shadow-cyan-500/20
              transition-all
              duration-200
            "
          >
            Choice Filling
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;