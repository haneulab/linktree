import Image from "next/image";
import data from "../data.json";
import { SiGithub, SiFacebook, SiLinkedin } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto h-screen">
      <Image
        className="rounded-full"
        src={data.avatar}
        alt={data.name}
        width={96}
        height={96}
      />
      <h1 className="font-semibold mt-4 mb-8 text-xl">{data.name}</h1>
      <ul className="flex flex-col gap-y-4 w-full px-8 mb-16">
        {data.links.map((link, idx) => (
          <LinkCard {...link} key={idx} />
        ))}
      </ul>
      <ul className="flex items-center gap-x-4">
        {data.socials.map((social, idx) => (
          <SocialIcon {...(social as unknown as any)} key={idx} />
        ))}
      </ul>
    </div>
  );
}

function LinkCard({
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

function SocialIcon({
  title,
  href,
}: {
  title: "Github" | "Linkedin" | "Facebook";
  href: string;
}) {
  const titleOptions = {
    Github: <SiGithub />,
    Linkedin: <SiLinkedin />,
    Facebook: <SiFacebook />,
  };

  return (
    <a
      href={href}
      className="text-xl lg:text-2xl transition-all hover:opacity-60"
    >
      {titleOptions[title]}
    </a>
  );
}
