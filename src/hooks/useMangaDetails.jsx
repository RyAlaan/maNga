import { useEffect, useState } from "react";
import { getMangaDetails } from "../services/hero.service";

const useMangaDetails = (id) => {
  const [data, setData] = useState({});
  const [image, setImage] = useState("")

  useEffect(() => {
    getMangaDetails(id, (data) => {
      setData(data.data);
      setImage(data.data.images.jpg.image_url);
    });
  }, []);

  return { data, image}
};

export default useMangaDetails