type Props = {
  title: string;
  date: string;
};

function Title({ title, date }: Props) {
  return (
    <div className="flex items-center w-full">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <h4 className="ml-auto text-sm text-gray-500">{date}</h4>
    </div>
  );
}

export default Title;