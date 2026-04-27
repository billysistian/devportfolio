interface TechBadgeProps {
  name: string;
  icon: React.ReactNode | null;
}

export function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <div className="group relative isolate overflow-hidden flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium cursor-pointer border border-gray-950/[.1] bg-white text-gray-800 dark:border-gray-50/[.1] dark:bg-zinc-900 dark:text-gray-200">
      <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 rounded-full transition-all duration-500 ease-out z-0 pointer-events-none group-hover:w-[500px] group-hover:h-[500px] bg-gray-100 dark:bg-gray-800"></span>
      {icon && (
        <span className="text-lg sm:text-xl md:text-2xl relative z-10">
          {icon}
        </span>
      )}
      <span className="relative z-10">{name}</span>
    </div>
  );
}
