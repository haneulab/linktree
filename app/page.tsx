/** VERCEL EDGE CONFIG IMPORT */
import { get } from "@vercel/edge-config";
/** COMPONENTS IMPORT */
import SocialIcon from "./components/SocialIcon";
import LinkCard from "./components/LinkCard";
import Profile from "./components/Profile";

/** INTERFACE DECLARATIONS */
interface Link {
  href: string;
  title: string;
  image?: string;
}
interface Social {
  href: string;
  title: string;
}
interface Data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Social[];
}

/** EDGE CONFIG DYNAMIC FETCHING ALLOWED BY FORCE */
export const dynamic = "force-dynamic";

export default async function Home() {
  const data = (await get("linktree")) as Data;
  return (
    <div className="flex flex-col items-center justify-center max-w-lg mx-auto h-screen">
      <Profile {...data} />
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
