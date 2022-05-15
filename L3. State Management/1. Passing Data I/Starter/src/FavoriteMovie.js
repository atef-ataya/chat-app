import React from 'react';

const FavoriteMovie = ({ users, profiles, movies }) => {
  return (
    <div>
      <p>Favorite Movie is:</p>
      {profiles.map((profile) => {
        const userName = users[profile.userID].name;
        const favMovieName = movies[profile.favoriteMovieID].name;

        return (
          <li key={profile.id}>
            <p>{`${userName}'s favorite Movie is ${favMovieName}.`}</p>
          </li>
        );
      })}
    </div>
  );
};

export default FavoriteMovie;
