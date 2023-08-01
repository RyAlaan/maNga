import axios from "axios";

export const getPopular = (callback) => {
  axios
    .get("https://api.jikan.moe/v4/manga?order_by=popularity")
    .then((res) => {
      const firstFiveManga = res.data;
      callback(firstFiveManga);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getGenres = (callback) => {
  axios
    .get("https://api.jikan.moe/v4/genres/manga?filter=genres")
    .then((res) => {
      const genres = res.data;
      callback(genres);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPublishing = (callback) => {
  axios
    .get("https://api.jikan.moe/v4/manga?status=publishing&sfw")
    .then((res) => {
      const publishing = res.data;
      callback(publishing);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getComplete = (callback) => {
  setTimeout(() => {
    axios
      .get("https://api.jikan.moe/v4/manga?status=complete&sfw")
      .then((res) => {
        const complete = res.data;
        callback(complete);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 3000);
};

export const getUpcoming = (callback) => {
  setTimeout(() => {
    axios
      .get("https://api.jikan.moe/v4/manga?status=upcoming&sfw")
      .then((res) => {
        const upcoming = res.data;
        callback(upcoming);
        console.log(upcoming);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 1000);
};

export const getRating = (callback) => {
  setTimeout(() => {
    axios
      .get("https://api.jikan.moe/v4/manga?order_by=score&page=2590")
      .then((res) => {
        const rating = res.data;
        callback(rating);
      })
      .then((err) => {
        console.log(err);
      });
  }, 2000);
};

export const getMangaDetails = (id, callback) => {
  axios
    .get(`https://api.jikan.moe/v4/manga/${id}/full`)
    .then((res) => {
      const mangaDetails = res.data;
      callback(mangaDetails);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSearchManga = (q, page, callback) => {
  axios
    .get(`https://api.jikan.moe/v4/manga?q=${q}&page=${page}&sfw`)
    .then((res) => {
      const searchManga = res.data;
      callback(searchManga);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getGenreList = (id, page, callback) => {
  axios
    .get(`https://api.jikan.moe/v4/manga?genres=${id}&page=${page}`)
    .then((res) => {
      const genreList = res.data;
      callback(genreList);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMangaAll = (page, callback) => {
  axios
    .get(`https://api.jikan.moe/v4/manga?page=${page}&order_by=title`)
    .then((res) => {
      const mangaAll = res.data;
      callback(mangaAll);
    })
    .catch((err) => {
      console.log(err);
    });
}