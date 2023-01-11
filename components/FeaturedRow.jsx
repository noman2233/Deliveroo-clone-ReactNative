import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCards from "./ResturantCards";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-extrabold text-lg">{title}</Text>
        <ArrowRightIcon size={25} color="#00c1b2" />
      </View>
      <Text className="text-sm text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4 "
      >

        <ResturantCards
          id="124"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg"
          title="Special Chicken Offer"
          rating="4.5"
          short_description="Food is any nutrient-rich material consumed or absorbed by humans."
          genra={["Chinese"]}
          dishes="Chicken Tikka"
          long={30}
          lat={20}
          location="Beiging Street 545"
        />
        <ResturantCards
          id="124"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg"
          title="Special Chicken Offer"
          rating="4.5"
          short_description="Food is any nutrient-rich material consumed or absorbed by humans."
          genra={["Chinese"]}
          dishes="Chicken Tikka"
          long={30}
          lat={20}
          location="Beiging Street 545"
        />
        <ResturantCards
          id="124"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg"
          title="Special Chicken Offer"
          rating="4.5"
          short_description="Food is any nutrient-rich material consumed or absorbed by humans."
          genra={["Chinese"]}
          dishes="Chicken Tikka"
          long={30}
          lat={20}
          location="Beiging Street 545"
        />
        <ResturantCards
          id="124"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg"
          title="Special Chicken Offer"
          rating="4.5"
          short_description="Food is any nutrient-rich material consumed or absorbed by humans."
          genra={["Chinese"]}
          dishes="Chicken Tikka"
          long={30}
          lat={20}
          location="Beiging Street 545"
        />  
        <ResturantCards
          id="124"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg"
          title="Special Chicken Offer"
          rating="4.5"
          short_description="Food is any nutrient-rich material consumed or absorbed by humans."
          genra={["Chinese"]}
          dishes="Chicken Tikka"
          long={30}
          lat={20}
          location="Beiging Street 545"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
