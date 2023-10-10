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
    <div className="grid grid-cols-6 text-textshade text-base md:text-lg content-start">
      <div
        className={`${gradPercent} col-span-2 sm:col-span-3 h-5 bg-gradient-to-r from-transparent ${color} justify-self-end`}
      ></div>

      <div className="col-span-4 sm:col-span-3 grid grid-cols-8">
        <span className="ml-2 text-sm sm:text-base col-span-2 md:col-span-1">
          {percent}
        </span>

        <span className="text-textshade text-opacity-80 font-serrat col-span-6 md:col-span-7 ml-3 md:ml-6 lg:ml-3">
          {text}
        </span>
      </div>
    </div>
  );
}
