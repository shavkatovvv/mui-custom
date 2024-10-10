import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Text } from "./config/style";
import { Flex } from "./config/style";

function App() {
    return (
        <>
            <Container>
                <Button variant="contained">Click</Button>
                <Typography variant="h2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Modi quia quasi, itaque ipsum placeat similique incidunt
                    ullam possimus natus blanditiis magnam error, laudantium
                    voluptas fugiat odit repellendus quaerat rerum sint.
                </Typography>

                <Text>skfkjdsfdskjfkjdsfkjk</Text>
                <Typography>ali shavkatov</Typography>

                <ul>
                    <Flex>
                        <Typography variant="h2">Материал</Typography>
                        <Typography variant="body 1">Бамбук</Typography>
                    </Flex>

                    <Flex>
                        <Typography variant="h2">Толщина</Typography>
                        <Typography variant="body 1">6 мм</Typography>
                    </Flex>

                    <Flex>
                        <Typography variant="h2">Вес</Typography>
                        <Typography variant="body 1">
                            1.6 кг/м² (+/- 1%)
                        </Typography>
                    </Flex>

                    <Flex>
                        <Typography variant="h2">Плотность</Typography>
                        <Typography variant="body 1">
                            504 000 узлов/м²
                        </Typography>
                    </Flex>

                    <Flex>
                        <Typography variant="h2">Производитель</Typography>
                        <Typography variant="body 1">Yusuf Hali</Typography>
                    </Flex>

                    <Flex>
                        <Typography variant="h2">Страна</Typography>
                        <Typography variant="body 1">Турция</Typography>
                    </Flex>
                </ul>
            </Container>
        </>
    );
}

export default App;
