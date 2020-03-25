import styled from "styled-components";

export const AppComponent = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    min-height: 100vh;
`;
