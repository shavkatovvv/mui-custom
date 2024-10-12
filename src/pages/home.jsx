import React from "react";
import { Mainlayout } from "../layout/main-layout";
import { Container } from "@mui/material";

export const Home = () => {
    return (
        <div>
            <Container maxWidth="xs">
                <Mainlayout />
            </Container>
        </div>
    );
};
