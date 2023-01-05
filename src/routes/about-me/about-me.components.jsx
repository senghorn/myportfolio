import './about-me.styles.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const AboutMe = () => {


    const copy = async () => {
        await navigator.clipboard.writeText("sun_rsh@outlook.com");
        alert('email copied to clipboard');
    }

    return (
        <div>
            <div className='about-me-container'>
                <div className='about-me-box'>
                    <div className='title-style'>About Me</div>
                    <div className='name'>Seng Horn Rith</div>
                    <br/>
                    <p>
                        I am current a senior undergraduate student at the University of Utah studying Computer Science.
                        <br />
                        I'm excited to graduate and finally enter the real world (no more all-nighters cramming for exams, yay!).
                        <br />
                        <br />
                        I have experience developing full stack <b>web and mobile</b> applications using technologies like <b>React,
                            ReactNative, JavaScript, HTML, MySQL, and Node</b> (more details on my resume).
                        <br />
                        <br />
                        In my free time, I'm a <b>machine learning enthusiast</b> and a budding cyber
                        security expert. I also like to stay active by lifting weights and running (because if I don't, my chair
                        might start calling me a "couch potato").
                    </p>
                </div >
                <img src="https://i.ibb.co/WFN8xhT/y.jpg" alt="Photograph" border="0"></img>
            </div>
            <div className='contact-container'>
                <div className='title'>
                    Contacts
                </div>
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
    );
};

export default AboutMe;