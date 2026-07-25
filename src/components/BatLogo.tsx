export default function BatLogo({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 10.5C29 4 22 0 14 0c1.8 4.8 1.2 8.3-1 11 -4.6 1-9 3.6-13 8.4 5.6-1.2 9.6-1 12.4 0.6C9.2 23 7 27 6 33c4.4-3.6 8-5.6 11-6.2-1 3-1 6 0.4 9.2 2-3.6 4.2-6 8-8 2.4 2 4.4 2 6.6 0 3.8 2 6 4.4 8 8 1.4-3.2 1.4-6.2 0.4-9.2 3 0.6 6.6 2.6 11 6.2 -1-6-3.2-10-6.4-13.4 2.8-1.6 6.8-1.8 12.4-0.6 -4-4.8-8.4-7.4-13-8.4 -2.2-2.7-2.8-6.2-1-11 -8 0-15 4-18 10.5Z"
        fill={color}
      />
    </svg>
  );
}
