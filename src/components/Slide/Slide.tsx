import React, { FC } from 'react';
import './Slide.css';

type SlideProps = {
    id: number;
    title: string;
    category: string;
    author: string;
    translate: string
}

const Slide: FC<SlideProps> =
    ({ id, title, category, author, translate }) => {

        const imageUrl = `https://picsum.photos/id/${id}/200/200?grayscale`;
        const translateOption = `translateX(${translate}%)`

        return (
            <div
                className="slide"
                style={{transform: translateOption}}
            >
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