import { Card } from "@/components/Card";
import mapImage from "@/assets/images/map.png";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { TechIcon } from "@/components/TechIcon";
import { title } from "process";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Drawing",
    emoji: "✏️",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Photography",
    emoji: "📷",
  },
  {
    title: "Music",
    emoji: "🎵",
  },
  {
    title: "Editing",
    emoji: "📽️",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Fitness",
    emoji: "🏃‍♂️‍➡️",
  },
  {
    title: "",
    emoji: "",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-20">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what inspires me."
        />
        {/* -----------------Book Card -------------*/}
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my prespectives"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Atomic Habits" />
            </div>
          </Card>
          {/*------------ Tool Box ---------------*/}
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools used to craft exceptional
                digital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          {/* ---------------- Personal skills ----------------- */}
          <Card>
            <CardHeader
              title="Beyond The Code"
              description="Explore my interest and hobbies beyond the digital realme."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          {/* -------------------Location Icon ---------------- */}
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="me" />
          </Card>
        </div>
      </div>
    </div>
  );
};
