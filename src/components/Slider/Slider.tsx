import React, { useState } from 'react';
import { slides, slidesLength, maxLength } from '../../data/sliderData';
import Slide from '../Slide/Slide';
import Button from '../Button/Button';
import './Slider.css';

const Slider = () => {

    const [translate, setTranslate] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const previousSlideHandler = () => {
        translate === 0 ? setTranslate(maxLength) : setTranslate(translate + 100);
        activeIndex === 0 ? setActiveIndex(slidesLength) : setActiveIndex(activeIndex - 1);
    };

    const nextSlideHandler = () => {
        translate === maxLength ? setTranslate(0) : setTranslate(translate - 100);
        activeIndex === slidesLength ? setActiveIndex(0) : setActiveIndex(activeIndex + 1);
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
        if (touchStart - touchEnd > 100) {
            nextSlideHandler();
        }

        if (touchStart - touchEnd < -100) {
            previousSlideHandler();
        }
    };

    const activeIndexHandler = (index: number) => {
        setActiveIndex(index);
        setTranslate(index * -100);
    }

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
            <div className="slider__dots-wrapper">
                {slides.map((_item, index) => {
                    return (
                        <span
                            key={index}
                            className={activeIndex === index ? 'slider__dot active' : 'slider__dot'}
                            onClick={() => activeIndexHandler(index)}
                        >
                        </span>
                    );
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