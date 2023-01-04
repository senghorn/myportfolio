import { useParams } from 'react-router-dom';

import './project.styles.scss'

const props = {
  "resume":{
    "title":"About Me",
    "descriptions":[
      "Senior Undergraduate at the University of Utah pursuing a Bachelor's in Computer Science",
      "Interests: Machine Learning, AI and Security",
      "I like sharing my knowledge with others..!",
      "Lastly, I enjoy challenging myself with hard problems. I have a strong belief in hard work. And I mean it!"
    ],
    "figures":[
      
      ""
    ]
    ,
    "logos":[
      "https://i.ibb.co/qnX3fMD/Ulogo.jpg",
    ]
  },
  "taportal":{
    "title": "TA Portal Project",
    "descriptions": [
      "ASP Net Web Application",
      "MySQL Database",
    ],
    "figures":[
      "https://i.ibb.co/9c2JfSy/View-Application.png"
    ]
  },
  "capstone":{
    "title": "Capstone: CareCoord App",
    "descriptions":[
      "Application that allows people to easily coordinate caretaking tasks",
      "Frontend: React Native, Expo",
      "Backend: Express.js",
      "Database: MySQL(AWS RDS)",
      "Details of the app: https://docs.google.com/document/d/11AryL_tiAmfCnCueabXaWSxNrXtjPkBVMe-r-hu-zhQ"
    ],
    "figures":[

    ]
  }

}


const Project = () => {
    const { id } = useParams();
    const values = props[id];

    if (values == null){
      return(
        <div>
          No Page Found
        </div>
      )
    }

    return (
      <div className='project'>
        <div className='title title-bg'>
          {values["title"]}
        </div>
        <div className='description-container'>
          <div className='description'>
            {values["descriptions"].map((description, index) => {
              return <li key={index}>{description}</li>;
            })}
          </div>
        </div>
        
        <div className='image-container'>
          {values["figures"].map((figure, index)=>{
            return <img className='image' src={figure} alt={index}/>
          })}
        </div>
      </div>
    );
  };
export default Project;