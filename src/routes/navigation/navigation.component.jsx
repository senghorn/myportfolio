import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../assets/home.svg"
import './navigation.styles.scss'
import myResume from '../../assets/Seng_Horn_Rith_Resume.pdf'
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <CrownLogo/>
        </Link>
        <div className="nav-title">
          <div className="name">Seng Horn Rith</div>
        </div>
        <div className="nav-links-container">
          <a href={myResume} className="resume" target={"_blank"} rel="noreferrer">My Resume</a>
          <Link className="nav-link" to="/project/resume">
            About Me
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
