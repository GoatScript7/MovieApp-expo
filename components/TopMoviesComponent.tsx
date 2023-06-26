import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import TopMovieComponent from "./TopMovieComponent";
import moviesData from "../assets/data/moviesData";
import { MovieProps } from "./MovieComponent";

type MoviesComponentsProps = {
  movies: MovieProps[];
};

const TopMoviesComponents = ({ movies }: MoviesComponentsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Top 10 TV Movies</Text>
      <FlatList
        data={movies.slice(8, 12)}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <TopMovieComponent item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  headerText: {
    marginBottom: 10,
    color: "gray",
    marginLeft: 5,
    fontWeight: "500",
    fontSize: 14,
  },
});

export default TopMoviesComponents;
