import React from 'react';
import content from "../assets/portfolioContent.json";

export default function Portfolio() {
  return (

    <div className='row'>
      {
        content.map(content => {
          return (
            <div key={content.title} className="col-md-3 offset-md-1">
              <div className="card text-center fs-4" style={{ width: '18rem', height: '32rem' }}>
                <img src={`${content.image}`} className="card-img-top" alt={content.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{content.title}</h5>
                  <p className="card-text">{content.description}</p>
                  <a href="#" className="mt-auto btn btn-primary">Check it Out!</a>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
