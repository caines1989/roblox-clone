import { Box } from "@mui/material";
import { FC } from "react";
import { APP_HEADER_HEIGHT } from "../constants/APP_HEADER_HEIGHT";
import { COLOR } from "../constants/COLOR";
import { SIDEBAR_WIDTH } from "../constants/SIDEBAR_WIDTH";

export const AppSidebarView: FC = () => {
  return (
    <Box
      width={SIDEBAR_WIDTH}
      overflow="auto"
      height={`calc(100vh - ${APP_HEADER_HEIGHT}px)`}
      sx={{ boxShadow: 3 }}
      bgcolor={COLOR.gray[100]}
      borderColor={COLOR.gray[200]}
    ></Box>
  );
};
