import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

export function Checkbox() {
  return (
    <TouchableOpacity className="flex-row mb-2 items-center">
      <View className="h-8 bg-green-500 rounded-lg">
        <Feather name="check" size={20} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}
