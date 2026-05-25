const Footer = () => {
  return (
    <footer
      className="
        w-full
        py-8
        mt-12
        text-center
        bg-slate-950
        border-t
        border-slate-900
        backdrop-blur-sm
      "
    >
      <p 
        className="
          text-xs 
          font-medium 
          tracking-wider 
          text-slate-500 
          uppercase
        "
      >
        &copy; {new Date().getFullYear()} MITS Counselling Prediction System. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;