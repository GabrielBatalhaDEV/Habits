import { TouchableOpacity, View } from "react-native";

export function Checkbox() {
  return (
    <TouchableOpacity className="flex-row mb-2 items-center">
      <View className="h-8 bg-green-500 rounded-lg"></View>
    </TouchableOpacity>
  );
}
