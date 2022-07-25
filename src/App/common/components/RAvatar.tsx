import { Avatar, SxProps, Theme } from "@mui/material";
import { FC } from "react";

const AVATAR_SIZE = 30;

interface Props {
  name?: string | null;
  src?: string | null;
  alt?: string;
  sx?: SxProps<Theme>;
}

export const RAvatar: FC<Props> = (props) => {
  return (
    <Avatar
      src={props.src || undefined}
      alt={props.alt}
      sx={{
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        fontSize: 12,
        fontWeight: 700,
        ...props.sx,
      }}
    >
    </Avatar>
  );
};
