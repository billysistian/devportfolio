import { techIcons } from "../techIcons";
import type { SkillItem } from './skills.types';

export function SkillCard({ name, category }: SkillItem) {
  const Icon = techIcons[name];

  return (
    <div className="skill-card h-full">
      {/* ICON */}
      <div className="w-[52px] h-[52px] rounded-[16px] bg-[#F8FAFC] flex items-center justify-center flex-shrink-0 [&>svg]:w-7 [&>svg]:h-7">
        {Icon}
      </div>

      {/* TEXT */}
      <div>
        <h3
          className="
            text-[20px]
            font-bold
            leading-none
            text-[#111827]
            capitalize
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-2
            text-[14px]
            text-[#6B7280]
            leading-none
          "
        >
          {category}
        </p>
      </div>
    </div>
  );
}
