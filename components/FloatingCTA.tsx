import { CTAButtons } from "@/components/CTAButtons";

export function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/80 bg-white/95 p-3 shadow-[0_-18px_42px_rgba(16,42,67,0.18)] backdrop-blur-xl md:hidden">
      <CTAButtons compact />
    </div>
  );
}
