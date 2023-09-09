type Props = {
  percent: string;
  color: string;
  text: string;
  gradPercent: string;
};

export default function TokenomicsMeter({
  percent,
  color,
  text,
  gradPercent,
}: Props) {
  return (
    <div className="grid grid-cols-7 lg:grid-cols-15 text-textshade text-base md:text-lg">
      <div
        className={`${gradPercent} col-span-3 lg:col-span-7 h-5 bg-gradient-to-r from-transparent ${color} justify-self-end`}
      ></div>

      <span className="ml-2 text-sm sm:text-base">{percent}</span>

      <span className="text-textshade  text-opacity-80 font-mono col-span-3 lg:col-span-7 ml-3 sm:ml-0">
        {text}
      </span>
    </div>
  );
}
