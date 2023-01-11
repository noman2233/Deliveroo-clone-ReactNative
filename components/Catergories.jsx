import { View, Text, ScrollView } from "react-native";
import React from "react";
import CatergoriesCard from "./CatergoriesCard";

const Catergories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CatergoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CatergoriesCard
        imgUrl="https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg"
        title="Testing 2"
      />
      <CatergoriesCard
        imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg"
        title="Testing 3"
      />
      <CatergoriesCard
        imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg"
        title="Testing 3"
      />
      <CatergoriesCard
        imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg"
        title="Testing 3"
      />
    </ScrollView>
  );
};

export default Catergories;
