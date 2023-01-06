import "./footer.styles.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className="footer-container">
            <hr className=".footer-hr"></hr>
            <div className="footer-content-container">
                <div className='contact-container'>
                    <div className='title'>
                        Contacts
                    </div>
                    <br />
                    <br />
                    <div className='contact-list'>
                        <div>
                            <a href={'https://github.com/senghorn'} target={"_blank"} rel="noreferrer"><GitHubIcon style={{ fontSize: 36 }} /></a>
                            <a href={'https://www.linkedin.com/in/seng-horn-rith-550991187/'} target={"_blank"} rel="noreferrer"><LinkedInIcon style={{ fontSize: 36 }} /></a>
                            <a href={'https://twitter.com/sengrth'} target={"_blank"} rel="noreferrer"><TwitterIcon style={{ fontSize: 36 }} /></a>
                            <a href={'mailto:sun_rsh@outlook.com'} target={"_blank"} rel="noreferrer"><EmailIcon style={{ fontSize: 36 }} /></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Footer;