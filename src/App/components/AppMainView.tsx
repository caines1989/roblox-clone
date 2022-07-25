import { Box } from "@mui/system";
import { FC } from "react";
import { AppHeaderView } from "./AppHeaderView";
import { AppSidebarView } from "./AppSidebarView";

export const AppMainView: FC = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <AppHeaderView />
      <AppSidebarView />
    </Box>
  );
};
