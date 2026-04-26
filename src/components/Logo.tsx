import Image from 'next/image';

export function Logo({ size = "large" }: { size?: "small" | "large" }) {
  const dimension = size === "large" ? 200 : 96;

  return (
    <div className={`relative ${size === "large" ? "mx-auto" : ""}`}>
      {/* Glass Container with Rounded Corners */}
      <div className={`
        glass rounded-3xl p-6 flex items-center justify-center overflow-hidden
        ${size === "large" ? "w-[220px] h-[220px]" : "w-[112px] h-[112px] p-2"}
        border border-white/30 shadow-2xl backdrop-blur-2xl
      `}>
        <Image
          src="/CollectorFanCanada.jpg"
          alt="CollectorFanCanada"
          width={dimension}
          height={dimension}
          className="drop-shadow-2xl object-contain rounded-2xl"
          priority
        />
      </div>

      {/* Soft outer glow ring */}
      {size === "large" && (
        <div className="absolute inset-[-12px] rounded-[28px] border border-[#FFCC00]/20 -z-10" />
      )}
    </div>
  );
}
