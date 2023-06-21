import { Box, Flex, Text } from "@chakra-ui/react";

//This file styles the tooltip
export default function ProductToolTip({
  image,
  title,
  description,
  isDesktop,
  left,
  bottom,
  placement = "left",
}) {
  return (
    // Tooltip that shows tips when clicking on numbers.
    <Flex
      width={!isDesktop ? "90%" : "300px"} //styling the width of tooltip when screen is smaller
      maxW="370px"
      left={left}
      bottom={bottom}
      zIndex="9999"
      boxSizing="content-box"
      height={!isDesktop ? "125px" : ""}
      transform={
        isDesktop
          ? placement !== "top"
            ? "translateY(42px) translateX(-312px)"
            : "translateY(-48px) translateX(-150px)"
          : ""
      }
      bg="white"
      position={!isDesktop ? "relative" : "absolute"}
      p={0}
      _before={
        !isDesktop
          ? {
              //styling the cornor of tooltip when screen is smaller
              content: '""',
              position: "absolute",
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              height: "0",
              width: "0",
              borderLeft: "28px solid transparent",
              borderRight: "28px solid transparent",
              borderBottom: "15px solid white",
            }
          : placement !== "top"
          ? {
              //styling the cornor of tooltip when screen is larger
              content: '""',
              position: "absolute",
              bottom: "50%",
              right: "-10px",
              transform: "translateY(50%)",
              height: "0",
              width: "0",
              zIndex: "9999",
              borderTop: "15px solid transparent",
              borderBottom: "15px solid transparent",
              borderLeft: "10px solid white",
            }
          : {
              //special styling of cornor of tooltip when selecting tag 2
              content: '""',
              position: "absolute",
              bottom: "0%",
              left: "135px",
              transform: "translateY(50%)",
              height: "0",
              width: "0",
              zIndex: "9999",
              borderTop: "15px solid white",
              borderLeft: "28px solid transparent",
              borderRight: "28px solid transparent",
            }
      }
    >
      {/* Showing img in tooltip */}
      <Box width={"40%"}>
        <img src={image} className="col-12 h-100" loading="lazy" alt="image" />
      </Box>

      {/* Showing details on tooltip */}
      <Box
        width={"60%"}
        color="#262626"
        pl={!isDesktop ? "10px" : "10px"}
        pr="10px"
      >
        <Text fontSize={"17px"} pb="2px" pt={["12px", "10px"]}>
          {title}
        </Text>
        <Text
          fontSize={!isDesktop ? "11px" : "12px"}
          dangerouslySetInnerHTML={{ __html: description }}
        ></Text>
      </Box>
    </Flex>
  );
}
