import React from "react";

export const FeedbackOptions = ({ onGoodClick, onNeutralClick, onBadClick }) => (
    <div className="feedback">
    <ul className="feedback-list">
        <button className="feedback-button" type="button" onClick={onGoodClick}
        >Good</button>
        <button className="feedback-button" type="button" onClick={onNeutralClick}>Neutral</button>
        <button className="feedback-button" type="button" onClick={onBadClick}>Bad</button>
    </ul>
</div>
);



