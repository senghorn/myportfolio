import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/home.svg"
import './navigation.styles.scss'
import myResume from '../../assets/Seng_Horn_Rith_Resume.pdf'
import HomeIcon from '@mui/icons-material/Home';


const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <HomeIcon  style={{ fontSize: 48 }}/>
        </Link>
        <div class="container">
          <div class="neon">Seng</div>
          <div class="flux">Rith</div>
        </div>
        <div className="nav-links-container">
          <a href={myResume} className="resume" target={"_blank"} rel="noreferrer">My Resume</a>
          <Link className="nav-link" to="/aboutme">
            About Me
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
