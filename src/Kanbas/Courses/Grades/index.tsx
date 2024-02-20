import { assignments, enrollments, grades, users } from '../../Database';
import { useParams } from 'react-router-dom';
import { FaDownload, FaUpload } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="col-11">
        <h1>Grades</h1>
        <div className="float-end">
          <button
            style={{ marginRight: '10px' }}
            type="button"
            className="btn btn-secondary"
          >
            <FaDownload /> Import
          </button>
          <button
            style={{ marginRight: '10px' }}
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaUpload /> Export
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item">Action</a>
            </li>
          </ul>
          <button type="button" className="btn btn-secondary">
            <FaGear />
          </button>
        </div>
        <br />
        <br />
        <div className="row mb-3">
          <div className="col-6">
            <label className="form-label">Student Names</label>
            <input
              type="text"
              className="form-control"
              placeholder="Search Students"
            />
          </div>
          <div className="col-6">
            <label className="form-label">Assignment Names</label>
            <input
              type="text"
              className="form-control"
              placeholder="Search Assignments"
            />
          </div>
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-secondary">
            <i className="fa fa-filter"></i> Apply Filters
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-secondary">
              <tr className="table-columns-center">
                <th>Student Name</th>
                {as.map((assignment) => (
                  <th className="text-center">{assignment.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {es.map((enrollment) => {
                const user = users.find((user) => user._id === enrollment.user);
                console.log(user);
                return (
                  <tr>
                    <td style={{ color: 'red' }}>
                      {user?.firstName} {user?.lastName}
                    </td>
                    {assignments.map((assignment) => {
                      const grade = grades.find(
                        (grade) =>
                          grade.student === enrollment.user &&
                          grade.assignment === assignment._id
                      );
                      console.log(grade);
                      return (
                        <td className="text-center">{grade?.grade || ''}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grades;
