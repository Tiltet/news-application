import React from "react";
import CreatContext from "../../context/context";

// КОНТЕКСТ ДЛЯ КОНКРЕТНОЙ СТРАНИЦЫ
export const newsPageLink = () => {
    const { setIndex } = React.useContext(CreatContext);

    return (item) => {
        console.log(item);
        setIndex(item);
    };
};
