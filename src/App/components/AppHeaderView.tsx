import { Settings } from "@mui/icons-material";
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
      borderBottom={2}
      borderColor={COLOR.gray.lightgray}
    >
      <Box ml={2} position="relative" top="6px">
        <Link>
          <img src={Logo} alt="Roblox" height={30} />
        </Link>
      </Box>
      <Box display="flex" justifyContent="center">
        <Avatar
          alt="Roblox"
          src="https://assets.reedpopcdn.com/-1639480384520.jpg/BROK/resize/1380%3E/format/jpg/quality/75/-1639480384520.jpg"
          sx={{ width: 30, height: 30 }}
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
