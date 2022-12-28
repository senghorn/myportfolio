import { useParams } from 'react-router-dom';
const Project = () => {
    const { id } = useParams();
    return (
      <div>
        This is the project page for item with id: {id}
      </div>
    );
  };
export default Project;