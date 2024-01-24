import React from "react";
import quotes from "../../utils/quotes";

const qoute = quotes[Math.floor(Math.random() * (quotes.length + 1))];

const Quotes = () => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: qoute,
            }}
            className={"mt-5 text-xl whitespace-break-spaces"}
        ></div>
    );
};

export default Quotes;
