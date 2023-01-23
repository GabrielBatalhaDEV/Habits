import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <Progress.Root
      className="h-3 rounded-xl bg-zinc-700 w-full mt-4"
      value={progress}
    >
      <Progress.Indicator
        className="h-3 rounded-xl bg-violet-600"
        style={{
          width: `${progress}%`,
        }}
      ></Progress.Indicator>
    </Progress.Root>
  );
}
