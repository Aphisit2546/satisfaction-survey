import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, onRatingChange, question, required = true }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating-container">
            <div className="question-text">
                {question}
                {required && <span className="required">*</span>}
            </div>
            <div className="stars-wrapper">
                {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                        <button
                            key={index}
                            type="button"
                            className="star-button"
                            onClick={() => onRatingChange(starValue)}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(0)}
                        >
                            <FaStar
                                className="star-icon"
                                color={starValue <= (hover || rating) ? '#fbbf24' : '#e2e8f0'}
                                size={42}
                            />
                        </button>
                    );
                })}
                <span className="rating-text">
                    {rating > 0 ? `${rating} ดาว` : 'กรุณาเลือก'}
                </span>
            </div>
        </div>
    );
};

export default StarRating;