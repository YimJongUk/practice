import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import Equipment from "./Equipment";
import Engrabving from "./Engrabving";
import Cards from "./Cards";
import Gems from "./Gems";
import Info from "./Info";

const SpecChk = () => {
  const [keyName, setKeyName] = useState("");
  const [anchor, setAnchor] = useState(false);

  const pages = [
    { key: "info", drawerPage: <Info />, chkName: "기본정보" },
    { key: "equip", drawerPage: <Equipment />, chkName: "장비" },
    { key: "engrabving", drawerPage: <Engrabving />, chkName: "각인" },
    { key: "gems", drawerPage: <Gems />, chkName: "보석" },
    { key: "card", drawerPage: <Cards />, chkName: "카드" },
  ];

  const isOpen = (key, isChk) => {
    setKeyName(key);
    setAnchor(isChk);
  };

  return (
    <>
      <List>
        {pages.map((el, idx) => (
          <ListItem key={idx}>
            <ListItemButton onClick={() => isOpen(el.key, true)}>
              <ListItemText primary={el.chkName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Drawer anchor={"right"} open={anchor} onClose={() => setAnchor(false)}>
        {pages.find((el) => el.key === keyName)?.drawerPage}
      </Drawer>
    </>
  );
};

export default SpecChk;
