import { HomeIcon, InfoIcon, TicketIcon, MessageSquareIcon } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <Index />, // Replace with About component when created
  },
  {
    title: "Screenings",
    to: "/screenings",
    icon: <TicketIcon className="h-4 w-4" />,
    page: <Index />, // Replace with Screenings component when created
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <MessageSquareIcon className="h-4 w-4" />,
    page: <Index />, // Replace with Contact component when created
  },
];