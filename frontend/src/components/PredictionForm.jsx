import { useState } from "react";
import axios from "axios";

import BranchTable from "./BranchTable";
import CounsellingStrategy from "./CounsellingStrategy";

const categories = [

  "EWS",
  "FW/OP",
  "JKM",

  "OBC/X/OP",
  "OBC/X/F",
  "OBC/S/OP",

  "SC/X/F",
  "SC/X/OP",

  "ST/X/F",
  "ST/X/OP",

  "UR/D/OP",
  "UR/FF/OP",
  "UR/S/F",
  "UR/S/OP",
  "UR/X/F",
  "UR/X/OP"
];

const PredictionForm = () => {

  const [formData, setFormData] = useState({

    rank: "",

    category: "UR/X/OP",

    round: "R1",

    domicile: "Y"
  });

  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(

        "http://127.0.0.1:8000/api/predict",

        {

          rank: Number(formData.rank),

          category: formData.category,

          round: formData.round,

          domicile: formData.domicile
        }
      );

      setResults(response.data.predictions);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <section
      id="predict"
      className="
      min-h-screen
      px-6
      py-24
      bg-[#020617]
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-16">

          <h1
            className="
            text-5xl
            md:text-6xl
            font-black
            text-white
            "
          >
            Predict Your
            <span
              className="
              text-cyan-400
              "
            >
              {" "}Branch
            </span>
          </h1>

          <p
            className="
            text-slate-400
            mt-6
            text-lg
            "
          >
            AI Powered MITS Counselling Prediction
          </p>

        </div>

        {/* FORM */}

        <form

          onSubmit={handleSubmit}

          className="
          grid
          lg:grid-cols-4
          gap-6

          bg-white/5
          border
          border-white/10

          backdrop-blur-xl

          rounded-3xl

          p-10
          "
        >

          {/* RANK */}

          <div>

            <label
              className="
              text-slate-300
              text-sm
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
              mt-3
              bg-black/30
              border
              border-white/10
              rounded-xl
              px-4
              py-4
              text-white
              outline-none
              focus:border-cyan-400
              "
            />

          </div>

          {/* CATEGORY */}

          <div>

            <label
              className="
              text-slate-300
              text-sm
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
              mt-3
              bg-black/30
              border
              border-white/10
              rounded-xl
              px-4
              py-4
              text-white
              outline-none
              focus:border-cyan-400
              "
            >

              {categories.map((cat) => (

                <option
                  key={cat}
                  value={cat}
                >
                  {cat}
                </option>
              ))}

            </select>

          </div>

          {/* ROUND */}

          <div>

            <label
              className="
              text-slate-300
              text-sm
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
              mt-3
              bg-black/30
              border
              border-white/10
              rounded-xl
              px-4
              py-4
              text-white
              outline-none
              focus:border-cyan-400
              "
            >

              <option value="R1">
                Round 1
              </option>

              <option value="R2">
                Round 2
              </option>

            </select>

          </div>

          {/* DOMICILE */}

          <div>

            <label
              className="
              text-slate-300
              text-sm
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
              mt-3
              bg-black/30
              border
              border-white/10
              rounded-xl
              px-4
              py-4
              text-white
              outline-none
              focus:border-cyan-400
              "
            >

              <option value="Y">
                MP Domicile
              </option>

              <option value="N">
                Other State
              </option>

            </select>

          </div>

          {/* BUTTON */}

          <div
            className="
            lg:col-span-4
            flex
            justify-center
            mt-6
            "
          >

            <button

              type="submit"

              className="
              px-10
              py-4
              rounded-2xl

              bg-cyan-400
              hover:bg-cyan-300

              text-black
              font-bold
              text-lg

              transition-all
              duration-300

              shadow-[0_0_40px_rgba(34,211,238,0.5)]
              "
            >

              {
                loading

                ? "Predicting..."

                : "Predict My Branch"
              }

            </button>

          </div>

        </form>

        {/* RESULTS */}

        {
          results.length > 0 && (

            <>

              <BranchTable results={results} />

              <CounsellingStrategy
                results={results}
              />

            </>
          )
        }

      </div>

    </section>
  );
};

export default PredictionForm;