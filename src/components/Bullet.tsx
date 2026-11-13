import type { LineColor } from "../content";

export const lineBg: Record<LineColor, string> = { red: "bg-red", blue: "bg-blue", green: "bg-green", amber: "bg-amber" };
export const lineText: Record<LineColor, string> = { red: "text-red", blue: "text-blue", green: "text-green", amber: "text-amber" };
export const lineStroke: Record<LineColor, string> = {
  red: "stroke-red",
  blue: "stroke-blue",
  green: "stroke-green",
  amber: "stroke-amber",
};

/** A route bullet: a filled disc carrying the line's letter, as on a network map. */
export function Bullet({ color, letter, size = "md" }: { color: LineColor; letter: string; size?: "sm" | "md" | "lg" }) {
  const dims = { sm: "h-6 w-6 text-[13px]", md: "h-9 w-9 text-lg", lg: "h-12 w-12 text-2xl" }[size];
  const fg = color === "amber" ? "text-[#111214]" : "text-white";
  return (
    <span aria-hidden className={`sign inline-grid shrink-0 place-items-center rounded-full ${dims} ${lineBg[color]} ${fg}`}>
      <span className="translate-y-[0.04em]">{letter}</span>
    </span>
  );
}

/** A short horizontal stroke of line colour, used as a legend swatch. */
export function Swatch({ color, className = "" }: { color: LineColor; className?: string }) {
  return <span aria-hidden className={`inline-block h-[6px] w-5 shrink-0 rounded-full ${lineBg[color]} ${className}`} />;
}
