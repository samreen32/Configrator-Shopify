import { Box, Image, useMediaQuery } from "@chakra-ui/react";

// File for tags styling
export default function ProductTagContainer({
  id,
  image,
  imageDark,
  position,
  isSelected,
  isDesktop,
  onClick,
}) {
  const [isSmallerScreen] = useMediaQuery("(max-width: 460px)");
  const [isWidthScreen] = useMediaQuery("(max-width: 270px)");
  const [isXSmallerScreen] = useMediaQuery(
    "(min-width: 650px) and (max-width: 670px)"
  ); //after smaller screen as when image changes..aka xs
  const [isXPSmallerScreen] = useMediaQuery(
    "(min-width: 671px) and (max-width: 685px)"
  ); //after smaller some more smaller
  const [isXPXSmallerScreen] = useMediaQuery(
    "(min-width: 686px) and (max-width: 730px)"
  ); //after smaller some more extra smaller
  const [isXSmallScreen] = useMediaQuery(
    "(min-width: 731px) and (max-width: 767px)"
  ); //after small screens
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
  ); //for between screen
  const [isXBetweenScreen] = useMediaQuery(
    "(min-width: 1015px) and (max-width: 1050px)"
  ); //for Xbetween screen
  const [isXPBetweenScreen] = useMediaQuery(
    "(min-width: 1051px) and (max-width: 1085px)"
  ); //for XPbetween screen
  const [isXPXBetweenScreen] = useMediaQuery(
    "(min-width: 1086px) and (max-width: 1130px)"
  ); //for XPXbetween screen
  const [isXLargerScreen] = useMediaQuery(
    "(min-width: 1131px) and (max-width: 1160px)"
  ); //for XLarger screen
  const [isXBLargerScreen] = useMediaQuery(
    "(min-width: 1161px) and (max-width: 1200px)"
  ); //for XBLarger screen
  const [isXPLargerScreen] = useMediaQuery(
    "(min-width: 1201px) and (max-width: 1250px)"
  ); //for XPLarger screen
  const [isXPXLargerScreen] = useMediaQuery(
    "(min-width: 1251px) and (max-width: 1279px)"
  ); //for xpxLarger Screens
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

  const tagWidth = isSmallerScreen ? "20px" : "30px";
  const isWidth = isWidthScreen ? "15px" : "20px";

  const getPosition = () => {
    if (isDesktop) {
      if (isNestHubMaxScreen) {
        return {
          left: position.left.nhms,
          bottom: position.bottom.nhms,
        };
      } else if (isNestHubScreen) {
        return {
          left: position.left.nhs,
          bottom: position.bottom.nhs,
        };
      } else if (isSurfaceScreen) {
        return {
          left: position.left.sp,
          bottom: position.bottom.sp,
        };
      } else if (isIPodScreen) {
        return {
          left: position.left.ipod,
          bottom: position.bottom.ipod,
        };
      } else if (isMediumScreen) {
        return {
          left: position.left.md,
          bottom: position.bottom.md,
        };
      } else if (isXMediumScreen) {
        return {
          left: position.left.xmd,
          bottom: position.bottom.xmd,
        };
      } else if (isXPSmallerScreen) {
        return {
          left: position.left.xps,
          bottom: position.bottom.xps,
        };
      } else if (isXSmallerScreen) {
        return {
          left: position.left.xs,
          bottom: position.bottom.xs,
        };
      } else if (isXPXSmallerScreen) {
        return {
          left: position.left.xpxs,
          bottom: position.bottom.xpxs,
        };
      } else if (isXSmallScreen) {
        return {
          left: position.left.xsm,
          bottom: position.bottom.xsm,
        };
      } else if (isBetweenScreen) {
        return {
          left: position.left.bs,
          bottom: position.bottom.bs,
        };
      } else if (isXBetweenScreen) {
        return {
          left: position.left.xbs,
          bottom: position.bottom.xbs,
        };
      } else if (isXPBetweenScreen) {
        return {
          left: position.left.xpbs,
          bottom: position.bottom.xpbs,
        };
      } else if (isXPXBetweenScreen) {
        return {
          left: position.left.xpxbs,
          bottom: position.bottom.xpxbs,
        };
      } else if (isXLargerScreen) {
        return {
          left: position.left.xl,
          bottom: position.bottom.xl,
        };
      } else if (isXBLargerScreen) {
        return {
          left: position.left.xbl,
          bottom: position.bottom.xbl,
        };
      } else if (isXPLargerScreen) {
        return {
          left: position.left.xpl,
          bottom: position.bottom.xpl,
        };
      } else if (isXPXLargerScreen) {
        return {
          left: position.left.xpxl,
          bottom: position.bottom.xpxl,
        };
      } else {
        return getPositionForOtherScreens();
      }
    } else {
      return {
        left: position.left.sm,
        bottom: position.bottom.sm,
      };
    }
  };

  const getPositionForOtherScreens = () => {
    if (isMaxScreen) {
      return {
        left: position.left.max,
        bottom: position.bottom.max,
      };
    } else if (isXMaxScreen) {
      return {
        left: position.left.xmax,
        bottom: position.bottom.xmax,
      };
    } else if (isXPMaxScreen) {
      return {
        left: position.left.xpmax,
        bottom: position.bottom.xpmax,
      };
    } else if (isXPXMaxScreen) {
      return {
        left: position.left.xpxmax,
        bottom: position.bottom.xpxmax,
      };
    } else if (isXBMaxScreen) {
      return {
        left: position.left.xbmax,
        bottom: position.bottom.xbmax,
      };
    } else if (isXBXMaxScreen) {
      return {
        left: position.left.xbxmax,
        bottom: position.bottom.xbxmax,
      };
    } else if (isXXMaxScreen) {
      return {
        left: position.left.xxmax,
        bottom: position.bottom.xxmax,
      };
    } else if (isXScreen) {
      return {
        left: position.left.xsn,
        bottom: position.bottom.xsn,
      };
    } else if (isXScreen) {
      return {
        left: position.left.xsn,
        bottom: position.bottom.xsn,
      };
    } else if (isXXScreen) {
      return {
        left: position.left.xxsn,
        bottom: position.bottom.xxsn,
      };
    } else if (isXXXScreen) {
      return {
        left: position.left.xxxsn,
        bottom: position.bottom.xxxsn,
      };
    } else {
      return {
        left: position.left.lg || position.left.sm,
        bottom: position.bottom.lg || position.bottom.sm,
      };
    }
  };

  const { left, bottom } = getPosition();

  const getTagWidth = () => {
    if (isWidthScreen) {
      return isWidth;
    } else if (isSmallerScreen) {
      return tagWidth;
    } else {
      return "30px";
    }
  };

  return (
    <Box width={"auto"} height={"auto"} zIndex={999999}>
      <Image
        onClick={(e) => onClick(e, id)}
        position="absolute"
        left={left}
        transform={isSelected ? "scale(1.1)" : "scale(0.9)"}
        scale={isSelected ? 3 : 1}
        bottom={bottom}
        src={isSelected ? imageDark : image}
        width={getTagWidth()}
        // width={tagWidth}
        alt={"Segun Adebayo"}
        zIndex={1}
      />
    </Box>
  );
}
