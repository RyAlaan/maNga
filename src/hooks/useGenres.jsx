import { useEffect, useState } from "react";
import { getGenres } from "../services/hero.service";

export const useGenres = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getGenres((data) => {
            setGenres(data.data);
        })
    })

    return genres
};
