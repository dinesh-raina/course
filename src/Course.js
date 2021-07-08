/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

import { useHistory } from "react-router-dom";

function Course(props) {
  const { data, type }  = props;
  const history = useHistory();

  return (
    <div className="card mb-3 box-shadow">
        <div className="card-header">
            <h4 className="my-0 font-weight-normal">{data.name}</h4>
        </div>
        <div className="card-body">
            <h1 className="card-title pricing-card-title">{data.price} <small className="text-muted">/ M</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
                <li>{data.sections} sections</li>
                <li>{data.lectures} lectures</li>
                <li>{data.length} total length</li>
                <li>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="ml-2">({data.ratings} ratings)</span>
                </li>
            </ul>
            <button type="button" onClick={() => history.push({ 
                    pathname: '/course-app/details/'+ data.id,
                    state: data
                })}  className={(type === 'details') ? "btn btn-lg btn-block btn-outline-danger" : "btn btn-lg btn-block btn-outline-primary"}>{(type === 'details') ? 'Add Cart' : 'Buy now'}</button>
        </div>
    </div>
  );
}

export default Course;
