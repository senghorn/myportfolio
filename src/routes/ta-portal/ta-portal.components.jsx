import './ta-portal.styles.scss'

const Description = () => {
    return (
        <div className="ta-portal-description">
            <h1>TL;DR (Application Description)</h1>
            <p>Our application, built using ASP.NET and featuring the Identity framework, allows users to perform a variety of tasks depending on their role.</p>
            <ul>
                <li>
                    <span className="highlight">Administrators</span> have the highest level of access and can:
                    <ul>
                        <li>view all applications</li>
                        <li>manage user roles</li>
                        <li>view chart data on course enrollments</li>
                    </ul>
                </li>
                <li>
                    <span className="highlight">Applicants</span> can:
                    <ul>
                        <li>create their own applications for TA positions</li>
                        <li>edit their own applications</li>
                        <li>delete their own applications</li>
                    </ul>
                </li>
                <li>
                    <span className="highlight">Professors</span> can:
                    <ul>
                        <li>view existing applications</li>
                        <li>provide feedback to applicants</li>
                    </ul>
                    <p>However, professors cannot edit the applications themselves.</p>
                </li>
            </ul>
            <p>Overall, this application streamlines the TA application process and makes it easy for administrators, applicants, and professors to access and manage the information they need.</p>
        </div>
    );
}

const Project = () => {

    return (
        <div className='ta-portal-container'>
            <div className='app-link-container'>
                Try my <a href='https://23.22.245.194/' className="resume" target={"_blank"} rel="noreferrer" title="Visit the TA Portal web site"><span className='title-style'>TA Portal</span></a> here!
                TOP SECRET: admin@utah.edu pass:123ABC!@#def
            </div>
            <div className='tech-list'>
                Get ready for the ultimate <b>technology trifecta</b>!
                <li>Our super sleek web application is powered by the cutting-edge <strong>ASP.NET Core 5.0</strong> framework</li>
                <li>A rock-solid <strong>C#</strong> backend holding everything together</li>
                <li>When it comes to storing all of our juicy data, we've got the reliable <strong>MySQL</strong> database on lock</li>
                <li>But don't worry, we're not taking any chances with hosting - we've got the mighty <strong>AWS EC2 Instance</strong> holding down the fort</li>
                <br />
                <i>
                    Trust me, this setup is bulletproof (unless you count all the bullet points on our tech stack).
                </i>
            </div>
            <br />
            <div >
                <Description />
            </div>
            <div class="image-container">
                <div class="box">
                    <img src="https://source.unsplash.com/1000x800" />
                </div>
                <div class="box">
                    <img src="https://source.unsplash.com/1000x802" />
                </div>
                <div class="box">
                    <img src="https://source.unsplash.com/1000x804" />
                </div>
                <div class="box">
                    <img src="https://source.unsplash.com/1000x806" />
                </div>
            </div>

        </div>
    );
};
export default Project;