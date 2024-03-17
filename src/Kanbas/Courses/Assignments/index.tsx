import React from 'react';
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaPlus,
  FaBook,
} from 'react-icons/fa';
import { useNavigate, Link, useParams } from 'react-router-dom';
import db from '../../Database';
import {
  addAssignment,
  deleteAssignment,
  selectAssignment,
} from './assignmentsReducer';

import { useSelector, useDispatch } from 'react-redux';
import './index.css';

function Assignments() {
  const { courseId } = useParams();
  const assignment = useSelector(
    (state: any) => state.assignmentsReducer.assignment
  );
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === courseId
  );

  const confirmAndDelete = (assignmentId: any) => {
    const tobeDelete = window.confirm('Do you want to delete this assignment?');
    if (tobeDelete) {
      dispatch(deleteAssignment(assignmentId));
    }
  };
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
            onClick={() => {
              dispatch(
                addAssignment({ title: 'New Assignment', courseId: courseId })
              );
              navigate(
                `/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`
              );
            }}
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
              {courseAssignments.map((assignment: any) => (
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
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => dispatch(selectAssignment(assignment))}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={(e) => {
                            e.preventDefault();
                            confirmAndDelete(assignment._id);
                          }}
                        >
                          Delete
                        </button>
                      </Link>
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
