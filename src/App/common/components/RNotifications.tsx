import { Notifications } from "@mui/icons-material";
import { styled } from "@mui/material";
import { FC } from "react";
import { COLOR } from "../../constants/COLOR";

const NOTIFICATIONS_SIZE = 30;

export const RNotificationsIcon: FC = () => {
  return (
    <RoNotificationsIcon>
      <Notifications></Notifications>
    </RoNotificationsIcon>
  );
};

const RoNotificationsIcon = styled(Notifications)({
  color: COLOR.gray[1000],
  width: NOTIFICATIONS_SIZE,
  height: NOTIFICATIONS_SIZE,
  paddingLeft: 20,
});
