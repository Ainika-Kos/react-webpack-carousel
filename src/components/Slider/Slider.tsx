import React, { useState } from 'react';
import { slides } from '../../data/sliderData';
import Slide from '../Slide/Slide';
import Button from '../Button/Button';
import './Slider.css';

const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const { id, title, category, author } = slides[activeIndex];

    const previousSlideHandler = () => {
        if (activeIndex === 0) {
            setActiveIndex(slides.length - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        };
    };

    const nextSlideHandler = () => {
        if (activeIndex === slides.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        };
    };

    return (
        <div className="slider">
            <h1>Slider application</h1>
            <div className="slider-wrapper">
                <Button
                    text="Previous"
                    clickHandler={previousSlideHandler}
                />
                <Slide
                    id={id}
                    title={title}
                    category={category}
                    author={author}
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