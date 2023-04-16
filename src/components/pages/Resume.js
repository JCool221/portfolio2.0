import React from 'react';
// import resume from '../assets/Resume.png'

export default function Resume() {
  return (
    <div className='d-flex justify-content-center'>
      {/* <img className='img-fluid' alt='My Resume, link coming soon' src={resume}/> */}
      <iframe
      title='My Resume'
      src='https://docs.google.com/document/d/e/2PACX-1vRL4b1I2ywhaHEHUqHYUjAm00nzVfl4PKqOFpLSEpayQVwwUny7e7bXHdwzRrH25Q/pub'
      height="1000"
      width="100%"
      />
    </div>
  );
}
