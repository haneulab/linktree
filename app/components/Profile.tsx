import Image from "next/image";

export default function Profile({
  name,
  avatar,
}: {
  name: string;
  avatar: string;
}) {
  return (
    <>
      <Image
        className="rounded-full"
        src={avatar}
        alt={name}
        width={96}
        height={96}
      />
      <h1 className="font-semibold mt-4 mb-8 text-xl">{name}</h1>
    </>
  );
}
