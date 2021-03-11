import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return <div>
        <b>Страница не найдена</b>
        <div>
            <Link to="/">Главная страница</Link>
        </div>
    </div>;
};

export { NotFound };