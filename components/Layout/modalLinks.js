import {
  FaLock,
  FaCheckSquare,
  FaThLarge,
  FaUser,
  FaDollarSign,
  FaUserSecret,
  FaEnvelope,
  FaBullhorn,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";

export const modalLinks = [
  {
    name: "Sign In",
    link: "/user-signin",
    icon: <FaLock />,
  },
  {
    name: "Sign Up",
    link: "/user-signup",
    icon: <FaCheckSquare />,
  },
  {
    name: "Dashboard",
    link: "/user-signin",
    icon: <FaThLarge />,
  },
  {
    name: "Profile",
    link: "/user-signin",
    icon: <FaUser />,
  },
  {
    name: "Buy Credit",
    link: "/user-signin",
    icon: <BsCurrencyBitcoin />,
  },
  {
    name: "Earn Money",
    link: "/",
    icon: <FaDollarSign />,
  },
];

export const modalLinks2 = [
  {
    name: "Premium",
    link: "/user-signin",
    icon: <FaUserSecret />,
  },
  {
    name: "Message Blast",
    link: "/user-signup",
    icon: <FaEnvelope />,
  },
  {
    name: "Notify Me",
    link: "/",
    icon: <FaBullhorn />,
  },
  {
    name: "Promote",
    link: "/",
    icon: <FaBullhorn />,
  },
  {
    name: "Contact Us",
    link: "/contact-no-spam",
    icon: <FaPhoneAlt />,
  },
];
