import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
// @ts-ignore
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../assets/css/Main.css';
import { connect } from 'react-redux';
import { productsFetch } from '../actions/index';

export interface IMainProductsState {
    products: string[]
}
class Main extends Component<IMainProductsState> {
    constructor(props: IMainProductsState) {
        super(props);
        this.state = {
          products: []
        };
    }

    componenteWillMount() {
        console.log('mounting...');
    }

    render() {
        return (
            <section>
                <section>
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
                <section>
                    <h1>Mais vendidos</h1>
                    <div className=''>

                    </div>
                </section>
            </section>
        );
    };
}


const mapStateToProps = (state: any) => {
    console.log(state);
    
    // const { products } = state.productsFetch;
    // return { products };
    return [];
};
export default connect(mapStateToProps, {productsFetch}) (Main);
