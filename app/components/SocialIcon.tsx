import { SiGithub, SiFacebook, SiLinkedin } from "react-icons/si";

export default function SocialIcon({
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
