import { CVItem } from "../types";

interface SectionProps {
  title: string;
  items: CVItem[];
}

export const Section = ({ title, items }: SectionProps) => (
  <section className="cv-section">
    <h2>{title}</h2>
    {items.map((item, index) => (
      <div key={index} className="section-item">
        <div className="item-header">
          <div className="item-title">
            <h3>{item.name}</h3>
            {item.subtitle && <p className="subtitle">{item.subtitle}</p>}
          </div>
          {item.duration && <span className="duration">{item.duration}</span>}
        </div>
        <ul className="item-content">
          {item.content.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);
