interface CustomTickerWithProps {
  text: string;
  duration: number;
}
export const CustomTicker = ({ text, duration = '.3s' }: CustomTickerWithProps) => {
  return (
    <div className="relative w-[100%]">
      <div className={`absolute duration-${duration}`}>{text}</div>
    </div>
  );
};
