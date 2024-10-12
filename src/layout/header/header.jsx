import { Container, Stack } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.svg";

export const Header = () => {
    return (
        <header>
            <Container maxWidth="xs">
                <Stack flexDirection={"row"} gap={"60px"} alignItems={"center"}>
                    <img src={logo} alt="logo" />
                </Stack>
            </Container>
        </header>
    );
};
