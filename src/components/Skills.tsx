import { SkillCategory } from "../types";

interface SkillsProps {
  skills: SkillCategory[];
}

export const Skills = ({ skills }: SkillsProps) => {
  const horizontalSkills = skills.filter(
    (skill) => skill.layout === "horizontal"
  );
  const verticalSkills = skills.filter(
    (skill) => skill.layout !== "horizontal"
  );
  return (
    <section className="cv-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {verticalSkills.map((category) => (
          <div key={category.name} className="skill-category">
            <h3>{category.name}</h3>
            <ul>
              {category.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ul className="skills-list">
        {horizontalSkills.map((category) => (
          <li key={category.name} className="skill-category">
            <h3>{category.name}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
