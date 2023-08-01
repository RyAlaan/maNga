import { useEffect, useState } from "react";
import { getPopular } from "../services/hero.service";

export const usePopulars = () => {
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    getPopular((data) => {
      setPopulars(data.data);
    });
  }, []);

  return populars
};