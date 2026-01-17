import { Badge } from "@/components/ui/badge";
import { SkillsConfig } from "@/config/config";

export const Skills = () => {
  return (
    <section id="skills" className="flex items-center">
      <div className="w-full flex flex-col items-start gap-4">
        <p className="text-xl md:text-2xl border border-foreground/20 rounded-full font-semibold text-start px-3 py-1">
          Skills
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
          {SkillsConfig.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills }: (typeof SkillsConfig)[0]) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg bg-card border border-border/50">
      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge className="text-sm md:text-base px-3 py-1" key={index}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};
