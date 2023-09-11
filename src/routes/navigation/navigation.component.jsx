import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import './navigation.styles.scss'
import myResume from '../../assets/Seng_Horn_Rith_Resume.pdf'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/portfolio">
          <HomeIcon style={{ fontSize: 64 }} />
        </Link>
        <div class="container">
          <div class="neon">Seng</div>
          <div class="flux">Rith</div>
        </div>
        <div className="nav-links-container">
          <a href={myResume} className="resume" target={"_blank"} rel="noreferrer">My Resume</a>
          <Link className="nav-link" to="/portfolio/skills">
            Skills
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
