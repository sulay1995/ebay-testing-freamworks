import Label from "../../atoms/label";
import Button from "../../atoms/button";
import SidebarFooter from "../../molecules/sidebarFooter/index";
import Conditionaldiv from "../../atoms/ConditionalRenderWithCSS";
import {
  Box,
  BoxProps,
  TypographyProps,
  ButtonProps,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const SidenavBox = styled(Box)({
  width: 250,
  border: 1,
  height: "calc(100vh - 32px)",
  backgroundColor: "#FFFFFF",
  marginLeft: "10px",
  borderRadius: "6px",
});

const ButtonBox = styled(Box)({
  margin: "10px 20px",
});

const SidebarFooterBox = styled(Box)({
  position: "fixed",
  bottom: "32px",
  marginLeft: "10px",
});

export interface Menus {
  title: string;
  icon: JSX.Element;
  route: string;
  name: string;
}

export interface SidenavINterface extends BoxProps {
  text: string;
  textColor: string;
  variant: TypographyProps["variant"];
  fontWeight: string;
  icon: JSX.Element;
  buttonVariant: ButtonProps["variant"];
  fullWidth: boolean;
  justifyContent: string;
  image: string;
  nameVariant: TypographyProps["variant"];
  companyVariant: TypographyProps["variant"];
  footerIcon: JSX.Element;
  alt: string;
  name: string;
  company: string;
  color: ButtonProps["color"];
  disable: boolean;
  menus: Array<Menus>;
}

const Sidenav: React.FC<SidenavINterface> = (props: SidenavINterface) => {
  const url = window.location.href;
  const currentpage = url.substring(url.lastIndexOf("/") + 1);
  const [selectedRoute, setSelectedRoute] = useState(currentpage);

  return (
    <SidenavBox sx={{}}>
      <Label
        text={props.text}
        textColor={props.textColor}
        variant={props.variant}
        fontWeight={props.fontWeight}
        padding="10px"
      />
      {props.menus.map((item: Menus) => (
        <ButtonBox
          onClick={() => {
            setSelectedRoute(item.name);
          }}
          key={item.title}
        >
          <Link
            to={item.route}
            key={item.title}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant={props.buttonVariant}
              icon={item.icon}
              title={item.title}
              textColor={selectedRoute === item.name ? "#224DFF" : "#2C2C2E"}
              backgroundColor={
                selectedRoute === item.name ? "#EFF2FF" : "#FFFFFF"
              }
              borderColor={""}
              justifyContent={props.justifyContent}
              fullWidth={props.fullWidth}
            />
          </Link>
        </ButtonBox>
      ))}
      <Conditionaldiv />
      <SidebarFooterBox>
        <SidebarFooter
          image={props.image}
          nameVariant={props.nameVariant}
          companyVariant={props.companyVariant}
          icon={props.footerIcon}
          alt={props.alt}
          name={props.name}
          company={props.company}
          color={props.color}
          textColor={props.textColor}
          fontWeight={props.fontWeight}
          disable={props.disable}
        />
      </SidebarFooterBox>
    </SidenavBox>
  );
};

export default Sidenav;
