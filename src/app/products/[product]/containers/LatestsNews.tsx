import Image from "next/image";
const LatestsNews = () => {
  return (
    <div className=" h-[511px] rounded-[8px] shadow-sm">
      <p className="text-[24px] font-medium m-3">Suggested for you</p>
      <div className="flex items-center flex-wrap">
        {Array.from(Array(2)).map((i, x) => {
          return (
            <div
              key={x}
              className="rounded-[8px] m-3 w-[300px] shadow-2xl cursor-pointer"
            >
              <Image
                src={
                  "https://d1pe6f90ru47yo.cloudfront.net/wp-content/uploads/2021/08/27144304/pexels-fauxels-3182811-860x375.jpg"
                }
                alt=""
                width={300}
                height={200}
              />
              <p className="text-[12px] text-[#090914] font-semibold m-3">
                Most popular design systems to learn from in 2022
              </p>
              <p className="text-[#63A87D] m-3">Design Systems</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestsNews;
