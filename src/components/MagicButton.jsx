const MagicButton = ({ title, icon, position, handleClick, otherClasses }) => {
  return (
    <div
      className="relative inline-flex w-48 h-38 overflow-hidden rounded-3xl p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      {/* Apply animation only on large screens */}
      <span className="absolute inset-[-1000%] lg:animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_35%,#393BB2_50%,#E2CBFF_100%)]" />
    
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl
          bg-s2 px-4 sm:px-6 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {icon && (
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain mb-4" // Fixed icon size
          />
        )}
        <span className="text-center text-ellipsis whitespace-nowrap">{title}</span>
      </span>
    </div>
  );
};

export default MagicButton;
