import { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import MoviesComponents from "../../components/MoviesComponents";
import { StyleSheet, ScrollView } from "react-native";
import TopMoviesComponents from "../../components/TopMoviesComponent";
import FavouritesComponents from "../../components/FavouritesComponent";
import moviesData from "../../assets/data/moviesData";
import { gql, useQuery } from "@apollo/client";
import { MovieProps } from "../../components/MovieComponent";
import { Text, View } from "../../components/Themed";

const GET_MOVIES = gql`
  query allMovies {
    findAll {
      id
      title
      image
      genre
      imdb
      movieTrailerLink
    }
  }
`;

export default function TabOneScreen() {
  const [searchTitle, setSearchTitle] = useState("");
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>Error...</Text>
      </View>
    );
  }

  // console.log(data?.findAll);
  const moviesDataGraphql = data?.findAll;

  const filteredMovies = moviesDataGraphql.filter((movie: MovieProps) =>
    movie.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent setSearchTitle={setSearchTitle} />

      <MoviesComponents movies={filteredMovies} />
      <TopMoviesComponents movies={filteredMovies} />
      <FavouritesComponents movies={filteredMovies} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
