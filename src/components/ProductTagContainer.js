import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function ProductTagContainer({
  id, //parameters coming from Viewer.Data.tsx file
  image,
  imageDark,
  position,
  isSelected,
  isDesktop,
  onClick,
}) {
  return (
    <Box width={"auto"} height={"auto"} zIndex={999999}>
      <Image
        onClick={(e) => onClick(e, id)}
        position={"absolute"}
        left={isDesktop ? position.left.lg : position.left.sm}
        transform={isSelected ? "scale(1.1)" : "scale(0.9)"}
        scale={isSelected ? 3 : 1}
        bottom={isDesktop ? position.bottom.lg : position.bottom.sm}
        src={isSelected ? imageDark : image}
        width={"30px"}
        alt={"Segun Adebayo"}
        zIndex={1}
      />
    </Box>
  );
}
