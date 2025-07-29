import React from "react";

/**
 * HelipadIcon - A custom Lucide-style icon resembling a helipad (circle with an 'H')
 * @param {object} props - Accepts className, size, strokeWidth, etc., like Lucide icons
 */
const HelipadIcon = ({
  size = 24,
  strokeWidth = 2,
  className = "",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide-icon ${className}`}
      {...props}
    >
      {/* Outer circle */}
      <circle cx="12" cy="12" r="10" />

      {/* H - two vertical bars */}
      <line x1="8" y1="8" x2="8" y2="16" />
      <line x1="16" y1="8" x2="16" y2="16" />

      {/* H - horizontal crossbar */}
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
};

export default HelipadIcon;
