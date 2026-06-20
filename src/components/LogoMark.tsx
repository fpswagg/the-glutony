export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 4C32 4 18 14 14 28C10 42 16 56 32 60C48 56 54 42 50 28C46 14 32 4 32 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="color-mix(in srgb, currentColor 8%, transparent)"
      />
      <path
        d="M32 18V46M24 28C24 28 28 32 32 32C36 32 40 28 40 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 38C20 38 26 44 32 44C38 44 44 38 44 38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}
