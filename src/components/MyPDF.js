import React from 'react';
//import PDFViewer from 'pdf-viewer-reactjs';
import PDF from './Images/MarkLahamResume.pdf';


//import '../styles/Header.css';

      const MyPDF = () => {
        return (

           <div className="" onClick={() => window.open(PDF)}><i className="mdi mdi-help-circle"></i> DOWNLOAD RESUME IN PDF FROM HERE</div>
            
        )
    }


    export default MyPDF
