import React from 'react';

const Movies = ({ users, profiles, movies }) => {
  let usersByMovie = {};

  profiles.forEach((profile) => {
    const movieID = profile.favoriteMovieID;

    if (usersByMovie[movieID]) {
      usersByMovie[movieID].push(profile.userID);
    } else {
      usersByMovie[movieID] = [profile.userID];
    }
  });
  return <div></div>;
};

export default Movies;
