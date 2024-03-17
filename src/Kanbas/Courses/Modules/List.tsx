import React, { useState } from 'react';
import './index.css';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { addModule, deleteModule, updateModule, setModule } from './reducer';
import { KanbasState } from '../../store';
import db from '../../Database';

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="wd-modules-buttons">
        <button>Collapse All</button>
        <button>View Program</button>
        <button>
          <i
            className="fa fa-check-circle text-success"
            style={{ width: '20px' }}
          ></i>
          Publish All
          <i className="fa fa-caret-down" style={{ width: '20p' }}></i>
        </button>
        <button className="wd-modules-buttons-module">
          <i className="fa fa-plus ms-2" style={{ width: '20px' }}></i>Module
        </button>
        {/* <button className="wd-modules-buttons-rightmost">
          <FaEllipsisV />
        </button> */}
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button
            onClick={() => {
              dispatch(addModule(module));
            }}
          >
            Add
          </button>
          <button onClick={() => dispatch(updateModule(module))}>Update</button>
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <div>
                <h3>{module.name}</h3>{' '}
                <button
                  onClick={() => {
                    dispatch(setModule(module));
                  }}
                >
                  Edit
                </button>
                <button onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                <br />
                {module.description}
                <br />
                <br />
                {module.course}
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ModuleList;
