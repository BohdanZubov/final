const IconButton = ({ label, onClick, className = "", children })=> {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`flex h-7.5 w-7.5 items-center justify-center text-[22px] text-black transition-colors hover:text-brand ${className}`}
    >
      {children}
    </button>
  );
}

export default IconButton