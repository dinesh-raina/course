import './App.css';

import React, { useState } from 'react';

import db from './db.json';
import { useParams } from "react-router-dom";

const Course = React.lazy(() => import('./Course'));

function Details() {
  
  const { id } = useParams();
  const [data, setData] = useState([]);

  React.useEffect(() => {
    setData(db.filter((v) => v.id === parseInt(id))[0]);
  } ,[data, id]);
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="jumbotron">
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              <p className="mb-0">
                Created by <b>{data.createdBy}</b>
              </p>
              <span style={{fontSize: '12px'}}>Last updated on <b>{data.updatedOn}</b></span>
              
            </div>
            <h5 className="mb-3">Course content</h5>
            <div id="accordion" className="mb-4">
              {(data.courseContent) && (
                <>
                  {data.courseContent.map((v, k) => {
                    return (
                      <div key={k} className="card">
                        <div className="card-header">
                          <a className="card-link" data-toggle="collapse" href={"#collapse" + v.id}>
                            {v.title}
                            <span className="duration">{v.length}</span>
                          </a>
                        </div>
                        <div id={"collapse" + v.id} className={k === 0 ? "collapse show": "collapse"} data-parent="#accordion">
                          <div className="card-body">
                            <ul className="list-unstyled">
                              {v.details.map((v1, k1) => { 
                                return (
                                  <li>
                                    {k1+1}. {v1.title}
                                    <span className="duration">{v1.length}</span>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <Course data={data} type={"details"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
