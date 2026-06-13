export function Shell({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-shell px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

export function SteelHeading({ children, as = 'h2', className = '' }) {
  const Tag = as;
  return (
    <Tag
      className={`steel font-display font-semibold leading-[1.05] tracking-tight ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Blade({ className = '' }) {
  return <div className={`blade ${className}`} aria-hidden="true" />;
}
