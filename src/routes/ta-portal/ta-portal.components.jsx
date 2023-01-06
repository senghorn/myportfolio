import './ta-portal.styles.scss'
import Description from '../../components/description/description.components';
import ImageContainer from '../../components/image-container/image-container.components';

const Project = () => {
    const images = [
        { src: 'https://source.unsplash.com/1000x800', alt: 'Image 1' },
        { src: 'https://source.unsplash.com/1200x900', alt: 'Image 2' },
        { src: 'https://source.unsplash.com/1400x700', alt: 'Image 3' },
    ];
    return (
        <div className='ta-portal-container'>
            <div className='app-link-container'>
                Try my <a href='https://23.22.245.194/' className="resume" target={"_blank"} rel="noreferrer" title="Visit the TA Portal web site"><span className='page-title-style'>TA Portal</span></a> here!
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
            <Description />
            <ImageContainer images={images} />
        </div>
    );
};
export default Project;