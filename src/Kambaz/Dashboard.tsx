import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpeg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title"> Full Stack software developer </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/math.jpeg" width={200} />
            <div>
              <h5> MAT1234 Math </h5>
              <p className="wd-dashboard-course-title"> Math Class </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/english.jpeg" width={200} />
            <div>
              <h5> ENG1234 English </h5>
              <p className="wd-dashboard-course-title"> English Class </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/science.jpeg" width={200} />
            <div>
              <h5> PHY1234 Science </h5>
              <p className="wd-dashboard-course-title"> Science Class </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/history.jpeg" width={200} />
            <div>
              <h5> HIS1234 History </h5>
              <p className="wd-dashboard-course-title"> History Class </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/coding.jpeg" width={200} />
            <div>
              <h5> CS1733 Coding </h5>
              <p className="wd-dashboard-course-title"> Coding 101 Class </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/band.jpeg" width={200} />
            <div>
              <h5> BAND1234 Band </h5>
              <p className="wd-dashboard-course-title"> Band Class </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
