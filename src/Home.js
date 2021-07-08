import './App.css';

import React, { useState } from 'react';

import db from './db.json';

const Course = React.lazy(() => import('./Course'));

function Home() {

  const [data] = useState(db);

  React.useEffect(() => {
      
  } ,[]);

  return (
    <>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h3 className="display-4">Course Pricing</h3>
        <p className="lead">Learn Without Limits, Take the next step in your career with a world-class learning experience. World-class learning for anyone, anywhere</p>
      </div>

      <div className="container course-list">
        <div className="row text-center">
            {data.map((v, k) => 
              <>
                <div className="col-lg-3">
                  <Course key={k} data={v}/> 
                </div>
              </>
            )}
        </div>
      </div>
    </>
  );
}

export default Home;
