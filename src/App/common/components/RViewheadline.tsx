import { ViewHeadline } from "@mui/icons-material";
import { styled } from "@mui/material";
import { FC } from "react";
import { COLOR } from "../../constants/COLOR";

const VIEWHEADLINE_SIZE = 30;

export const RViewHeadline: FC = () => {
  return (
    <RoViewHeadline>
      <ViewHeadline></ViewHeadline>
    </RoViewHeadline>
  );
};

const RoViewHeadline = styled(ViewHeadline)({
  color: COLOR.gray[1000],
  width: VIEWHEADLINE_SIZE,
  height: VIEWHEADLINE_SIZE,
  paddingLeft: 13,
});
