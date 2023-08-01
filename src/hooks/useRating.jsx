import { useEffect, useState } from "react";
import { getRating } from "../services/hero.service";

export const useRating = () => {
  const [ratings, setRatings] = useState([]);

    useEffect(() => {
      getRating((data) => {
        setRatings(data.data);
      });
    });

  return ratings;
};
