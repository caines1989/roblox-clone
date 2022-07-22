import { Box } from "@mui/system";
import { FC } from "react";
import { AppHeaderView } from "./AppHeaderView";

export const AppMainView: FC = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <AppHeaderView />
    </Box>
  );
};
