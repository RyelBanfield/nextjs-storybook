import Image from "next/image";

type Props = {
  avatar: string;
  name: string;
  title: string;
  body: React.ReactNode;
};

const Chat = ({ avatar, name, title, body }: Props) => (
  <div className="h-[212px] w-[375px] rounded-3xl font-mont">
    <div className="h-[154px] rounded-t-3xl bg-[#4643D3] px-[32px] py-[22px]">
      <div className="flex">
        <div className="mr-[15px] mb-[17px] h-12 w-12">
          <Image
            src={avatar}
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full"
          />
        </div>
        <div className="flex grow flex-col">
          <h1 className="text-[18px] font-semibold text-white">{name}</h1>
          <h2 className="text-[14px] font-normal text-white opacity-50">
            {title}
          </h2>
        </div>
        <div>
          <Image src="/iconClose.svg" alt="Close" width={13} height={13} />
        </div>
      </div>

      <div>
        <p className="text-[16px] font-normal text-white">{body}</p>
      </div>
    </div>

    <div className="flex h-[58px] rounded-b-3xl bg-white px-[32px]">
      <input
        type="text"
        className="h-full w-full text-[15px] text-[#AFAFBD] focus:outline-none"
        placeholder="Type your message..."
      />
      <button
        type="button"
        className="text-[15px] font-semibold text-[#5856D7]"
      >
        Send
      </button>
    </div>
  </div>
);
export default Chat;
