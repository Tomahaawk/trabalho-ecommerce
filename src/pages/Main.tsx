import React from 'react';
import { Container } from 'semantic-ui-react';
// @ts-ignore
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../assets/css/Main.css';

const Main = () => {
    return (
        <section>
            <h1>Página principal</h1>
            <Container>
                <CarouselProvider
                    className='relative-wrapper'
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={3}
                    isPlaying>
                    <Slider>
                        <Slide index={0}><img className='slide-img' src={require('../assets/images/galaxyS7.jpg')}></img></Slide>
                        <Slide index={1}><img className='slide-img' src={require('../assets/images/galaxyS7.jpg')}></img></Slide>
                        <Slide index={2}><img className='slide-img' src={require('../assets/images/galaxyS7.jpg')}></img></Slide>
                    </Slider>
                    <ButtonBack className='btn-float-left'>Back</ButtonBack>
                    <ButtonNext className='btn-float-right'>Next</ButtonNext>
                </CarouselProvider>
            </Container>
        </section>
    );
};

export default Main;
