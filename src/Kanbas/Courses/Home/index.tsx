import ModuleList from '../Modules/List';
import Status from './Status';

function Home() {
  return (
    <>
      <div className="d-flex">
        {/* <!-- course modules --> */}
        <div className="col-9 wd-course-home-modules">
          <h2>Home</h2>
          <ModuleList />
        </div>
        {/* <!-- course status --> */}
        <div
          className="flex-fill me-2 d-none d-lg-block wd-course-status"
          style={{ marginLeft: '30px' }}
        >
          <Status />
        </div>
      </div>
    </>
  );
}

export default Home;
