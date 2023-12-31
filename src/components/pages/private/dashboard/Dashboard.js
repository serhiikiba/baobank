import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import useService from "../../../../services/requests";

import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import BalanceDisplay from "./DashboardComponents/BalanceDisplay";
import ModalWindow from "../../../designComponents/ModalWindow";
import SliderDashboard from "./SliderDashboard";

const DashBoard = () => {
  const userData = useSelector((state) => state.user.userData);

  const { process, setProcess } = useService();

  const [isExpanded, setIsExpanded] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const toggleVisibility = () => {
    setShowBalance(!showBalance);
  };

  const listServices = [
    {
      element: <SyncAltOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Transaction",
      link: "/transaction",
    },
    {
      element: <PriceCheckOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Request money ",
      link: "/request",
    },
    {
      element: <PeopleOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Profile",
      link: "/profile",
    },
    {
      element: <FastfoodOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Order food online",
      link: "/fastfood",
    },
    {
      element: <RedeemOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Give gifts",
      link: "/gifts",
    },
    {
      element: <BookOnlineOutlinedIcon sx={{ fontSize: "2rem" }} />,
      text: "Pay bills",
      link: "/paybills",
    },
    {
      element: <ConfirmationNumberIcon sx={{ fontSize: "2rem" }} />,
      text: "Buy movie tickets",
      link: "/buy",
    },
    {
      element: <MonetizationOnIcon sx={{ fontSize: "2rem" }} />,
      text: "Consumer loans",
      link: "/consumer",
    },
    {
      element: <ElectricBoltIcon sx={{ fontSize: "2rem" }} />,
      text: "Electricity payment",
      link: null,
      hidden: !isExpanded,
    },
    {
      element: <WaterDropIcon sx={{ fontSize: "2rem" }} />,
      text: "Water payment",
      link: null,
      hidden: !isExpanded,
    },
    {
      element: <AirplanemodeActiveIcon sx={{ fontSize: "2rem" }} />,
      text: "Airfare",
      link: null,
      hidden: !isExpanded,
    },
    {
      element: <MoreHorizIcon sx={{ fontSize: "2rem" }} />,
      text: "All Services",
      link: null,
    },
  ].filter((item) => !item.hidden);

  useEffect(() => {
    if (userData) setProcess("confirmed");
    // eslint-disable-next-line
  }, []);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <>
      <BalanceDisplay
        process={process}
        balance={userData.balance}
        showBalance={showBalance}
        toggleVisibility={toggleVisibility}
      />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ padding: "16px" }}
      >
        {listServices.map((item, index) => (
          <Grid
            key={index}
            item
            xs={4}
            sm={3}
            md={2}
            container
            direction="column"
            sx={{p:{sm:'1' , md:"3"}}}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "120px", md: "150px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "12px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
              }}
            >
              {item.link === null ? (
                <Link
                  href={item.link}
                  underline="none"
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#272643",
                  }}
                >
                  {" "}
                  <IconButton
                    // onClick={() => setIsExpanded(!isExpanded)}
                    onClick={openModalHandler}
                    sx={{ color: "#272643", fontSize:{sx: "2rem" , lg:"6rem"}  }}
                    color="primary"
                  >
                    {item.element}
                  </IconButton>
                  <Typography variant="body2" align="center">
                    {item.text}
                  </Typography>
                </Link>
              ) : (
                <Link
                  href={item.link}
                  underline="none"
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#272643",
                  }}
                >
                  {" "}
                  <IconButton
                    sx={{ color: "#272643", fontSize: "2rem" }}
                    color="primary"
                  >
                    {item.element}
                  </IconButton>
                  <Typography variant="body2" align="center">
                    {item.text}
                  </Typography>
                </Link>
              )}
            </Box>
          </Grid>
        ))}
        <SliderDashboard />
        {openModal && (
          <ModalWindow
            open={openModal}
            onClose={closeModalHandler}
            secondText={"secondText"}
            mainText={"mainText"}
            firstBtnText={"Yes"}
            secondBtnText={"No"}
            firstBtnClick={closeModalHandler}
            secondBtnClick={closeModalHandler}
            title="Your Modal Title"
          />
        )}
      </Grid>
    </>
  );
};

export default DashBoard;
