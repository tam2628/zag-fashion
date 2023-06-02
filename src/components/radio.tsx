import classNames from "classnames";
import { useEffect, useState } from "react";

export type RadioOption = { key: string; value: string };

export type RadioProps = {
  options: RadioOption[];
  initial?: string;
  onChange?: (value: string) => void;
};

export default function Radio({ options, initial, onChange }: RadioProps) {
  const [value, setValue] = useState<string>(initial ?? "");

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  return (
    <div className="flex space-x-3 ">
      {options.map((option, index) => (
        <button
          key={`${option.key}-${index}`}
          onClick={() => setValue(option.key)}
          className={classNames(
            "flex items-center justify-center rounded-full p-4 border-zag-gray text-zag-gray border-zag-1 w-10 h-10 max-[280px]:w-8 max-[280px]:h-8",
            { "bg-black": value === option.key }
          )}
        >
          <span
            className={classNames(
              "font-bold text-sm max-[280px]:text-xs",
              {
                "text-white border-black": value === option.key,
              },
              { "text-zag-gray-1": value !== option.key }
            )}
          >
            {option.key}
          </span>
        </button>

        // max-[280px]:p-1
      ))}
    </div>
  );
}
