import { useSearchParams } from "expo-router";
import DetailedScreenComponent from "../../components/DetailedScreenComponent";
import moviesData from "../../assets/data/moviesData";
import { Text } from "../../components/Themed";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE_BY_ID = gql`
  query movieById($id: Int!) {
    findOne(id: $id) {
      id
      title
      image
      genre
      imdb
      movieTrailerLink
      description
    }
  }
`;

const Movie = () => {
  const { id } = useSearchParams();
  // console.warn(id);

  const { data, loading, error } = useQuery(GET_MOVIE_BY_ID, {
    variables: { id: Number(id) },
  });

  const movie = data?.findOne;

  //const movie = moviesData.find((m) => m?.id === id);

  if (!movie) {
    return <Text>Movie {id} not found</Text>;
  }

  return <DetailedScreenComponent movie={movie} />;
};

export default Movie;
