export default function TitleInfoPair({ title, text1, text2, text3 }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-base xl:text-xl text-slate-400">{title}</h1>
      <div className="CAPTION flex flex-col text-sm xl:text-sm">
        <div className="">{text1}</div>
        <div className="">{text2}</div>
        <div className="">{text3}</div>
      </div>
    </div>
  );
}
