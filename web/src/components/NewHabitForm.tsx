import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";
import { api } from "../lib/axios";

const avaibleWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sabado",
];

export function NewHabitForm() {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      return alert("Algo deu errado!");
    }

    await api.post("habit", {
      title,
      weekDays,
    });

    setTitle("");
    setWeekDays([]);

    alert("Habito criado com sucesso!");
  }

  function handleToogleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const newWeekDaysWithRemovedOne = weekDays.filter(
        (day) => day !== weekDay
      );

      setWeekDays(newWeekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay];

      setWeekDays(weekDaysWithAddedOne);
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6 ">
      <label htmlFor="title" className="font-semibold leading-tight ">
        Qual é o seu comprometimento?
      </label>
      <input
        type="text"
        id="title"
        placeholder="ex..: Éxercicios, Beber água, etc..."
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>

      <div className="flex flex-col gap-3 mt-3">
        {avaibleWeekDays.map((weekDay, i) => {
          return (
            <Checkbox.Root
              className="flex items-center gap-3 group"
              onCheckedChange={() => handleToogleWeekDay(i)}
              key={weekDay}
              checked={weekDays.includes(i)}
            >
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>
              <span className="text-white leading-tight group-data-[state=checked]:text-zinc-400">
                {weekDay}
              </span>
            </Checkbox.Root>
          );
        })}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
