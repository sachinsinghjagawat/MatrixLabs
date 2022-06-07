import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../Navbar/Navbar";
import Button from "@mui/material/Button";
import earth from "../../assets/earth.png";
import TxtRotate from "../../scripts/TextRotate";
import styles from "./Landing.module.css";

const Landing = () => {
  React.useEffect(() => {
    const rotateElement = document.getElementById("txt-rotate");
    const toRotate = ["CUSTOM CONTRACT", "LOREM", "IPSUM"];
    const period = 1000;
    if (toRotate) {
      new TxtRotate(rotateElement, toRotate, period);
    }
  }, []);

  return (
    <div className={styles.landing}>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          mt: { xs: "4rem", md: 2 },
        }}
      >
        <span id="home" />
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "90%", md: "40%" },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              color: "white",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
              width: "100%",
              px: { xs: "1rem", sm: "3rem" },
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontWeight: 700,
                borderLeft: "3px solid #00d186",
                px: 2.5,
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
              }}
            >
              THE MATRIX LABS
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "3rem" },
                mt: 2,
              }}
            >
              WE CREATE
            </Typography>
            <Typography
              id="txt-rotate"
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "3rem" },
                color: "#00d186",
                mt: 1,
              }}
            >
              CUSTOM CONTRACT
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontWeight: 500,
                mt: 2,
                fontSize: { xs: "1.1rem", sm: "1.2rem" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Button
                sx={{
                  my: 2.5,
                  mr: 1,
                  backgroundColor: "transparent",
                  border: "2px solid #00D186",
                  color: "white",
                  fontWeight: 600,
                  display: "block",
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  width: "100%",
                  padding: { xs: "1px 0.5rem", sm: "3px 1rem" },
                }}
              >
                KNOW MORE
              </Button>
              <Button
                sx={{
                  my: 2.5,
                  ml: 1,
                  backgroundColor: "#00D186",
                  color: "black",
                  display: "block",
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  fontWeight: 600,
                  width: "100%",
                  padding: { xs: "1px 0.5rem", sm: "3px 1rem" },
                  "&:hover": {
                    backgroundColor: "#00D186",
                  },
                }}
              >
                DAPP
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "100%", md: "50%" },
            mx: "auto",
          }}
          component="img"
          alt="Earth"
          src={earth}
        ></Box>
      </Container>
    </div>
  );
};

export default Landing;
