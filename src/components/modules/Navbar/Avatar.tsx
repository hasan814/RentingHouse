import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="avatar"
      priority
      src={"/avatar.png"}
    />
  );
};

export default Avatar;
