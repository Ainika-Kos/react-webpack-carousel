import React, { useState } from 'react';
import { slides, maxLength } from '../../data/sliderData';
import Slide from '../Slide/Slide';
import Button from '../Button/Button';
import './Slider.css';

const Slider = () => {

    const [translate, setTranslate] = useState(0);
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    const previousSlideHandler = () => {
        translate === 0 ? setTranslate(maxLength) : setTranslate(translate + 100);
    };

    const nextSlideHandler = () => {
        translate === maxLength ? setTranslate(0) : setTranslate(translate - 100);
    };


    const handleTouchStart = (event: React.TouchEvent) => {
        setTouchStart(event.targetTouches[0].clientX);
    };

    const handleTouchMove = (event: React.TouchEvent) => {
        setTouchEnd(event.targetTouches[0].clientX);
    };

    const mouseDownHandler = (event: React.MouseEvent) => {
        setTouchStart(event.clientX);
    };

    const mouseMoveHandler = (event: React.MouseEvent) => {
        setTouchEnd(event.clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 150) {
            nextSlideHandler();
        }

        if (touchStart - touchEnd < -150) {
            previousSlideHandler();
        }
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
                                touchStartHandler={(e: React.TouchEvent) => handleTouchStart(e)}
                                touchMoveHandler={(e: React.TouchEvent) => handleTouchMove(e)}
                                touchEndHandler={() => handleTouchEnd()}
                                mouseDownHandler={(e: React.MouseEvent) => mouseDownHandler(e)}
                                mouseMoveHandler={(e: React.MouseEvent) => mouseMoveHandler(e)}
                                mouseUpHandler={() => handleTouchEnd()}
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