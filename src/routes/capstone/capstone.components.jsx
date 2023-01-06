import './capstone.styles.scss'
import ImageContainer from '../../components/image-container/image-container.components'

const Capstone = () => {

    const images = [
        { src: 'https://source.unsplash.com/1000x800', alt: 'Image 1' },
        { src: 'https://source.unsplash.com/1200x900', alt: 'Image 2' },
        { src: 'https://source.unsplash.com/1400x700', alt: 'Image 3' },
    ];
    
    return (<div className='capstone-container'>
        <div>
            <span className='page-title-style'>Capstone</span>
        </div>
        Project on pause, to be updated soon!
        <div>
            <ImageContainer images={images} />
        </div>
    </div>);
}

export default Capstone;