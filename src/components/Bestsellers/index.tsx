import Bestseller from "../Bestseller";

const Bestsellers = ({ items }) => (
  <div className="h-[498px] w-[375px] rounded-3xl bg-white p-[32px]">
    <h1 className="mb-[24px] font-mont text-2xl font-semibold">Bestsellers</h1>
    <div>
      {items.map((item) => (
        <div key={item.title} className="mb-[15px]">
          <Bestseller {...item} />
        </div>
      ))}
    </div>
  </div>
);

export default Bestsellers;
