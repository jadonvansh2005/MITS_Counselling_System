import { useLocation } from "react-router-dom";

const competitionOrder = {
  "CSE": 100,
  "AIML": 99,
  "AIAIDS": 98,
  "AI": 97,
  "IT": 96,
  "CSD": 95,
  "CST": 94,
  "CSBS": 93,
  "AIR": 92,
  "ITAIAR": 91,
  "ITIOT": 90,
  "MAC": 89,
  "ECE": 88,
  "EACE": 87,
  "EEIOT": 86,
  "EE": 85,
  "ET": 84,
  "MECH": 75,
  "CE": 74,
  "CHEM": 73,
};

const ChoiceFilling = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  // -----------------------------------------
  // SORTING (Maintained Exactly As Provided)
  // -----------------------------------------
  const sortedResults = [...results].sort((a, b) => {
    const compA = competitionOrder[a.Branch] || 0;
    const compB = competitionOrder[b.Branch] || 0;
    return compB - compA;
  });

  // -----------------------------------------
  // CLASSIFICATION (Logic Maintained - Tailwind Colors Polished)
  // -----------------------------------------
  const getTag = (prob) => {
    if (prob >= 85) {
      return {
        label: "Very Safe",
        color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      };
    }
    if (prob >= 70) {
      return {
        label: "Safe",
        color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
      };
    }
    if (prob >= 50) {
      return {
        label: "Reach",
        color: "bg-amber-500/10 text-amber-400 border-amber-500/20"
      };
    }
    return {
      label: "Dream",
      color: "bg-rose-500/10 text-rose-400 border-rose-500/20"
    };
  };

  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        text-slate-100
        px-4
        sm:px-6
        py-28
        relative
        z-10
      "
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Main Section Header */}
        <div className="text-center mb-10">
          <h1
            className="
              text-3xl
              sm:text-5xl
              font-black
              tracking-tight
              text-slate-100
            "
          >
            Smart Choice Filling
          </h1>
          <p
            className="
              text-xs
              sm:text-sm
              text-slate-500
              mt-3
              tracking-wide
              font-medium
              uppercase
            "
          >
            AI Generated Counselling Priority Strategy
          </p>
        </div>

        {/* Polished Tactical Recommendation Alert Card */}
        <div
          className="
            mt-8
            bg-amber-950/10
            border
            border-amber-500/20
            rounded-2xl
            p-5
            sm:p-6
            backdrop-blur-md
            shadow-lg
            shadow-amber-950/20
          "
        >
          <div className="flex items-center gap-2.5">
            {/* Soft pulsing warning indicator tag */}
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <h2
              className="
                text-amber-400
                text-base
                font-bold
                tracking-tight
              "
            >
              Counselling Recommendation
            </h2>
          </div>
          <p
            className="
              text-slate-400
              mt-2.5
              text-xs
              sm:text-sm
              leading-relaxed
            "
          >
            Always keep high-demand branches at the top. Do not skip realistic core branches like 
            <span className="text-slate-200 font-semibold"> EE, ET, MECH, and CE</span>. These branches 
            substantially improve allotment probability while ensuring solid placement and core GATE engineering pathways.
          </p>
        </div>

        {/* Modern Enterprise Data Table Module */}
        <div
          className="
            mt-12
            bg-slate-900/20
            border
            border-slate-900
            rounded-2xl
            overflow-hidden
            shadow-xl
          "
        >
          {/* DESKTOP MATRIX HEADER TAB (Hidden on Small Screens) */}
          <div
            className="
              hidden
              sm:grid
              grid-cols-4
              bg-slate-900/60
              border-b
              border-slate-800/60
              p-4.5
              px-6
              text-xs
              font-bold
              tracking-wider
              text-slate-400
              uppercase
            "
          >
            <div>Choice Order</div>
            <div>Branch</div>
            <div>Probability</div>
            <div>Strategy</div>
          </div>

          {/* DYNAMIC PRIORITY CARD ROWS */}
          <div className="divide-y divide-slate-900">
            {sortedResults.length > 0 ? (
              sortedResults.map((item, index) => {
                const tag = getTag(item.FinalProbability);

                return (
                  <div
                    key={index}
                    className="
                      grid
                      grid-cols-1
                      sm:grid-cols-4
                      items-center
                      p-5
                      sm:p-4.5
                      px-6
                      gap-2
                      sm:gap-0
                      bg-transparent
                      hover:bg-slate-900/30
                      transition-all
                      duration-200
                    "
                  >
                    {/* CHOICE ORDER IDENTIFIER */}
                    <div className="flex sm:block items-center justify-between">
                      <span className="sm:hidden text-[10px] font-bold tracking-wider uppercase text-slate-500">
                        Choice Order
                      </span>
                      <div className="font-black text-sm text-cyan-400 tracking-tight">
                        #{String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* BRANCH ALIAS NODES */}
                    <div className="flex sm:block items-center justify-between">
                      <span className="sm:hidden text-[10px] font-bold tracking-wider uppercase text-slate-500">
                        Branch
                      </span>
                      <div className="font-extrabold text-slate-200 text-sm tracking-tight sm:text-base">
                        {item.Branch}
                      </div>
                    </div>

                    {/* PROBABILITY METRIC MATRIX ACCENTS */}
                    <div className="flex sm:block items-center justify-between">
                      <span className="sm:hidden text-[10px] font-bold tracking-wider uppercase text-slate-500">
                        Probability
                      </span>
                      <div className="text-sm font-bold text-slate-300 tracking-tight">
                        {item.FinalProbability}%
                      </div>
                    </div>

                    {/* TACTICAL ASSIGNMENT TAGS */}
                    <div className="flex sm:block items-center justify-between">
                      <span className="sm:hidden text-[10px] font-bold tracking-wider uppercase text-slate-500">
                        Strategy
                      </span>
                      <div>
                        <span
                          className={`
                            inline-block
                            px-2.5
                            py-1
                            rounded-md
                            text-[10px]
                            font-bold
                            tracking-widest
                            uppercase
                            border
                            ${tag.color}
                          `}
                        >
                          {tag.label}
                        </span>
                      </div>
                    </div>

                  </div>
                );
              })
            ) : (
              /* EMPTY FALLBACK CONTAINER STATE */
              <div className="p-12 text-center text-sm text-slate-600 font-medium">
                No prediction metrics discovered. Run prediction simulation to generate priority sequence order.
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChoiceFilling;