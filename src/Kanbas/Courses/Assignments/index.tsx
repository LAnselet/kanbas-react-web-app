import React from 'react';
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaPlus,
  FaBook,
} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { assignments } from '../../Database';
import './index.css';

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      <br />
      <div className="flex-fill col-11">
        <input
          type="text"
          className="form-control w-25 float-start"
          placeholder="Search for Assignment"
        />
        <div className="float-end">
          <button
            style={{ marginRight: '5px' }}
            type="button"
            className="btn btn-secondary"
          >
            <FaPlus /> Group
          </button>
          <button
            style={{ marginRight: '5px' }}
            type="button"
            className="btn btn-danger"
          >
            <FaPlus /> Assignments
          </button>
          <button type="button" className="btn btn-secondary">
            <FaEllipsisV />
          </button>
        </div>
        <br />
        <br />
        <hr />
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <span
                  style={{
                    border: 'solid',
                    padding: '5px',
                    borderRadius: '15px',
                    marginRight: '10px',
                  }}
                >
                  40% of Total
                </span>
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList.map((assignment) => (
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-1 p-2 assignment-list-group-item-icons">
                      <FaEllipsisV className="me-2" />
                      <FaBook />
                    </div>
                    <div className="col p-2">
                      <Link
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </Link>
                      <br />
                      <span className="assignment-list-group-item-desc">
                        <span style={{ color: 'red' }}>Multiple Modules</span> |{' '}
                        <strong>Not available until</strong> Oct 15 at 12:00am |
                      </span>
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                      <br />
                      <span className="assignment-list-group-item-desc">
                        <strong>Due</strong> Oct 13 at 11:59pm | 100pts
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Assignments;
