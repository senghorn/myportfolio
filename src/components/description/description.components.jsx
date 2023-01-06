import "./description.styles.scss"


const Description = () => {
    return (
        <div className="project-description">
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

export default Description;