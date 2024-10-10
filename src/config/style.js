import styled from "@emotion/styled";
import { theme } from "./mui-config";

export const Text = styled.div`
    background-color: ${theme.palette.secondary.main};
    color: #fff;
    padding: 12px 20px;
    font-weight: 900;
`;

export const Flex = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid black;
    width: 400px;
`;
