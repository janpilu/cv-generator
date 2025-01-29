import { useRef, useState } from "react";
import "./App.css";
import generatePDF from "react-to-pdf";
import { cvData } from "./content";
import { CV } from "./components/CV";

function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [showPageBreak, setShowPageBreak] = useState(true);

  return (
    <div className="cv-container">
      <CV data={cvData} showPageBreak={showPageBreak} targetRef={targetRef} />

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
