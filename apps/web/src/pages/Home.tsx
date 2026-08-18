import Hero from "../components/home/Hero";
import TrustedCompanies from "../components/home/TrustedCompanies";
import Marquee from "../components/home/Marquee";
import LatestJobs from "../components/home/LatestJobs";
import PostJob from "../components/home/PostJob";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <Marquee />
      <LatestJobs />
      <PostJob />
      <Contact />
    </>
  );
}
