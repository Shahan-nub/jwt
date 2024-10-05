export default function Instruments({ Instruments }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-base xl:text-xl text-slate-400">
        🔭 Instruments
      </h1>
      <div className="CAPTION flex flex-col gap-2 max-md:gap-1 text-sm xl:text-sm">
        {Instruments.map((ins) => {
          return (
            <div className="" key={ins.instrument}>
              {ins.instrument}
            </div>
          );
        })}
      </div>
    </div>
  );
}
