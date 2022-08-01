import { Settings } from "@mui/icons-material";
import { styled } from "@mui/material";
import { FC } from "react";
import { COLOR } from "../../constants/COLOR";

const SETTINGS_SIZE = 30;

export const RSettings: FC = () => {
  return (
    <RoSettings>
      <Settings></Settings>
    </RoSettings>
  );
};

const RoSettings = styled(Settings)({
  color: COLOR.gray[1000],
  width: SETTINGS_SIZE,
  height: SETTINGS_SIZE,
  paddingLeft: 15,
});
