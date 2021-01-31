import React, { FC } from 'react';
import { SlideType } from '../../types/types';

const Slide: FC<SlideType> =
    ({ title, body, author }) => {

        return (
            <div className="Slide">
                <h1>{title}</h1>
                <h2>{author}</h2>
                <p>{body}</p>
            </div>
        );
    };

export default Slide;