import { View, Text, ScrollView } from "react-native";
import { Header } from "../components/Header";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning-";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const datesFromYearsStart = generateDatesFromYearBeginning();

const minimunSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill =
  minimunSummaryDatesSizes - datesFromYearsStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, i) => {
          return (
            <Text
              key={`${weekDays}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: DAY_SIZE }}
            >
              {weekDay}
            </Text>
          );
        })}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearsStart.map((date) => {
            return <HabitDay key={date.toISOString()} />;
          })}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, i) => {
              return (
                <View
                  key={i}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                ></View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
