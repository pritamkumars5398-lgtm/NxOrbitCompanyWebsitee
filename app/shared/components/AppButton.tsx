import React from "react";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "small" | "medium" | "large";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const AppButton: React.FC<AppButtonProps> = ({
  variant = "primary",
  size = "medium",
  href,
  children,
  className = "",
  type = "button",
  ...props
}) => {
  // Variant styling classes based on brand palette (#006B7D, #00BBA9, #3CCFC7)
  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-[#0A2E4D] text-white border border-[#0A2E4D] hover:bg-[#006B7D] hover:border-[#006B7D] transition-colors duration-200 active:scale-[0.98]";
  } else if (variant === "secondary") {
    variantClasses = "bg-[#00BBA9] text-white border border-[#00BBA9] hover:bg-[#006B7D] hover:border-[#006B7D] transition-colors duration-200 active:scale-[0.98]";
  } else if (variant === "outline") {
    variantClasses = "border border-slate-300 text-[#0A2E4D] bg-transparent hover:border-[#00BBA9] hover:text-[#006B7D] transition-colors duration-200 active:scale-[0.98]";
  } else if (variant === "danger") {
    variantClasses = "bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:border-red-700 transition-colors duration-200 active:scale-[0.98]";
  } else if (variant === "ghost") {
    variantClasses = "text-[#006B7D] border border-transparent hover:bg-[#F3F7F9] hover:text-[#0A2E4D] transition-colors duration-200 active:scale-[0.98]";
  }

  // Size styling classes
  let sizeClasses = "";
  if (size === "small") {
    sizeClasses = "px-4 py-2 text-xs font-semibold rounded-lg";
  } else if (size === "medium") {
    sizeClasses = "px-5 py-2.5 text-sm font-semibold rounded-lg";
  } else if (size === "large") {
    sizeClasses = "px-6 py-3 text-xs sm:text-sm md:text-base font-semibold rounded-lg";
  }

  const baseClasses = "inline-flex items-center justify-center font-sans cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00BBA9]/40 focus:ring-offset-1 box-border leading-normal whitespace-nowrap";
  const finalClassName = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClassName}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={finalClassName} {...props}>
      {children}
    </button>
  );
};
