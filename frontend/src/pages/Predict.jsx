import { useNavigate } from "react-router-dom";
import { useState } from "react";

import api from "../services/api";

import {
  categoryOptions,
  domicileOptions,
  roundOptions
} from "../constants/dropdownOptions";

const Predict = () => {
  const [formData, setFormData] = useState({
    rank: "",
    category: "UR/X/OP",
    round: "R1",
    domicile: "Y"
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePredict = async () => {
    try {
      setLoading(true);
      const response = await api.post(
        "/api/predict",
        {
          rank: Number(formData.rank),
          category: formData.category,
          round: formData.round,
          domicile: formData.domicile
        }
      );

      const filtered = response.data.predictions.filter(
        (item) =>
          item.Branch !== "AUTO" &&
          item.Branch !== "BT"
      );

      setResults(filtered);
    } catch (error) {
      console.log(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
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
        
        {/* Main Page Title Header */}
        <div className="text-center mb-12">
          <h1
            className="
              text-3xl
              sm:text-5xl
              font-black
              tracking-tight
              text-slate-100
            "
          >
            MITS AI Counselling
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
            Predict your branch allotment using AI + ML Data Frameworks
          </p>
        </div>

        {/* Configuration Setup Control Form Box */}
        <div
          className="
            mt-8
            bg-slate-900/20
            border
            border-slate-900
            rounded-2xl
            p-6
            sm:p-8
            shadow-xl
            backdrop-blur-md
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >
            {/* JEE RANK INPUT CONTROLLER */}
            <div className="flex flex-col">
              <label
                className="
                  text-slate-400
                  text-xs
                  font-semibold
                  tracking-wider
                  uppercase
                "
              >
                JEE Rank
              </label>
              <input
                type="number"
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                placeholder="Enter Rank"
                className="
                  w-full
                  mt-2.5
                  bg-slate-950/60
                  border
                  border-slate-800
                  rounded-xl
                  px-4
                  py-3.5
                  text-sm
                  text-slate-200
                  placeholder-slate-600
                  outline-none
                  transition-all
                  duration-200
                  focus:border-cyan-500/40
                  focus:bg-slate-950
                  focus:shadow-[0_0_15px_-3px_rgba(34,211,238,0.1)]
                "
              />
            </div>

            {/* CATEGORY OPTION SELECTION */}
            <div className="flex flex-col">
              <label
                className="
                  text-slate-400
                  text-xs
                  font-semibold
                  tracking-wider
                  uppercase
                "
              >
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="
                  w-full
                  mt-2.5
                  bg-slate-950/60
                  border
                  border-slate-800
                  rounded-xl
                  px-4
                  py-3.5
                  text-sm
                  text-slate-200
                  outline-none
                  cursor-pointer
                  transition-all
                  duration-200
                  focus:border-cyan-500/40
                  focus:bg-slate-950
                "
              >
                {categoryOptions.map((item) => (
                  <option key={item} value={item} className="bg-slate-950 text-slate-300">
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* ROUND SELECT CONTROLLER */}
            <div className="flex flex-col">
              <label
                className="
                  text-slate-400
                  text-xs
                  font-semibold
                  tracking-wider
                  uppercase
                "
              >
                Round
              </label>
              <select
                name="round"
                value={formData.round}
                onChange={handleChange}
                className="
                  w-full
                  mt-2.5
                  bg-slate-950/60
                  border
                  border-slate-800
                  rounded-xl
                  px-4
                  py-3.5
                  text-sm
                  text-slate-200
                  outline-none
                  cursor-pointer
                  transition-all
                  duration-200
                  focus:border-cyan-500/40
                  focus:bg-slate-950
                "
              >
                {roundOptions.map((item) => (
                  <option key={item} value={item} className="bg-slate-950 text-slate-300">
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* DOMICILE STATUS SELECTION */}
            <div className="flex flex-col">
              <label
                className="
                  text-slate-400
                  text-xs
                  font-semibold
                  tracking-wider
                  uppercase
                "
              >
                Domicile
              </label>
              <select
                name="domicile"
                value={formData.domicile}
                onChange={handleChange}
                className="
                  w-full
                  mt-2.5
                  bg-slate-950/60
                  border
                  border-slate-800
                  rounded-xl
                  px-4
                  py-3.5
                  text-sm
                  text-slate-200
                  outline-none
                  cursor-pointer
                  transition-all
                  duration-200
                  focus:border-cyan-500/40
                  focus:bg-slate-950
                "
              >
                {domicileOptions.map((item) => (
                  <option key={item} value={item} className="bg-slate-950 text-slate-300">
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* ACTION INTERACTION BUTTON SUBMITTER */}
          <div className="mt-8">
            <button
              onClick={handlePredict}
              disabled={loading}
              className="
                w-full
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
                disabled:opacity-50
                disabled:cursor-not-allowed
                disabled:transform-none
                shadow-lg
                shadow-cyan-500/15
                hover:shadow-cyan-500/25
              "
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Computing Odds...</span>
                </div>
              ) : (
                "Predict Branch"
              )}
            </button>
          </div>
        </div>

        {/* CORE CONDITIONAL RESULTS LAYOUT AREA */}
        {results.length > 0 && (
          <div className="mt-20 border-t border-slate-900 pt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-100">
                  Prediction Results
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Individual matrix outcomes matching your specific configuration keys.
                </p>
              </div>
              
              <div className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400">
                {results.length} Scored
              </div>
            </div>

            {/* DYNAMIC METRIC RESULT CARDS CONTAINER */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
            >
              {results.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    relative
                    bg-slate-900/20
                    border
                    border-slate-900
                    hover:border-cyan-500/20
                    rounded-2xl
                    p-6
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.15)]
                  "
                >
                  <div className="flex justify-between items-start gap-4">
                    <h2 className="text-lg md:text-xl font-extrabold tracking-tight text-slate-100 leading-snug">
                      {item.Branch}
                    </h2>
                    <span className="shrink-0 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase border bg-cyan-500/10 border-cyan-500/20 text-cyan-400">
                      {item.Status}
                    </span>
                  </div>

                  {/* PROBABILITY METRIC SLIDER TRACK */}
                  <div className="mt-6">
                    <div className="flex justify-between items-baseline text-xs mb-2">
                      <span className="text-slate-500 font-medium tracking-wide uppercase">
                        Final Probability
                      </span>
                      <span className="text-sm font-bold text-slate-200 tracking-tight">
                        {item.FinalProbability}%
                      </span>
                    </div>

                    <div className="h-1.5 w-full bg-slate-950 border border-slate-900 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${item.FinalProbability}%` }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-400 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* DUAL SLOT ANALYTICS GRID INFO */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="bg-slate-950/40 border border-slate-900/60 p-3.5 rounded-xl">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                        Future Closing Rank
                      </p>
                      <h3 className="text-slate-200 text-base font-black tracking-tight mt-1">
                        {item.FutureClosingRank.toLocaleString('en-IN')}
                      </h3>
                    </div>

                    <div className="bg-slate-950/40 border border-slate-900/60 p-3.5 rounded-xl">
                      <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                        Rank Gap
                      </p>
                      <h3 className="text-slate-200 text-base font-black tracking-tight mt-1">
                        {item.RankGap > 0 ? `+${item.RankGap.toLocaleString('en-IN')}` : item.RankGap.toLocaleString('en-IN')}
                      </h3>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* ACTION FOOTER GENERATION BUTTON LINK */}
            <div className="mt-12">
              <button
                onClick={() =>
                  navigate(
                    "/choice-filling",
                    {
                      state: { results }
                    }
                  )
                }
                className="
                  w-full
                  px-8
                  py-4.5
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
                Generate Smart Choice Filling Sequence
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Predict;