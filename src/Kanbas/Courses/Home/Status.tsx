import {
  FaFileImport,
  FaFileExport,
  FaChartBar,
  FaRegBell,
} from 'react-icons/fa';
import { BiTargetLock } from 'react-icons/bi';
import { AiOutlineSound } from 'react-icons/ai';
import { PiNumberCircleFiveFill } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';

function Status() {
  return (
    <>
      <h2>Status</h2>
      <div className="d-grid gap-1 col-12 mx-auto">
        <button className="btn btn-secondary text-start" type="button">
          <FaFileImport /> Import Existing Content
        </button>
        <button className="btn btn-secondary text-start" type="button">
          <FaFileExport /> Import from Commons
        </button>
        <button className="btn btn-secondary text-start" type="button">
          <BiTargetLock />
          Choose Home Page
        </button>
        <button className="btn btn-secondary text-start" type="button">
          <FaChartBar /> View Course Stream
        </button>
        <button className="btn btn-secondary text-start" type="button">
          <AiOutlineSound /> New Announcement
        </button>
        <button className="btn btn-secondary text-start" type="button">
          <FaChartBar /> New Analytics
        </button>
        <button className="btn btn-secondary text-start" type="button">
          <FaRegBell /> View Course Notifications
        </button>
      </div>
      <br />
      <div className="row wd-course-status-calendar">
        <div className="col-5">
          <h6>
            <b>To Do</b>
          </h6>
        </div>
        {/* <div className="col-7">
          <a href="#" className="wd-course-status-calendar-right float-end">
            <i className="fa fa-calendar"></i> View Calendar
          </a>
        </div> */}
      </div>
      <hr />
      <div className="row">
        <div className="col-2">
          <PiNumberCircleFiveFill />
        </div>
        <div className="col-8 wd-course-status-calendar-below">
          {/* <div className="row">
            <a href="">Lecture</a>
          </div> */}
          <div className="row wd-course-status-calendar-below-detail">
            CS4550.12631.202410
          </div>
          <div
            className="
                row
                wd-course-status-calendar-below-detail
                detail-calendar-time
              "
          >
            Sep 7 at 11:45am
          </div>
        </div>
        <div className="col-2">
          <RxCross1 />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <PiNumberCircleFiveFill />
        </div>
        <div className="col-8 wd-course-status-calendar-below">
          {/* <div className="row">
            <a href="">Lecture</a>
          </div> */}
          <div className="row wd-course-status-calendar-below-detail">
            CS4550.12631.202410
          </div>
          <div
            className="
                row
                wd-course-status-calendar-below-detail
                detail-calendar-time
              "
          >
            Sep 11 at 11:45am
          </div>
        </div>
        <div className="col-2">
          <RxCross1 />
        </div>
      </div>
    </>
  );
}

export default Status;
