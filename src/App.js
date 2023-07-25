import React, { useState } from "react";
import { ChakraProvider, useMediaQuery } from "@chakra-ui/react";
import { Box, Image, Stack, Container } from "@chakra-ui/react";
import Product_White_Image from "../src/assets/Products/product_white.png";
import Product_White_Image_Lg from "../src/assets/Products/product_white_lg.jpg";
import Product_Black_Image from "../src/assets/Products/product_black.png";
import Product_Black_Image_Lg from "../src/assets/Products/product_black_lg.jpg";
import theme from "./theme";
import ProductToolTip from "./components/ProductToolTip";
import ProductTagDetails from "./components/ProductTagDetails";
import "./App.css";

function App() {
  const [selectedTag, setSelectedTag] = useState(1);
  const [isLargerThan1280] = useMediaQuery("(min-width: 650px)"); //showing image
  const [isXSmallerScreen] = useMediaQuery(
    "(min-width: 650px) and (max-width: 670px)"
  );
  const [isXPSmallerScreen] = useMediaQuery(
    "(min-width: 671px) and (max-width: 685px)"
  );
  const [isXPXSmallerScreen] = useMediaQuery(
    "(min-width: 686px) and (max-width: 730px)"
  );
  const [isXSmallScreen] = useMediaQuery(
    "(min-width: 731px) and (max-width: 767px)"
  );
  const [isIPodScreen] = useMediaQuery(
    "(min-width: 768px) and (max-width: 819px)"
  ); //ipod
  const [isMediumScreen] = useMediaQuery(
    "(min-width: 820px) and (max-width: 870px)"
  ); //above ipod screen
  const [isSurfaceScreen] = useMediaQuery(
    "(min-width: 871px) and (max-width: 890px)"
  ); //surface pro
  const [isXMediumScreen] = useMediaQuery(
    "(min-width: 891px) and (max-width: 940px)"
  ); //for xmdium screens
  const [isNestHubScreen] = useMediaQuery(
    "(min-width: 941px) and (max-width: 960px)"
  ); //nestHub and below
  const [isBetweenScreen] = useMediaQuery(
    "(min-width: 961px) and (max-width: 1015px)"
  );
  const [isXBetweenScreen] = useMediaQuery(
    "(min-width: 1015px) and (max-width: 1050px)"
  );
  const [isXPBetweenScreen] = useMediaQuery(
    "(min-width: 1051px) and (max-width: 1085px)"
  );
  const [isXPXBetweenScreen] = useMediaQuery(
    "(min-width: 1086px) and (max-width: 1130px)"
  );
  const [isXLargerScreen] = useMediaQuery(
    "(min-width: 1131px) and (max-width: 1160px)"
  ); //for XLarger screen
  const [isXBLargerScreen] = useMediaQuery(
    "(min-width: 1161px) and (max-width: 1200px)"
  ); //for XBLarger screen
  const [isXPLargerScreen] = useMediaQuery(
    "(min-width: 1201px) and (max-width: 1250px)"
  );
  const [isXPXLargerScreen] = useMediaQuery(
    "(min-width: 1251px) and (max-width: 1279px)"
  );
  const [isNestHubMaxScreen] = useMediaQuery(
    "(min-width: 1280px) and (max-width: 1320px)"
  ); //newstHub max 1280 and below
  const [isMaxScreen] = useMediaQuery(
    "(min-width: 1321px) and (max-width: 1360px)"
  );
  const [isXMaxScreen] = useMediaQuery(
    "(min-width: 1361px) and (max-width: 1380px)"
  );
  const [isXPMaxScreen] = useMediaQuery(
    "(min-width: 1381px) and (max-width: 1400px)"
  );
  const [isXPXMaxScreen] = useMediaQuery(
    "(min-width: 1401px) and (max-width: 1430px)"
  );
  const [isXBMaxScreen] = useMediaQuery(
    "(min-width: 1431px) and (max-width: 1490px)"
  );
  const [isXBXMaxScreen] = useMediaQuery(
    "(min-width: 1491px) and (max-width: 1530px)"
  );
  const [isXXMaxScreen] = useMediaQuery(
    "(min-width: 1531px) and (max-width: 1600px)"
  );
  const [isXScreen] = useMediaQuery(
    "(min-width: 1601px) and (max-width: 1650px)"
  );
  const [isXXScreen] = useMediaQuery(
    "(min-width: 1651px) and (max-width: 1700px)"
  );
  const [isXXXScreen] = useMediaQuery(
    "(min-width: 1701px) and (max-width: 1750px)"
  );

  //Styling for black and white circle
  const [isScreen370px] = useMediaQuery("(max-width: 370px)");
  const [isScreen270px] = useMediaQuery("(max-width: 270px)");
  const [isScreen240px] = useMediaQuery("(max-width: 240px)");
  const [isScreenLargerThan240px] = useMediaQuery(
    "(min-width: 241px) and (max-width: 340px)"
  );

  const [product, setProduct] = useState("dark");
  const handleSelect = (e, id) => {
    e.stopPropagation();
    setSelectedTag(id);
  };

  const getPositionForScreenSize = (tag) => {
    if (isMaxScreen) {
      return {
        left: tag.position.left.max,
        bottom: tag.position.bottom.max,
      };
    } else if (isXMaxScreen) {
      return {
        left: tag.position.left.xmax,
        bottom: tag.position.bottom.xmax,
      };
    } else if (isXPMaxScreen) {
      return {
        left: tag.position.left.xpmax,
        bottom: tag.position.bottom.xpmax,
      };
    } else if (isXPXMaxScreen) {
      return {
        left: tag.position.left.xpxmax,
        bottom: tag.position.bottom.xpxmax,
      };
    } else if (isXBMaxScreen) {
      return {
        left: tag.position.left.xbmax,
        bottom: tag.position.bottom.xbmax,
      };
    } else if (isXBXMaxScreen) {
      return {
        left: tag.position.left.xbxmax,
        bottom: tag.position.bottom.xbxmax,
      };
    } else if (isXXMaxScreen) {
      return {
        left: tag.position.left.xxmax,
        bottom: tag.position.bottom.xxmax,
      };
    } else if (isXScreen) {
      return {
        left: tag.position.left.xsn,
        bottom: tag.position.bottom.xsn,
      };
    } else if (isXXScreen) {
      return {
        left: tag.position.left.xxsn,
        bottom: tag.position.bottom.xxsn,
      };
    } else if (isXXXScreen) {
      return {
        left: tag.position.left.xxxsn,
        bottom: tag.position.bottom.xxxsn,
      };
    } else if (isLargerThan1280) {
      return {
        left: isNestHubMaxScreen
          ? tag.position.left.nhms
          : isNestHubScreen
          ? tag.position.left.nhs
          : isSurfaceScreen
          ? tag.position.left.sp
          : isIPodScreen
          ? tag.position.left.ipod
          : isMediumScreen
          ? tag.position.left.md
          : isXSmallScreen
          ? tag.position.left.xsm
          : isXSmallerScreen
          ? tag.position.left.xs
          : isXPSmallerScreen
          ? tag.position.left.xps
          : isXPXSmallerScreen
          ? tag.position.left.xpxs
          : isXMediumScreen
          ? tag.position.left.xmd
          : isBetweenScreen
          ? tag.position.left.bs
          : isXBetweenScreen
          ? tag.position.left.xbs
          : isXPBetweenScreen
          ? tag.position.left.xpbs
          : isXPXBetweenScreen
          ? tag.position.left.xpxbs
          : isXLargerScreen
          ? tag.position.left.xl
          : isXBLargerScreen
          ? tag.position.left.xbl
          : isXPLargerScreen
          ? tag.position.left.xpl
          : isXPXLargerScreen
          ? tag.position.left.xpxl
          : tag.position.left.lg || tag.position.left.sm,
        bottom: isNestHubMaxScreen
          ? tag.position.bottom.nhms
          : isNestHubScreen
          ? tag.position.bottom.nhs
          : isSurfaceScreen
          ? tag.position.bottom.sp
          : isIPodScreen
          ? tag.position.bottom.ipod
          : isMediumScreen
          ? tag.position.bottom.md
          : isXSmallScreen
          ? tag.position.bottom.xsm
          : isXSmallerScreen
          ? tag.position.bottom.xs
          : isXPSmallerScreen
          ? tag.position.bottom.xps
          : isXPXSmallerScreen
          ? tag.position.bottom.xpxs
          : isXMediumScreen
          ? tag.position.bottom.xmd
          : isBetweenScreen
          ? tag.position.bottom.bs
          : isXBetweenScreen
          ? tag.position.bottom.xbs
          : isXPBetweenScreen
          ? tag.position.bottom.xpbs
          : isXPXBetweenScreen
          ? tag.position.bottom.xpxbs
          : isXLargerScreen
          ? tag.position.bottom.xl
          : isXBLargerScreen
          ? tag.position.bottom.xbl
          : isXPLargerScreen
          ? tag.position.bottom.xpl
          : isXPXLargerScreen
          ? tag.position.bottom.xpxl
          : tag.position.bottom.lg || tag.position.bottom.sm,
      };
    }
    return {
      left: tag.position.left.sm,
      bottom: tag.position.bottom.sm,
    };
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box
          color="white"
          h="100vh"
          w="100vw"
          display={"flex"}
          bg="white"
          placeItems={["", "center"]}
        >
          <Stack
            px={isLargerThan1280 ? "20px" : ""}
            bg={"white"}
            width="100%"
            onClick={() => setSelectedTag(0)}
            height={isLargerThan1280 ? "100vh" : "100%"}
          >
            <Container
              width={"100%"}
              display={"flex"}
              placeItems={"center"}
              height={isLargerThan1280 ? "100%" : "100vw"}
              position={"relative"}
              bg="white"
            >
              {/* Image showing with tags */}
              <Image
                position="absolute"
                onLoad={() => console.log("loaded")}
                onClick={() => setSelectedTag(0)}
                src={
                  isLargerThan1280
                    ? product !== "dark"
                      ? Product_White_Image_Lg
                      : Product_Black_Image_Lg
                    : product !== "dark"
                    ? Product_White_Image
                    : Product_Black_Image
                }
                p={0}
                height={isLargerThan1280 ? "100vh" : "100%"}
                alt="Segun Adebayo"
                zIndex={0}
                width="100%"
                objectFit={isLargerThan1280 ? "cover" : undefined}
                //className="product-image"
              />

              <Box zIndex={1} w={"100%"} height="100%">
                {/* Showing tag numbers */}
                {ProductTagDetails.map((tag) => {
                  return (
                    <tag.ImageComponent
                      key={tag.id}
                      id={tag.id}
                      isDesktop={isLargerThan1280}
                      isSelected={selectedTag === tag.id}
                      Part={tag.part}
                      image={tag.image}
                      imageDark={tag.imageDark}
                      onClick={handleSelect}
                      position={tag.position}
                    />
                  );
                })}

                {/* Showing tooltip when screen size is larger */}
                {isLargerThan1280 &&
                  ProductTagDetails.map((tag) => {
                    if (selectedTag === tag.id) {
                      const position = getPositionForScreenSize(tag);
                      return (
                        <ProductToolTip
                          key={tag.id}
                          left={position.left}
                          bottom={position.bottom}
                          placement={tag.id === 2 ? "top" : "left"}
                          isDesktop={isLargerThan1280}
                          image={tag.part.image}
                          title={tag.part.title}
                          description={tag.part.description}
                        />
                      );
                    }
                  })}

                {/* Showing options to choose between black and white */}
                <div
                  className="flex space-x-4 pointer-events-auto position-absolute bottom-0 end-0 pe-2 pb-2"
                  style={{
                    display: "flex",
                    marginRight: isScreen240px
                      ? "-2%"
                      : isScreenLargerThan240px
                      ? "1%"
                      : "7%",
                    transform: isScreen240px
                      ? "scale(0.5)"
                      : isScreen270px
                      ? "scale(0.6)"
                      : isScreen370px
                      ? "scale(0.8)"
                      : "none",
                  }}
                >
                  {/* BLACK CIRCLE */}
                  <div
                    className="mx-2"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      background:
                        product !== "dark" ? "transparent" : "#F2F2F2",
                      border: product === "dark" ? "2px solid #FFF" : "none",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      onClick={() => setProduct("dark")}
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                        background: "#262626",
                        cursor: "pointer",
                      }}
                    ></div>
                  </div>

                  {/* WHITE CIRCLE */}
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      background:
                        product !== "light" ? "#F2F2F2" : "transparent",
                      border:
                        product === "light" ? "2px solid #262626" : "none",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      onClick={() => setProduct("light")}
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                        background: "#F2F2F2",
                        cursor: "pointer",
                      }}
                    ></div>
                  </div>
                </div>
              </Box>
            </Container>

            {/* Showing tooltip when screen size is smaller */}
            {!isLargerThan1280 && selectedTag && (
              <Box
                width={"100%"}
                bg={"#eeedea"}
                pb={["20px", "20px"]}
                display={"grid"}
                mt={"0px !important"}
                pt={"15px"}
                placeItems={"center"}
              >
                {ProductTagDetails.map((tag) => {
                  if (selectedTag === tag.id) {
                    return (
                      <ProductToolTip
                        key={tag.id}
                        image={tag.part.image}
                        title={tag.part.title}
                        description={tag.part.description}
                      />
                    );
                  }
                })}
              </Box>
            )}
          </Stack>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
