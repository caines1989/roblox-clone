import { Hexagon, Settings, ViewHeadline } from "@mui/icons-material";
import { Avatar, Box, Link } from "@mui/material";
import Logo from "../Assets/images/Roblox_Logo_Black.svg";
import { FC } from "react";
import { APP_HEADER_HEIGHT } from "../constants/APP_HEADER_HEIGHT";
import { COLOR } from "../constants/COLOR";

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
          <img src={Logo} alt="Roblox" height={20} />
        </Link>
      </Box>
      <Box display="flex" position="absolute" right="50px">
        <Avatar
          alt="Roblox"
          src="https://assets.reedpopcdn.com/-1639480384520.jpg/BROK/resize/1380%3E/format/jpg/quality/75/-1639480384520.jpg"
          sx={{ width: 30, height: 30 }}
        />
        <ViewHeadline
          sx={{
            width: 30,
            height: 30,
          }}
        />
        <Hexagon
          sx={{
            width: 30,
            height: 30,
          }}
        />
        <Settings
          sx={{
            width: 30,
            height: 30,
          }}
        />
      </Box>
    </Box>
  );
};
