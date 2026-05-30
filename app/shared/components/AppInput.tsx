import React from "react";

interface AppInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  prefix?: string;
}

export const AppInput: React.FC<AppInputProps> = ({
  label,
  type = "text",
  placeholder = "",
  required = false,
  multiline = false,
  rows = 4,
  value,
  onChange,
  className = "",
  prefix,
}) => {
  const commonClasses =
    "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 transition focus:outline-none focus:border-nyt-green focus:bg-white focus:ring-1 focus:ring-nyt-green";

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="flex">
        {prefix && (
          <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-600 text-xs font-bold shrink-0">
            {prefix}
          </span>
        )}
        {multiline ? (
          <textarea
            required={required}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${commonClasses} resize-none ${prefix ? "rounded-l-none" : ""}`}
          />
        ) : (
          <input
            type={type}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${commonClasses} ${prefix ? "rounded-l-none" : ""}`}
          />
        )}
      </div>
    </div>
  );
};
