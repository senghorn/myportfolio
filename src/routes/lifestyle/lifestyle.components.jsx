import './lifestyle.styles.scss';
import ImageContainer from "../../components/image-container/image-container.components";

const LifeStyle = () => {
    const images = [
        { src: 'https://source.unsplash.com/1000x800', alt: 'Image 1' },
        { src: 'https://source.unsplash.com/1200x900', alt: 'Image 2' },
        { src: 'https://source.unsplash.com/1400x700', alt: 'Image 3' },
        { src: 'https://source.unsplash.com/1400x702', alt: 'Image 4' },
    ];

    return (<div className='lifestyle-container'>
        <div>
            <span className='page-title-style'>LifeStyle App</span>
        </div>
        I apologize for the inconvenience, but it looks like the developer
        in charge of this project was a little too busy living their best life to set up
        the server.
        <br/>
        <br/>
        In an attempt to make up for my misdeeds, I present to you a collection of beautiful
        images that I can only hope will distract you from the fact that I totally just
        stole them from Unsplash. Just kidding! (But seriously, please don't report me for plagiarism.)
        <ImageContainer images={images} />
    </div>);
}

export default LifeStyle;