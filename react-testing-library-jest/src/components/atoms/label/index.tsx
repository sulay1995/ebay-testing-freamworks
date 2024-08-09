import Typography from "@mui/material/Typography";
import React from "react";
import { TypographyProps } from "@mui/material";

export interface TypographyPropsCustom extends TypographyProps {
  text: TypographyProps["children"];
  textColor?: string;
  fontWeight?: string;
  padding?: string;
}

const TypographyComponent: React.FC<TypographyPropsCustom> = (
  props: TypographyPropsCustom
) => (
  <Typography
    style={{
      color: props.textColor,
      fontWeight: props.fontWeight,
      padding: props.padding,
    }}
    variant={props.variant}
    noWrap
  >
    {props.text}
  </Typography>
);

TypographyComponent.defaultProps = {
  variant: "subtitle2",
  text: "",
  textColor: "",
  fontWeight: "normal",
};

export default TypographyComponent;
