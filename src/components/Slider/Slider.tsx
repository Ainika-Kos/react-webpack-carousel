import React, { useState } from 'react';
import { slides, maxLength } from '../../data/sliderData';
import Slide from '../Slide/Slide';
import Button from '../Button/Button';
import './Slider.css';

const Slider = () => {

    const [translate, setTranslate] = useState(0);

    const previousSlideHandler = () => {
        translate === 0 ? setTranslate(maxLength) : setTranslate(translate + 100);
    };

    const nextSlideHandler = () => {
        translate === maxLength ? setTranslate(0) : setTranslate(translate - 100);
    };

    return (
        <div className="slider">
            <p className="slider__heading">Slider application</p>
            <div className="slider-box">
                {slides.map(({ id, title, category, author }) => {
                    return (
                        <div>
                            <Slide
                                id={id}
                                title={title}
                                category={category}
                                author={author}
                                translate={translate.toString()}
                            />
                        </div>
                    )
                })}
            </div>
            <div className="slider__button-wrapper">
                <Button
                    text="Previous"
                    clickHandler={previousSlideHandler}
                />
                <Button
                    text="Next"
                    clickHandler={nextSlideHandler}
                />
            </div>

        </div>
    );
};

export default Slider;