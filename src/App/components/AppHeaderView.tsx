import { Box, Link, Typography } from "@mui/material";
import Logo from "../Assets/images/Roblox_Logo_Black.svg";
import { FC } from "react";
import { APP_HEADER_HEIGHT } from "../constants/APP_HEADER_HEIGHT";
import { COLOR } from "../constants/COLOR";
import { RAvatar } from "../common/components/RAvatar";
import { RNotificationsIcon } from "../common/components/RNotifications";
import { RHexagon } from "../common/components/RHexagon";
import { RSettings } from "../common/components/RSettings";

export const AppHeaderView: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      height={APP_HEADER_HEIGHT}
      borderBottom={1}
      bgcolor={COLOR.gray[100]}
      borderColor={COLOR.gray[200]}
    >
      <Box ml={2} position="relative" top="6px">
        <Link>
          <img src={Logo} alt="Roblox" height={23} width={125} />
        </Link>
      </Box>
      <Box display="flex" position="absolute" right="10px">
        <RAvatar
          src={
            "https://assets.reedpopcdn.com/-1639480384520.jpg/BROK/resize/1380%3E/format/jpg/quality/75/-1639480384520.jpg"
          }
          name={"John Doe"}
          alt={"Roblox"}
        />
        <Typography fontSize={13} fontWeight={400} paddingLeft={1}>
          @Johndoeisthebest 32
        </Typography>
        <RNotificationsIcon />
        <RHexagon />
        <Typography>125</Typography>
        <RSettings />
      </Box>
    </Box>
  );
};
