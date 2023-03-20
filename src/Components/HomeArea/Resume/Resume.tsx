import "./Resume.css";
import { Document, Page, pdfjs } from "react-pdf";
import cv from "../../../Assets/Files/Gal Vitrak Resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

function Resume(): JSX.Element {
  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "standard_fonts/",
  };

  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  return (
    <div className="Resume">
      <div className="documentContainer">
        <Document file={cv} onLoadSuccess={() => {}} options={options}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
