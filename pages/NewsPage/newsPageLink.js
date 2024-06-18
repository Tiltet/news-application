import React from "react";
import CreatContext from "../../context/context";

export const newsPageLink = () => {
    const { setIndex } = React.useContext(CreatContext);

    return (item) => {
        console.log(item);
        setIndex(item);
    };
};
