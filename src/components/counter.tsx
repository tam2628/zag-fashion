import classNames from "classnames";
import { useEffect, useState } from "react";

type CounterProps = {
  initial: number;
  step: number;
  max?: number;
  min?: number;
  onChange?: (val: number) => void;
} & Omit<React.HTMLProps<HTMLDivElement>, "onChange">;

const style = { padding: "2px 15px 2px 15px" };

export default function Counter({
  initial,
  step = 1,
  min = 0,
  max = Infinity,
  onChange,
  className,
}: CounterProps) {
  const [value, setValue] = useState<number>(initial ?? 0);

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  function increment() {
    setValue((value) => (value + step > max ? value : value + step));
  }

  function decrement() {
    setValue((value) => (value - step < min ? value : value - step));
  }

  return (
    <div
      className={classNames(
        "flex rounded-full bg-slate-200 w-fit text-lg items-center ",
        className
      )}
      style={{
        backgroundColor: "#EEEEEE",
      }}
    >
      <button style={style} onClick={decrement}>
        -
      </button>
      <div style={{ padding: "1px" }} className="max-[280px]:text-sm">
        {value}
      </div>
      <button style={style} onClick={increment}>
        +
      </button>
    </div>
  );
}
