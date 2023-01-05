import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss'
import myResume from '../../assets/Seng_Horn_Rith_Resume.pdf'
import HomeIcon from '@mui/icons-material/Home';
import logo from "../../assets/cat.ico";
import { borderRadius } from "@mui/system";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="Logo" style={{width:70, height:70, borderRadius:20 }}/>
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
