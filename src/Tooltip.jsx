const Tooltip = ({ text, children }) => (
  <div className="relative group flex justify-center items-center">
    {children}
    <div className="absolute bottom-full mb-2 hidden group-hover:flex px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap z-50 transition-all duration-300">
      {text}
    </div>
  </div>
);

export default Tooltip;
