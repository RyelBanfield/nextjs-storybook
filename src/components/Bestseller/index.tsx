import Image from "next/image";

type Props = {
  title: string;
  brand: string;
  price: string;
  image: string;
  active?: boolean;
};

const Bestseller = ({ title, brand, price, image, active }: Props) => {
  const activeClasses = "flex h-[120px] w-[311px] rounded-3xl bg-[#FEF2EE]";
  const inactiveClasses = "flex h-[120px] w-[311px] rounded-3xl bg-white";

  return (
    <div className={active ? activeClasses : inactiveClasses}>
      <div className="rounded-l-3xl">
        <div className="my-[13px] ml-[18px] mr-[24px] h-[94px] w-[94px]">
          <Image src={image} alt={title} width={200} height={200} />
        </div>
      </div>
      <div className="flex grow flex-col justify-between rounded-r-3xl font-mont">
        <h2 className="mt-[16px] text-[14px] font-semibold text-[#FE805C]">
          {title}
        </h2>
        <h3 className="text-[12px] font-normal text-[#AFAFBD]">{brand}</h3>
        <p className="mb-[24px] text-[14px] font-semibold text-[#12121F]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default Bestseller;
