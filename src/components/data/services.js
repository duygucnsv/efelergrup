import {
    MdOutlineMiscellaneousServices    
  } from "react-icons/md";

import {
    VscWorkspaceTrusted    
  } from "react-icons/vsc";
  
import {
    BsEmojiSmile    
  } from "react-icons/bs";
  
 import {
    MdOutlineDeliveryDining    
  } from "react-icons/md"; 

const services = [
    {
      id: 1,
      title: "KALİTELİ HİZMET",
      description:
        "Efeler Grup uzman kadrosu ile kaliteli, sorunsuz, hassas ve hızlı üretim anlayışı çerçevesinde hizmet vermeye devam etmektedir.",
      icon: <MdOutlineMiscellaneousServices className="icon"/>,
    },
    {
      id: 2,
      title: "KARŞILIKLI GÜVEN",
      description:
        "En değerli ilkemiz müşteri memnuniyetini en üst seviyede gözetmek ve kalite standartlarına uygun yapılar inşa etmektir.",
      icon: <VscWorkspaceTrusted className="icon"/>,
    },
    {
      id: 3,
      title: "MEMNUNİYET",
      description:
        "En değerli ilkemiz müşteri memnuniyetini en üst seviyede gözetmek ve kalite standartlarına uygun yapılar inşa etmektir.",
      icon: <BsEmojiSmile className="icon"/>,
    },
    {
      id: 4,
      title: "HIZLI TESLİMAT",
      description:
        "Projelerde tasarımdan imalat ve montaj aşamasına kadar tüm çalışmalarımızı kaliteden asla ödün vermeden yapıyoruz.",
      icon: <MdOutlineDeliveryDining className="icon"/>,
    },
  ];

  export default services;