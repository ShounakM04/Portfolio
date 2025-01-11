const MagicButton1 = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    children,
  }) => {
    return (
      <div
        className={`relative min-h-full: inline-flex overflow-hidden rounded-7xl p-[1px] focus:outline-none ${otherClasses}`}
        onClick={handleClick}
      >
        {/* Spinning Gradient Border */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_35%,#393BB2_50%,#E2CBFF_100%)] rounded-7xl min-h-full" />
  
        {/* Inner Content */}
        <div className="rounded-3xl min-h-full">
          {/* Optional Icon */}
          {icon && (
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain mb-4" // Fixed icon size
            />
          )}
  
          {/* Title */}
          {title && (
            <span className="text-center text-sm font-medium text-ellipsis whitespace-nowrap">
              {title}
            </span>
          )}
  
          {/* Render children (like project cards) */}
          <div className="w-full">{children}</div>
        </div>
      </div>
    );
  };
  
  export default MagicButton1;
  