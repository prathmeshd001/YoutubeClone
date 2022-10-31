import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

import { logo } from "../utilities/constants";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          background: "#000",
          top: 0,
          justifyContent: "space-between",
          borderBottom: "1px solid #3d3d3d",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" style={{ height: "45px" }} />
        </Link>
        <Searchbar />
        <Link to="/about" style={{ textDecoration: "none" }}></Link>
      </Stack>
    </>
  );
};

export default Navbar;
