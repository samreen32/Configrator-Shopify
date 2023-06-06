import ProductTagContainer from "./ProductTagContainer";

// light tags
import Tag_Light_1 from "../assets/Tags/Bubble1-Light.png";
import Tag_Light_2 from "../assets/Tags/Bubble2-Light.png";
import Tag_Light_3 from "../assets/Tags/Bubble3-Light.png";
import Tag_Light_4 from "../assets/Tags/Bubble4-Light.png";
import Tag_Light_5 from "../assets/Tags/Bubble5-Light.png";
import Tag_Light_6 from "../assets/Tags/Bubble6-Light.png";
import Tag_Light_7 from "../assets/Tags/Bubble7-Light.png";
import Tag_Light_8 from "../assets/Tags/Bubble8-Light.png";
import Tag_Light_9 from "../assets/Tags/Bubble9-Light.png";

// dark tags
import Tag_Dark_1 from "../assets/Tags/Bubble1-Dark.png";
import Tag_Dark_2 from "../assets/Tags/Bubble2-Dark.png";
import Tag_Dark_3 from "../assets/Tags/Bubble3-Dark.png";
import Tag_Dark_4 from "../assets/Tags/Bubble4-Dark.png";
import Tag_Dark_5 from "../assets/Tags/Bubble5-Dark.png";
import Tag_Dark_6 from "../assets/Tags/Bubble6-Dark.png";
import Tag_Dark_7 from "../assets/Tags/Bubble7-Dark.png";
import Tag_Dark_8 from "../assets/Tags/Bubble8-Dark.png";
import Tag_Dark_9 from "../assets/Tags/Bubble9-Dark.png";

// Part Images
import Part1_1 from "../assets/Parts/Part1-1.png";
import Part2_1 from "../assets/Parts/Part2-1.png";
import Part3_1 from "../assets/Parts/Part3-1.jpg";
import Part4_1 from "../assets/Parts/Part4-1.png";
import Part5_1 from "../assets/Parts/Part5-1.png";
import Part6_1 from "../assets/Parts/Part6-1.png";
import Part7_1 from "../assets/Parts/Part7-1.png";
import Part8_1 from "../assets/Parts/Part8-1.png";
import Part9_1 from "../assets/Parts/Part9-1.png";

//Styling selected number with details containing image, title, description.
//Styling tags positions and light, dark tag image as well.
const ProductTagDetails = [
  {
    id: 1,
    name: "Tag 1",
    image: Tag_Light_1,
    imageDark: Tag_Dark_1,
    ImageComponent: ProductTagContainer,
    position: {
      left: {
        sm: "50%",
        lg: "65%",
      },
      bottom: {
        sm: "36%",
        lg: "35%",
      },
    },
    part: {
      image: Part1_1,
      title: "Detail One",
      description:
        "Memory LUXFOAM™ is convertible <span class='soft-text'> soft</span> to <span class='firm-text'>firm</span>",
    },
  },
  {
    id: 2,
    name: "Tag 2",
    image: Tag_Light_2,
    imageDark: Tag_Dark_2,
    ImageComponent: ProductTagContainer,
    position: {
      left: {
        sm: "35%",
        lg: "55%",
      },
      bottom: {
        sm: "2%",
        lg: "5%",
      },
    },
    part: {
      image: Part2_1,
      title: "Detail Two",
      description: "Lockable drawstring for quick size and softness changes.",
    },
  },
  {
    id: 3,
    name: "Tag 3",
    image: Tag_Light_3,
    imageDark: Tag_Dark_3,
    ImageComponent: ProductTagContainer,
    position: {
      left: {
        sm: "70%",
        lg: "76%",
      },
      bottom: {
        sm: "48%",
        lg: "45%",
      },
    },
    part: {
      image: Part3_1,
      title: "Detail Three ",
      description:
        "Breathable, washable, hypoallergenic 3D mesh cover keeps you cool and dry.",
    },
  },
  {
    id: 4,
    name: "Tag 4",
    image: Tag_Light_4,
    imageDark: Tag_Dark_4,
    ImageComponent: ProductTagContainer,
    position: {
      left: {
        sm: "25%",
        lg: "48%",
      },
      bottom: {
        sm: "10%",
        lg: "12%",
      },
    },
    part: {
      image: Part4_1,
      title: "Detail Four",
      description: "Spring loaded clasps. <br/> Quick release and secure.",
    },
  },
  {
    id: 5,
    name: "Tag 5",
    image: Tag_Light_5,
    imageDark: Tag_Dark_5,
    ImageComponent: ProductTagContainer,
    position: {
      left: {
        sm: "75%",
        lg: "76%",
      },
      bottom: {
        sm: "68%",
        lg: "60%",
      },
    },
    part: {
      image: Part5_1,
      title: "Detail Five",
      description:
        "Exercise grade rubber tethers & steel rings. <br/> Strong. Long lasting.",
    },
  },
  {
    id: 6,
    name: "Tag 6",
    image: Tag_Light_6,
    imageDark: Tag_Dark_6,
    ImageComponent: ProductTagContainer,
    position: {
      left: {
        sm: "33%",
        lg: "55%",
      },
      bottom: {
        sm: "40%",
        lg: "40%",
      },
    },
    part: {
      image: Part6_1,
      title: "Detail Six",
      description:
        "Adjustable seatbelt style strap fits chairs up to  32’ (81cm) wide. ",
    },
  },
  {
    id: 7,
    name: "Tag 7",
    image: Tag_Light_7,
    imageDark: Tag_Dark_7,
    ImageComponent: ProductTagContainer,
    position: {
      left: {
        sm: "41%",
        lg: "58%",
      },
      bottom: {
        sm: "75%",
        lg: "65%",
      },
    },
    part: {
      image: Part7_1,
      title: "Detail Seven",
      description:
        "Elastic expansion strap for wide seats. <br/>  Just in case.",
    },
  },
  {
    id: 8,
    name: "Tag 8",
    image: Tag_Light_8,
    imageDark: Tag_Dark_8,
    ImageComponent: ProductTagContainer,
    position: {
      left: {
        sm: "38%",
        lg: "56%",
      },
      bottom: {
        sm: "60%",
        lg: "52%",
      },
    },
    part: {
      image: Part8_1,
      title: "Detail Eight",
      description: "Detachable shoulder pad. Take comfort with you.",
    },
  },
  {
    id: 9,
    name: "Tag 9",
    image: Tag_Light_9,
    imageDark: Tag_Dark_9,
    ImageComponent: ProductTagContainer,
    position: {
      left: {
        sm: "51%",
        lg: "65%",
      },
      bottom: {
        sm: "12%",
        lg: "13%",
      },
    },
    part: {
      image: Part9_1,
      title: "Detail Nine",
      description:
        "Compact carry tote. Lightweight.<br/> Moisture resistant. <br/> Complimentary.",
    },
  },
];

export default ProductTagDetails;
