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
    name: "Login",
    link: "/user-login",
    icon: <FaLock />,
  },
  {
    name: "Create Account",
    link: "/user-join",
    icon: <FaCheckSquare />,
  },
  {
    name: "Dashboard",
    link: "/user-login",
    icon: <FaThLarge />,
  },
  {
    name: "Profile",
    link: "/user-login",
    icon: <FaUser />,
  },
  {
    name: "Buy Credit",
    link: "/user-login",
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
    link: "/user-login",
    icon: <FaUserSecret />,
  },
  {
    name: "Message Blast",
    link: "/user-join",
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
