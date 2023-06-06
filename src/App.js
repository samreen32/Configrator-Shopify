import React, { useState } from 'react'
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';
import { Box, Image, Stack, Container } from "@chakra-ui/react";
import Product_White_Image from "../src/assets/Products/product_white.png";
import Product_White_Image_Lg from "../src/assets/Products/product_white_lg.jpg";
import Product_Black_Image from "../src/assets/Products/product_black.png";
import Product_Black_Image_Lg from "../src/assets/Products/product_black_lg.jpg";
import theme from './theme';
import ProductToolTip from './components/ProductToolTip';
import ProductTagDetails from './components/ProductTagDetails';

function App() {
  const [selectedTag, setSelectedTag] = useState(1);
  const [isLargerThan1280] = useMediaQuery("(min-width: 1000px)");
  const [product, setProduct] = useState("dark");

  const handleSelect = (e, id) => {
    e.stopPropagation();
    setSelectedTag(id);
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
                width="100vw"
                objectFit="cover"
              />

              <Box zIndex={1} w={"100%"} height="100%">
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
                      return (
                        <ProductToolTip
                          key={tag.id}
                          left={tag.position.left}
                          bottom={tag.position.bottom}
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
                  style={{ display: 'flex'}}
                >
                  {/* BLACK CIRCLE */}
                  <div
                    className='mx-2'
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      background: product !== "dark" ? "transparent" : "#F2F2F2",
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
                      background: product !== "light" ? "#F2F2F2" : "transparent",
                      border: product === "light" ? "2px solid #262626" : "none",
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
  )
}

export default App;