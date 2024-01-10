import { pdfjs, Document, Page } from "react-pdf"

// import ResumePDF from "../../public/pdf/test-pdf.pdf"

export default function Resume() {

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();
  
  return (
    <div className="resume">
      {/* <h1 style={{padding: "300px"}}>Resume Page</h1> */}
      <Document file={ResumePDF}>
        <Page pageNumber={1}/>
        <Page pageNumber={2}/>
        <Page pageNumber={3}/>
        <Page pageNumber={4}/>
      </Document>
    </div>
  )
}