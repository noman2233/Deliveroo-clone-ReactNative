import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LockOpenIcon } from "react-native-heroicons/solid";
const ResturantCards = ({
  id,
  imgUrl,
  title,
  rating,
  short_description,
  genra,
  dishes,
  long,
  lat,
  location,
}) => {
  return (
    <TouchableOpacity className="bg-white shadow-sm p-3 mr-2   rounded-md">
      <Image
        source={{ uri: imgUrl }}
        className="w-64 h-36 object-cover rounded-md"
      />
      <View className="pt-3 pb-4">
        <Text className="font-bold text-lg pt-1 capitalize">{title}</Text>
        <View className="pt-3 flex-row space-x-3 items-center">
          <StarIcon size={20} color="#00c1b2" />
          <Text className="font-bold  text-gray-500">{rating} </Text>
          <Text className="capitalize font-medium text-gray-500">{genra}</Text>
        </View>
        <View className="pt-3 flex-row space-x-3 items-center">
          <LockOpenIcon size={20} color="#00c1b2" />
          <Text className="font-bold text-gray-500">{rating}</Text>
          <Text className=" font-medium text-gray-500 text-sm capitalize">
            Near by - {location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCards;
