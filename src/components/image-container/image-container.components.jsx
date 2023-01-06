import "./image-container.styles.scss"

const ImageContainer = ({ images }) => {
    return (
        <div className="main-container">
            <div class="image-container">
                {images.map((image) => (
                    <div class="box">
                        <img alt={image.alt} src={image.src} />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ImageContainer;