import { CVData } from "../types";
import { Header } from "./Header";
import { Section } from "./Section";
import { Skills } from "./Skills";

interface CVProps {
  data: CVData;
  showPageBreak: boolean;
  targetRef: React.RefObject<HTMLDivElement>;
}

export const CV = ({ data, showPageBreak, targetRef }: CVProps) => (
  <div
    ref={targetRef}
    className={`cv-content ${showPageBreak ? "show-break" : ""}`}
  >
    {/* Page 1 */}
    <div className="page">
      <Header {...data.personalInfo} />
      {data.sections.slice(0, 2).map((section) => (
        <Section key={section.title} {...section} />
      ))}
    </div>

    {/* Page 2 */}
    <div className="page">
      {data.sections.slice(2).map((section) => (
        <Section key={section.title} {...section} />
      ))}
      <Skills skills={data.skills} />
    </div>
  </div>
);
