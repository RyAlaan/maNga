import { useEffect, useState } from "react";
import { getPublishing } from "../services/hero.service";

export const useComplete = () => {
  const [publishes, setPublishes] = useState([]);

  useEffect(() => {
    getPublishing((data) => {
      setPublishes(data.data);
    });
  }, []);

  return publishes;
};
