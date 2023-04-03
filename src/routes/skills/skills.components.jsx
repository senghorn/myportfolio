import './skills.styles.scss'
import TechItem from '../../components/tech-item/tech-item.components';

const Skills = () => {
    return (
        <div className='container'>
            <div className='category'>
                <div className='title'>
                    Languages
                </div>
                <div className='tech-list'>
                    <TechItem name={'Java'} />
                    <TechItem name={'C#'} />
                    <TechItem name={'JavaScript'} />
                    <TechItem name={'SQL'} />
                    <TechItem name={'C++'} />
                    <TechItem name={'Python'} />
                </div>
            </div>
            <div className='category'>
                <div className='title'>
                    Backend
                </div>
                <div className='tech-list'>
                    <TechItem name={'Node Js'} />
                    <TechItem name={'Express Js'} />
                    <TechItem name={'MySQL'} />
                    <TechItem name={'MariaDB'} />
                    <TechItem name={'Bootstrap'} />
                </div>
            </div>
            <div className='category'>
                <div className='title'>
                    Frontend
                </div>
                <div className='tech-list'>
                    <TechItem name={'ASP .NET Core MVC'} />
                    <TechItem name={'React Js'} />
                    <TechItem name={'ReactNative Js'} />
                    <TechItem name={'Expo Js'} />
                    <TechItem name={'JavaScript'} />
                    <TechItem name={'HTML'} />
                    <TechItem name={'Bootstrap'} />
                </div>
            </div>
            <div className='category'>
                <div className='title'>
                    Others
                </div>
                <div className='tech-list'>
                    <TechItem name={'JWT'} />
                    <TechItem name={'Jest Js'} />
                    <TechItem name={'Docker'} />
                    <TechItem name={'Git'} />
                    <TechItem name={'AWS EC2'} />
                    <TechItem name={'AWS RDS'} />
                    <TechItem name={'BurpSuite'} />
                </div>
            </div>
        </div>
    );
};

export default Skills;