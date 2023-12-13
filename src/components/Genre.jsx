import React, { useEffect } from "react";

const Genre = ({
  genre,
  setGenre,
  setPage,
  type,
  value,
  useGenre,
  setValue,
  setGenreURL,
  fetchTrending,
  Access_key,
}) => {
  const fetchGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${Access_key}&language=en-US`
    );
    const { genres } = await data.json();
    setGenre(genres);
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  //Adding a particular genre to the selected array
  const CategoryAdd = (genres) => {
    //first - select everything that's inside of values using the spread operator
    //second - add those genres that are being sent from the non-selected arrays
    setValue([...value, genres]);
    //removing those genres from the non-selected array that have been added to the selected array.
    setGenre(genre.filter((g) => g.id !== genres.id));
    setGenreURL(useGenre(value));
    setPage(1);
    fetchTrending();
  };

  //removing a particular genre from the selected array
  const CategoryRemove = (genres) => {
    setValue(value.filter((g) => g.id !== genres.id));
    setGenre([...genre, genres]);
    setGenreURL(useGenre(value));
    setPage(1);
    fetchTrending();
  };

  return (
    <>
      <div className="flex flex-wrap">
        {value &&
          value.map((Val) => {
            const { id, name } = Val;
            return (
              <div className="m-2 border-[1px] rounded-2xl" key={id}>
                <button
                  className="text-white px-4 py-2 text-center"
                  onClick={() => CategoryRemove(Val)}
                >
                  {name}
                </button>
              </div>
            );
          })}

        {genre && //if genre exist
          genre.map((Gen) => {
            const { id, name } = Gen;
            return (
              <>
                <div className="m-2" key={id}>
                  <button
                    className="text-slate-300 px-4 py-2 text-center"
                    onClick={() => CategoryAdd(Gen)}
                  >
                    {name}
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Genre;
