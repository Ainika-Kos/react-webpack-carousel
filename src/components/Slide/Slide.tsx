import React, { FC } from 'react';
import './Slide.css';

type SlideProps = {
    id: number;
    title: string;
    category: string;
    author: string;
    translate: string;
    touchStartHandler: (e: React.TouchEvent) => void;
    touchMoveHandler: (e: React.TouchEvent) => void;
    touchEndHandler: () => void;
    mouseDownHandler: (e: React.MouseEvent) => void;
    mouseMoveHandler: (e: React.MouseEvent) => void;
    mouseUpHandler: () => void;
}

const Slide: FC<SlideProps> =
    ({
        id,
        title,
        category,
        author,
        translate,
        touchStartHandler,
        touchMoveHandler,
        touchEndHandler,
        mouseDownHandler,
        mouseMoveHandler,
        mouseUpHandler,
    }) => {

        const imageUrl = `https://picsum.photos/id/${id}/200/200?grayscale`;
        const translateOption = `translateX(${translate}%)`

        return (
            <div
                className="slide"
                style={{ transform: translateOption }}
                onTouchStart={touchStartHandler}
                onTouchMove={touchMoveHandler}
                onTouchEnd={touchEndHandler}
                onMouseDown={mouseDownHandler}
                onMouseMove={mouseMoveHandler}
                onMouseUp={mouseUpHandler}
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