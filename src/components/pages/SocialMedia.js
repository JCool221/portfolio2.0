import React from 'react';
import content from "../assets/socialMedia.json";

export default function SocialMedia() {
  return (
    <div className='container-fluid justify-content-center'>{
        content.map(content => {
            return (
                <div className='mx-2' key={content.site}>
                    <a href={`${content.link}`}>

                    <img alt={`${content.site}`} src={`${content.icon}`} />
                    </a>

                </div>   
            )
        })
        }
      
    </div>
  );
}
