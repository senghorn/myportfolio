import './capstone.styles.scss'
import ImageContainer from '../../components/image-container/image-container.components'

const Capstone = () => {
    const images = [
        { src: 'https://i.ibb.co/6g0PPgg/OnOpen.png', alt: 'On open screen' },
        { src: 'https://i.ibb.co/yhykh42/Authentication.png', alt: 'Google Authentication' },
        { src: 'https://i.ibb.co/7Q8fhWJ/Notes.png', alt: 'Notes' },
        { src: 'https://i.ibb.co/j5pHy9q/Chat.png', alt: 'Group chat' },
        { src: 'https://i.ibb.co/B3pYFdh/Calendar.png', alt: 'Calendar' },

    ];

    return (<div className='capstone-container'>
        <div>
            <span className='page-title-style'><a href='https://www.youtube.com/watch?v=qvnKpLGQH4M'>Capstone: CareCoord Mobile App</a></span>
        </div>
        <br />
        <br/>
        <div className='tech-list'>
            Get ready for the ultimate <b>technology trifecta</b>(again?)!
            <br />
            <li><strong>Front-end:</strong> <em>React Native</em>, <em>Expo library</em> (a tried-and-true combination for a smooth and snappy user experience)</li>
            <li><strong>Back-end:</strong> <em>Express.js</em>, hosted on AWS EC2 (because sometimes you just need to let your backend do the talking)</li>
            <li><strong>Database:</strong> <em>MySQL</em>, hosted on a shiny AWS RDS instance (the heart and soul of any app)</li>
            <li><strong>Bonus:</strong> CareCoord app is currently a digital hermit, living in isolation on the devs'
                computer and waiting for the chance to spread its wings and fly onto the World Wide Web.
                But don't worry, it's just a matter of time before it takes the internet by storm! In the meantime,
                be sure to check out the below screenshots of the application in this page to see a sneak peek of
                its awesomeness. </li>
        </div>
        <p>** There are four core developers working on CareCoord, which is expected to be deployed by the end of spring 2023.</p>
        <text>Responsibilities: Frontend(Seng & Ben ) , Backend(Aaron & Brynnli)</text>
        <br />
        <br />
        <br />
        <div>
            <div className="project-description">
                <h1>TL;DR (Application Description)</h1>
                <p>Introducing CareCoord, the ultimate app for family caretakers juggling multiple tasks and visits for their elderly relatives.</p>
                <p>With CareCoord, you can:</p>
                <li>Schedule and coordinate tasks with our in-house solution</li>
                <li>Centralize information with our messaging system and notes section</li>
                <li>Make sure you don't forget any crucial household chores or wellness checks with our checklist feature</li>
                <li>Keep an eye on your elderly relative's health with our vitals tracking feature</li>
                <p>So why wait? Say goodbye to sticky notes and hello to CareCoord, the app that makes coordinating care for elderly relatives a little less stressful (well, at least it'll give you something to laugh about). </p>

            </div>
            <ImageContainer images={images} />
        </div>
    </div>);
}

export default Capstone;