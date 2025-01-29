import { useRef, useState } from "react";
import "./App.css";
import generatePDF from "react-to-pdf";
import { cvData } from "./content-demo";

function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [showPageBreak, setShowPageBreak] = useState(true);

  return (
    <div className="cv-container">
      <div
        ref={targetRef}
        className={`cv-content ${showPageBreak ? "show-break" : ""}`}
      >
        {/* Page 1 */}
        <div className="page">
          <header className="cv-header">
            <h1>{cvData.personalInfo.name}</h1>
            <p className="title">{cvData.personalInfo.title}</p>
            <div className="contact-info">
              <p>{cvData.personalInfo.contact.email}</p>
              <p>{cvData.personalInfo.contact.phone}</p>
              <p>{cvData.personalInfo.contact.location}</p>
            </div>
          </header>

          {cvData.sections.slice(0, 2).map((section) => (
            <section key={section.title} className="cv-section">
              <h2>{section.title}</h2>
              {section.items.map((item, index) => (
                <div key={index} className="section-item">
                  <div className="item-header">
                    <div className="item-title">
                      <h3>{item.name}</h3>
                      {item.subtitle && (
                        <p className="subtitle">{item.subtitle}</p>
                      )}
                    </div>
                    <span className="duration">{item.duration}</span>
                  </div>
                  <ul className="item-content">
                    {item.content.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}
        </div>

        {/* Page 2 */}
        <div className="page">
          {cvData.sections.slice(2).map((section) => (
            <section key={section.title} className="cv-section">
              <h2>{section.title}</h2>
              {section.items.map((item, index) => (
                <div key={index} className="section-item">
                  <div className="item-header">
                    <div className="item-title">
                      <h3>{item.name}</h3>
                      {item.subtitle && (
                        <p className="subtitle">{item.subtitle}</p>
                      )}
                    </div>
                    <span className="duration">{item.duration}</span>
                  </div>
                  <ul className="item-content">
                    {item.content.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}

          <section className="cv-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              {cvData.skills.map((category) => (
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
        </div>
      </div>

      <button
        className="fab-button"
        onClick={() =>
          generatePDF(targetRef, {
            filename: "my-cv.pdf",
            page: { format: "a4" },
          })
        }
      ></button>

      <button
        className="fab-button-break"
        onClick={() => setShowPageBreak(!showPageBreak)}
      >
        {showPageBreak ? "Hide" : "Show"} Break
      </button>
    </div>
  );
}

export default App;
