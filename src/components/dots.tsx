type DotProps = {
  active?: boolean;
};
function Dot({ active }: DotProps) {
  if (active) {
    return (
      <div
        style={{ height: 16, width: 16 }}
        className="rounded-full border-white border flex items-center justify-center"
      >
        <div
          style={{ height: 8, width: 8 }}
          className="rounded-full bg-white"
        />
      </div>
    );
  }

  return (
    <div style={{ height: 8, width: 8 }} className="rounded-full bg-white" />
  );
}

type DotsProps = {
  active?: number;
  length: number;
};

export default function Dots({ active, length }: DotsProps) {
  return (
    <div className="flex space-x-3 items-center">
      {Array.from(Array(length)).map((_, i) => (
        <Dot active={active === i + 1} />
      ))}
    </div>
  );
}
