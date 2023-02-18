import React from 'react';
import resume from '../assets/Resume.png'

export default function Resume() {
  return (
    <div className='d-flex justify-content-center'>
      <img className='img-fluid' alt='My Resume, link coming soon' src={resume}/>
    </div>
  );
}
