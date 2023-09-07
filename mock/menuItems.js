import { BsLaptop, BsBook } from "react-icons/bs";
import { IoShirtOutline, IoShirtSharp } from "react-icons/io5";
import { MdOutlineToys } from "react-icons/md";
import { RiHeartPulseLine, RiFireLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlinePercentage } from "react-icons/ai";
import { BiFootball } from "react-icons/bi";

import { ImMobile } from "react-icons/im";
import { FiMonitor, FiHeadphones } from "react-icons/fi";

import { GiLargeDress } from "react-icons/gi";
import { FaBaby, FaRedhat } from "react-icons/fa";

const menuItems = [
  { category: "alimentoUmido", icon: MdOutlineToys },
  { category: "cosmetic", icon: RiHeartPulseLine },
  { category: "home", icon: AiOutlineHome },
  { category: "sport", icon: BiFootball },
  { category: "stationery", icon: BsBook },
  { category: "outros", icon: BsBook, productsGroup: [{title: "", icon: "", subtitles: [""]}] }
];

// const menuItems = [
//   { category: "AlimentoÚmido", icon: MdOutlineToys},
//   { category: "Petiscos Naturais", icon: RiHeartPulseLine  },
//   { category: "Comedouros", icon: AiOutlineHome  },
//   { category: "Tapete para Alimentação", icon: BiFootball },
//   { category: "Brinquedos e Mordedores", icon: BsBook  },
//   { category: "Pelúcia", icon: BsBook  },
//   { category: "KONG", icon: BsBook  },
//   { category: "Outros", icon: BsBook, productsGroup: [{title: "", icon: "", subtitles: [""]}] },
// ];

export default menuItems;

export const extraMenu = [
  { title: "offer", icon: AiOutlinePercentage, href: "/offers" },
  { title: "bestSells", icon: RiFireLine, href: "/" },
];
