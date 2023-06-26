import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import FavouriteComponent from "./FavouriteComponent";
import moviesData from "../assets/data/moviesData";
import { MovieProps } from "./MovieComponent";

type MoviesComponentsProps = {
  movies: MovieProps[];
};

const FavouritesComponents = ({ movies }: MoviesComponentsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Favourites</Text>
      <FlatList
        data={movies.slice(4, 8)}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <FavouriteComponent item={item} />}
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

export default FavouritesComponents;
