import { row1, row2 } from "./skills.data";
import { SkillCard } from "./SkillCard";
import { useLanguage } from "../../hooks/useLanguage";

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-20 bg-[#F7F8FA]">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
          {t.skills.sectionLabel}
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 font-['Poppins']">
          {t.skills.title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          {t.skills.description}
        </p>
      </div>

      {/* ROW 1 */}
      <div className="tools-slideshow">
        <div className="tools-track row-right">
          <div className="tools-row">
            {row1.map((item, index) => (
              <SkillCard
                key={index}
                name={item.name}
                category={item.category}
              />
            ))}
          </div>

          <div className="tools-row">
            {row1.map((item, index) => (
              <SkillCard
                key={`duplicate-${index}`}
                name={item.name}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="tools-slideshow mt-5">
        <div className="tools-track row-left">
          <div className="tools-row">
            {row2.map((item, index) => (
              <SkillCard
                key={index}
                name={item.name}
                category={item.category}
              />
            ))}
          </div>

          <div className="tools-row">
            {row2.map((item, index) => (
              <SkillCard
                key={`duplicate2-${index}`}
                name={item.name}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
