import './tech-item.styles.scss';

const TechItem = ({ name, time }) => {
    return (
        <div className='tech-item'>
            {name}
        </div>
    )
}

export default TechItem;