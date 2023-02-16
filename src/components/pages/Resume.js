import React from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../assets/JCooleyResume_online_02_23.pdf'

export default function Resume() {
  return (
    <div>
        <Document file={resume}>
            <Page pageNumber={1}/>
        </Document>
    </div>
  );
}
