import ResultCard from "./ResultCard";

const BranchTable = ({ results }) => {
  return (
    <div className="mt-24 relative z-10 px-1">
      {/* Header Container Row */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          justify-between
          gap-4
          mb-8
          border-b
          border-slate-900
          pb-5
        "
      >
        <div>
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
            Based on historical trends and statistical analysis algorithms.
          </p>
        </div>

        {/* Premium Data Count Badge */}
        <div
          className="
            self-start
            sm:self-auto
            px-3
            py-1.5
            rounded-lg
            bg-slate-900/60
            border
            border-slate-800
            text-xs
            font-semibold
            tracking-wide
            text-cyan-400
            shadow-inner
          "
        >
          {results.length} Branches Found
        </div>
      </div>

      {/* Grid Layout Container */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {results.map((item, index) => (
          <ResultCard
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default BranchTable;