import type { TechnologyName } from "@/lib/projects";

const iconColors: Record<TechnologyName, string> = {
  "Next.js": "#101c1a",
  React: "#25a7cf",
  TypeScript: "#3178c6",
  Laravel: "#ef3e36",
  PHP: "#6875ae",
  Shopify: "#79a83d",
  "Tailwind CSS": "#26a6c7",
  "Node.js": "#579b47",
  MySQL: "#167b9d",
  "React Native": "#6c6ff5",
  AI: "#8655db",
};

export function TechIcon({ name, size = 32 }: { name: TechnologyName; size?: number }) {
  const color = iconColors[name];

  if (name === "React") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <g stroke={color} strokeWidth="1.8">
          <ellipse cx="20" cy="20" rx="16" ry="6.2" />
          <ellipse cx="20" cy="20" rx="16" ry="6.2" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="16" ry="6.2" transform="rotate(120 20 20)" />
        </g>
        <circle cx="20" cy="20" r="2.7" fill={color} />
      </svg>
    );
  }

  if (name === "React Native") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="9" y="3" width="22" height="34" rx="5" stroke={color} strokeWidth="2" />
        <path d="M15 8h10M17 32h6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill={color} />
      </svg>
    );
  }

  if (name === "AI") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 4 23.2 15.8 35 20l-11.8 3.2L20 35l-3.2-11.8L5 20l11.8-4.2L20 4Z" fill={color} />
        <path d="m31 4 1.4 4.6L37 10l-4.6 1.4L31 16l-1.4-4.6L25 10l4.6-1.4L31 4Z" fill={color} opacity=".58" />
      </svg>
    );
  }

  if (name === "Shopify") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="m10 13 2-3h16l2 3 2 21H8l2-21Z" fill={color} />
        <path d="M15 15V11a5 5 0 0 1 10 0v4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20 19c-2-2-5 .5-2.5 2l3.3 1.7c2.4 1.3-.5 4.3-3.3 2.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "TypeScript") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
        <rect x="3" y="3" width="34" height="34" rx="5" fill={color} />
        <path d="M8 16h16v4h-6v13h-4V20H8v-4Zm18.5 4.2c.9-.6 2.3-1.1 4.1-1.1 1.6 0 3 .3 4.2.9v4c-1.2-.8-2.5-1.2-4-1.2-1.1 0-1.7.3-1.7.9 0 .4.6.8 1.9 1.2 3.1.9 4.6 2.5 4.6 4.6 0 3-2.3 4.7-6.2 4.7-1.9 0-3.6-.4-4.8-1.1v-4.3c1.3 1 2.9 1.5 4.8 1.5 1.3 0 2-.3 2-.9 0-.5-.6-.9-2-1.3-3.1-.9-4.6-2.4-4.6-4.5 0-1.5.6-2.6 1.7-3.4Z" fill="#fff" transform="translate(-1 -2) scale(.92)" />
      </svg>
    );
  }

  if (name === "Laravel") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="m5 10 9-5 9 5v10l-9 5-9-5V10Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="m23 15 7-4 6 3v8l-8 5-7-4" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="m14 25 8 5 7-4m-15-6V10m9 10 7 4" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="m30 24 6-3" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "Tailwind CSS") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 9c-5.7 0-9.2 2.8-10.6 8.3 2.1-2.8 4.6-3.9 7.4-3.2 1.6.4 2.7 1.6 4 2.9 2.1 2.2 4.6 4.7 9.8 4.7 5.7 0 9.2-2.8 10.6-8.3-2.1 2.8-4.6 3.9-7.4 3.2-1.6-.4-2.7-1.6-4-2.9C27.7 11.5 25.2 9 20 9Zm-10.6 14C3.7 23 .2 25.8-1.2 31.3c2.1-2.8 4.6-3.9 7.4-3.2 1.6.4 2.7 1.6 4 2.9 2.1 2.2 4.6 4.7 9.8 4.7 5.7 0 9.2-2.8 10.6-8.3-2.1 2.8-4.6 3.9-7.4 3.2-1.6-.4-2.7-1.6-4-2.9C17.1 25.5 14.6 23 9.4 23Z" fill={color} transform="translate(4 -2) scale(.83)" />
      </svg>
    );
  }

  if (name === "MySQL") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M7 29c7-1 8-8 12-13 2-3 5-4 9-4 3 0 5 1 6 3-3-1-5 0-7 2 3-.5 5 .2 6 2-4-1-8 0-10 3-2 3-4 6-8 7 4 0 7-1 9-3-2 4-6 6-12 5-2 0-4-.8-5-2Z" fill={color} />
        <path d="M23 15c.5-3 2-5 4-7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="28.5" cy="8" r="1" fill={color} />
      </svg>
    );
  }

  if (name === "Node.js") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="m20 3 15 8.5v17L20 37 5 28.5v-17L20 3Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 24v-8l8 8v-8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "PHP") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <ellipse cx="20" cy="20" rx="17" ry="10" fill={color} />
        <path d="m11 25 2.2-11h5.4c2.7 0 3.8 1.3 3.3 3.7-.5 2.6-2 3.9-4.7 3.9h-2l-.7 3.4H11Zm4.8-6h1.4c.8 0 1.3-.4 1.5-1.4.2-.9-.1-1.3-.9-1.3h-1.4l-.6 2.7Zm6 6L24 14h3.8c2.7 0 3.8 1.3 3.3 3.7-.5 2.6-2 3.9-4.7 3.9h-1l-.7 3.4h-2.9Zm4.8-6H26l-.6 2.7h1.4c.8 0 1.3-.4 1.5-1.4.2-.9-.1-1.3-.9-1.3Z" fill="#fff" />
      </svg>
    );
  }

  if (name === "Next.js") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill={color} />
        <path d="M12 28V12l16 17M21 12v9" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="17" fill={color} />
      <path d="m14 30 6-20 6 20M16 23h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
