import { SkillCategory } from "../types";

interface SkillsProps {
  skills: SkillCategory[];
}

export const Skills = ({ skills }: SkillsProps) => (
  <section className="cv-section">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map((category) => (
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
  </section>
);
