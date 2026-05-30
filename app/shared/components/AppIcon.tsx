import React from "react";
import { Colors } from "../../core/theme";

interface AppIconProps {
  name:
    | "phone"
    | "bolt"
    | "check"
    | "arrow-right"
    | "mail"
    | "map-pin"
    | "linkedin"
    | "twitter"
    | "instagram"
    | "lock"
    | "code"
    | "menu"
    | "close"
    | "chevron-down"
    | "star"
    | "play"
    | "settings"
    | "server"
    | "globe"
    | "database"
    | "shield";
  size?: number | string;
  color?: "primary" | "secondary" | "success" | "danger" | "textPrimary" | "textSecondary" | "white" | "inherit";
  className?: string;
}

export const AppIcon: React.FC<AppIconProps> = ({
  name,
  size = 24,
  color = "inherit",
  className = "",
}) => {
  // Resolve color
  let fillOrStrokeColor = "currentColor";
  if (color === "primary") fillOrStrokeColor = Colors.primary;
  else if (color === "secondary") fillOrStrokeColor = Colors.secondary;
  else if (color === "success") fillOrStrokeColor = Colors.success;
  else if (color === "danger") fillOrStrokeColor = Colors.danger;
  else if (color === "textPrimary") fillOrStrokeColor = Colors.textPrimary;
  else if (color === "textSecondary") fillOrStrokeColor = Colors.textSecondary;
  else if (color === "white") fillOrStrokeColor = "#FFFFFF";

  const resolvedSize = typeof size === "number" ? `${size}px` : size;

  const iconStyles = {
    width: resolvedSize,
    height: resolvedSize,
  };

  switch (name) {
    case "phone":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 00.096.867l-1.1 1.48a14.85 14.85 0 005.485 5.486l1.48-1.1a1 1 0 01.867-.096l2.2.548A1 1 0 0121 17.28V20a2 2 0 01-2 2h-3C7.119 22 0 14.881 0 6V3a2 2 0 012-2h1z"
          />
        </svg>
      );
    case "bolt":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
    case "check":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      );
    case "arrow-right":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      );
    case "mail":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "map-pin":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill={fillOrStrokeColor}
          viewBox="0 0 24 24"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill={fillOrStrokeColor}
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "lock":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    case "code":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      );
    case "menu":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      );
    case "close":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    case "chevron-down":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      );
    case "star":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499c.172-.387.72-.387.892 0l2.368 5.32 5.8 1.05c.42.076.588.587.284.888l-4.1 4.02 1.07 5.72c.078.419-.36.738-.727.534L12 18.667l-5.163 2.76c-.367.204-.805-.115-.727-.534l1.07-5.72-4.1-4.02c-.304-.301-.136-.812.284-.888l5.8-1.05 2.368-5.32z"
          />
        </svg>
      );
    case "play":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      );
    case "settings":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "server":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      );
    case "globe":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      );
    case "database":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      );
    case "shield":
      return (
        <svg
          style={iconStyles}
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke={fillOrStrokeColor}
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    default:
      return null;
  }
};
