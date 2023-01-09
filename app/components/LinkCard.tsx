import Image from "next/image";

export default function LinkCard({
  title,
  href,
  image,
}: {
  title: string;
  href: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="relative h-max inline-flex items-center justify-center hover:scale-105 transition-all rounded-md drop-shadow border border-gray-300/50 font-semibold overflow-hidden p-4 bg-gray-50"
    >
      {image && (
        <Image
          className="rounded absolute left-1 top-1"
          src={image}
          alt={title}
          width={48}
          height={48}
        />
      )}
      <span className="text-neutral-700">{title}</span>
    </a>
  );
}
