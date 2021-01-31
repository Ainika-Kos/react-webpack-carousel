import React from 'react';
import { slides } from '../../data/sliderData';
import { SlideType } from '../../types/types';
import Slide from '../Slide/Slide';

const Slider = () => {
    return (
        <div>
            <h1>Slider</h1>
            {slides.map(({ id, title, body, author }) => {
                return (
                    <div key={id}>
                        <Slide
                            id={id}
                            title={title}
                            body={body}
                            author={author}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;