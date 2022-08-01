import { Hexagon } from "@mui/icons-material";
import { styled } from "@mui/material";
import { FC } from "react";
import { COLOR } from "../../constants/COLOR";

const HEXAGON_SIZE = 30;

export const RHexagon: FC = () => {
  return (
    <RoHexagon>
      <Hexagon></Hexagon>
    </RoHexagon>
  );
};

const RoHexagon = styled(Hexagon)({
  color: COLOR.gray[1000],
  width: HEXAGON_SIZE,
  height: HEXAGON_SIZE,
  paddingLeft: 20,
});
