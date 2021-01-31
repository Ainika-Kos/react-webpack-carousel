import React, { FC } from 'react';
import { SlideType } from '../../types/types';
import './Slide.css';

const Slide: FC<SlideType> =
    ({ id, title, category, author }) => {

        const imageUrl = `https://picsum.photos/id/${id}/200/200?grayscale`;

        return (
            <div className="slide">
                <div className="slide__image-wrapper">
                    <img src={imageUrl} className="slide__image" alt={category} />
                </div>
                <div className="slide__header">
                    <p className="slide__category">#{category}</p>
                    <hr className="slide__hr" />
                </div>
                <p className="slider__title">{title}</p>
                <div className="slide__footer-wrapper">
                    <p className="slide__author">{author}</p>
                    <p className="slide__read-more">Read more</p>
                </div>
            </div>
        );
    };

export default Slide;