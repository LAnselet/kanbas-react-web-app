import React, { useState } from 'react';
import './index.css';
import { modules } from '../../Database';
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';
import { useParams } from 'react-router';

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
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
        <button className="wd-modules-buttons-rightmost">
          <FaEllipsisV />
        </button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ModuleList;
