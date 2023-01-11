import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  UserPlusIcon,
  ChevronDoubleDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Catergories from "../components/Catergories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-14">
      <View className="flex-row justify-between  ">
        <View className="flex-row pl-3">
          <Image
            source={{
              uri: "https://e7.pngegg.com/pngimages/987/35/png-clipart-deliveroo-round-logo-tech-companies-thumbnail.png",
            }}
            className="h-10 w-10 rounded-full object-cover "
          />
          <View className="flex flex-row justify-between">
            <View className="mx-4">
              <Text className="font-normal text-gray-500">Deliver Now</Text>
              <Text className="font-bold text-base">
                Current Location
                <ChevronDoubleDownIcon size={20} color="#00c1b2" />
              </Text>
            </View>
          </View>
        </View>
        <View className="pr-3">
          <UserPlusIcon size={30} color="#00c1b2" />
        </View>
      </View>

      <View className="flex-row  items-center  space-x-2  m-4">
        <View className="flex-row flex-1 items-center  bg-[#eaeaea] space-x-2 py-2 px-2 my-2 rounded-sm">
          <MagnifyingGlassIcon size={20} color="black" className="px-3" />
          <TextInput
            placeholder="Resturants and Cusiens"
            keyboardType="default"
            className="font-light text-sm px-2 flex-1 text-black  "
          />
        </View>
        <AdjustmentsHorizontalIcon
          size={25}
          color="#00c1b2"
          className="px-3 align-middle justify-center"
        />
      </View>

      <ScrollView className="bg-gray-100 mb-32">
        <Catergories />
        <FeaturedRow
        id="1"
          title="Featured"
          description="Paid placements for your partners"
        /> 
         <FeaturedRow
         id="2"
          title="Tasty Discounts"
          description="Paid placements for your partners"
        />  
         <FeaturedRow
         id="3"
          title="Offers near you"
          description="Paid placements for your partners"
        />
        <FeaturedRow
         id="4"
          title="Special Pizza Offer"
          description="Paid placements for your partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
