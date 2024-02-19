const productInfo = {
  name: "MediGuide",
  subTitle: "Your trusted health companion",
  description:
    "MediGuide is committed to providing reliable and easy-to-understand health information to the global community, empowering individuals to make informed decisions about their well-being. With Mediguide, users can navigate their health journey with confidence and peace of mind, knowing that they have a trusted companion by their side.",
  productInfo: [
    {
      info: "Info",
    },
    {
      info: "Info",
    },
    {
      info: "Info",
    },
    {
      info: "Info",
    },
  ],
};

const ProductInfo = () => {
  return (
    <div className="p-10 [&>p]:py-3 [&>button]:my-3 max-w-[1000px] hidden sm:block">
      <p className="font-medium text-[21px] leading-[22px] text-[#344054]">
        {productInfo.name}
      </p>
      <p className="font-bold text-[60px] leading-[76px] text-[#344054]">
        {productInfo.subTitle}
      </p>
      <p className="text-[#667085] font-normal text-[20px]">
        {productInfo.description}
      </p>
      {/* {productInfo.productInfo.map((info) => (
        <p>{info.info}</p>
      ))} */}
      <button className="w-[132px] h-[48px] rounded-[50px] bg-[#313B72] py-[12px] px-[20px] text-white text-[16px]">
        Get Started
      </button>
    </div>
  );
};

export default ProductInfo;
