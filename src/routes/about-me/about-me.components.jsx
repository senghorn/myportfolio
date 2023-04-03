import './about-me.styles.scss'


const AboutMe = () => {


    return (
        <div>
            <div className='about-me-container'>
                <div className='about-me-box'>
                    <div className='title-style'>About Me</div>
                    <div className='name'>Seng Horn Rith</div>
                    <br />
                    <p>
                        I am current a senior undergraduate student at the University of Utah studying Computer Science.
                        <br />
                        I'm excited to graduate and finally enter the real world (no more all-nighters cramming for exams, yay!).
                        <br />
                        <br />
                        I have experience developing full stack <b>web and mobile</b> applications using technologies like <b>React,
                            ReactNative, JavaScript, HTML, MySQL, and Node</b> (more details on my resume).
                        <br />
                        <br />
                        I have a wide interests in tech, I'm a <b>machine learning </b> and  <b>cyber security</b> enthusiast.
                        I also like to stay active by lifting weights and running (because if I don't, my chair
                        might start calling me a "couch potato").
                    </p>
                </div >
                <img src="https://i.ibb.co/WFN8xhT/y.jpg" alt="Photograph" border="0"></img>
            </div>
        </div>
    );
};

export default AboutMe;