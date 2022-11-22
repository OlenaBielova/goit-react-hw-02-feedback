import React from "react";

export const Statictics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className="statistics">
        {/* <h3 className="statistics-heading">Statistics</h3> */}
        <ul className="statistics-list">
            <p className="statistics-item">Good: {good}</p>
            <p className="statistics-item">Neutral: {neutral}</p>
            <p className="statistics-item">Bad: {bad}</p>
            <p className="statistics-item">Total: {total}</p>
            <p className="statistics-item">Positive feedback: {positivePercentage}%</p>
        </ul>
    </div>
);
