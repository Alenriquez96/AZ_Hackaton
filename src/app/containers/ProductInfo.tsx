import Text from "@/app/components/Text";
import { Button } from "@nextui-org/react";

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
    <div className="p-5 sm:p-10 [&>p]:py-3 [&>button]:my-3 max-w-[1000px] ">
      <p className="font-medium text-[21px] leading-[22px] text-[#344054]">
        {productInfo.name}
      </p>
      <Text style={{ fontSize: "60px" }}>{productInfo.subTitle}</Text>
      <p className="text-[#667085] font-normal text-[20px]">
        {productInfo.description}
      </p>
      {/* {productInfo.productInfo.map((info) => (
        <p>{info.info}</p>
      ))} */}
      <Button color="primary" size="lg" radius="full" variant="solid">
        Get Started
      </Button>
    </div>
  );
};

export default ProductInfo;
