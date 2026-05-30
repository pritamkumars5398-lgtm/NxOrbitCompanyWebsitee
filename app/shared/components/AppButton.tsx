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
  // Variant styling classes
  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-gradient-to-r from-nyt-green to-nyt-lime text-white shadow-md shadow-nyt-green/20 hover:brightness-105 transition active:scale-[0.98]";
  } else if (variant === "secondary") {
    variantClasses = "bg-nyt-dark text-white hover:bg-nyt-dark/90 transition active:scale-[0.98]";
  } else if (variant === "outline") {
    variantClasses = "border-2 border-nyt-green text-nyt-green hover:bg-nyt-green/10 transition active:scale-[0.98]";
  } else if (variant === "danger") {
    variantClasses = "bg-red-600 text-white hover:bg-red-700 transition active:scale-[0.98]";
  } else if (variant === "ghost") {
    variantClasses = "text-nyt-slate hover:bg-slate-100 hover:text-nyt-charcoal transition active:scale-[0.98]";
  }

  // Size styling classes
  let sizeClasses = "";
  if (size === "small") {
    sizeClasses = "px-4 py-2 text-xs font-bold rounded-full";
  } else if (size === "medium") {
    sizeClasses = "px-6 py-2.5 text-sm font-bold rounded-full";
  } else if (size === "large") {
    sizeClasses = "px-8 py-4 text-base font-bold rounded-full";
  }

  const baseClasses = "inline-flex items-center justify-center font-sans tracking-wide cursor-pointer focus:outline-none focus:ring-2 focus:ring-nyt-green/50";
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
