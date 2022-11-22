import React from "react";

export const SectionTitle = ({ title, children }) => (
    <section className="section-title">
        <h3>{title}</h3>
        {children}
    </section>
)