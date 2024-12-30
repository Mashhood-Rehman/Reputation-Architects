import { Icon } from "@iconify/react";
import Web from "../SubServices/Web";
import SEO from "../SubServices/SEO";
import DigitalMarketing from "../SubServices/DigitalMarketing";
import GoogleAd from "../SubServices/GoogleAd";
import SocialMedia from "../SubServices/SocialMedia";

export const navdData = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/Services" },
  { name: "Packages", href: "/Packages" },
  { name: "Contact", href: "/contact" },
];

export const cards = [
  {
    icon: <Icon icon="mdi:tag" className="h-8 w-8 text-primary" />, 
    title: "Branding",
    content:
      "Branding makes you stand out. People remember your brand and choose you over competitors. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eos aliquam blanditiis, nobis ipsam incidunt reprehenderit odio? Eveniet, cumque sequi. Recusandae quas aliquid quam ipsum vitae doloribus nostrum dicta! Consequatur?",
  },
  {
    icon: <Icon icon="mdi:star" className="h-8 w-8 text-primary" />,
    title: "Research Targeted Audience",
    content:
      "Find businesses selling quality products. Targeted Audience is the right place. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eos aliquam blanditiis, nobis ipsam incidunt reprehenderit odio? Eveniet, cumque sequi. Recusandae quas aliquid quam ipsum vitae doloribus nostrum dicta! Consequatur?",
  },
  {
    icon: <Icon icon="mdi:account-group" className="h-8 w-8 text-primary" />, 
    title: "Research Competition",
    content:
      "We research the market and competition, then start marketing your business. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eos aliquam blanditiis, nobis ipsam incidunt reprehenderit odio? Eveniet, cumque sequi. Recusandae quas aliquid quam ipsum vitae doloribus nostrum dicta! Consequatur?",
  },
];

export const digitalMarketing = [
  "SEO (Search Engine Optimization)",
  "Social Media Marketing (SMM)",
  "Pay-Per-Click Advertising (PPC)",
  "Analytics and Reporting",
  "Web Development and Design",
  "Google Search Console",
  "Google Ads",
  "Graphic Designing and Branding",
];

export const servicesInfo = [
  {
    isTitle: true,
    content: {
      title: "Unmatched Services.",
      subtitle: "Unmatched Excellence.",
    },
  },
  {
    icon: <Icon icon="mdi:code-tags" className="h-8 w-8 text-white" />, 
    title: "Web Development",
    item: <Web />,
    path: "Web",
    description:
      "Custom web solutions built with cutting-edge technologies to meet your digital transformation needs.",
  },
  {
    icon: <Icon icon="mdi:magnify" className="h-8 w-8 text-white" />, 
    title: "SEO Optimization",
    item: <SEO />,
    path: "SEO",
    description:
      "Strategic search engine optimization to improve your visibility and drive organic traffic.",
  },
  {
    icon: <Icon icon="mdi:speaker" className="h-8 w-8 text-white" />, 
    title: "Social Media Marketing",
    item: <SocialMedia />,
    path: "SocialMedia",
    description:
      "Engaging social media strategies to build your brand presence and connect with your audience.",
  },
  {
    icon: <Icon icon="mdi:earth" className="h-8 w-8 text-white" />, 
    title: "Digital Marketing",
    item: <DigitalMarketing />,
    path: "DigitalMarketing",
    description:
      "Comprehensive digital marketing solutions to grow your online presence and reach.",
  },
  {
    icon: <Icon icon="mdi:chart-line" className="h-8 w-8 text-white" />, 
    title: "Google Ads",
    item: <GoogleAd />,
    path: "GoogleAd",
    description:
      "Targeted advertising campaigns to maximize your ROI and drive qualified traffic.",
  },
];
