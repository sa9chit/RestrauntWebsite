export const Datee = ({ slotData }) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const monthName = new Date().toLocaleString("default", { month: "long" });
  const array = new Array(totalDays).fill("");

  return (
    <div className="bg-gray-400 rounded-[5px]">
      <h1 className="font-semibold tracking-tighter text-center mt-3">
        {monthName}
      </h1>
      <div className="grid grid-cols-6 bg-gray-400 gap-2 rounded-[5px] w-[20vw] px-5 py-3">
        {array.map((_, i) => {
          return (
            <div
              onClick={() => {
                slotData((prev) => ({ ...prev, date: i + 1 }));
              }}
              className="bg-white cursor-pointer font-semibold flex items-center justify-center rounded-2xl w-[30px] h-[30px]"
              key={i}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};
