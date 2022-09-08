import Image from 'next/image';

type Props = {
  url: string;
};

const Avatar = ({ url }: Props) => (
  <div className="flex w-12 rounded-full">
    <Image
      src={url}
      alt="avatar"
      height="100"
      width="100"
      className="rounded-full"
    />
  </div>
);

export default Avatar;
