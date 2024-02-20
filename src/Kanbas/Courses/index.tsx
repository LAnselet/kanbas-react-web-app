import { courses } from '../../Kanbas/Database';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { HiMiniBars3 } from 'react-icons/hi2';
import CourseNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import Grades from './Grades';

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const locationArr = useLocation().pathname.split('/');
  return (
    <div>
      <div style={{ marginLeft: '25px', marginTop: '10px' }}>
        <h1>
          <span style={{ color: 'red' }}>
            <HiMiniBars3 /> Course {course?.name}
          </span>{' '}
          <span style={{ color: 'grey' }}>&gt;</span>{' '}
          {locationArr[locationArr.length - 1]}
        </h1>
        <hr />
      </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0 margin-top-30px"
          style={{ left: '320px', top: '50px' }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
