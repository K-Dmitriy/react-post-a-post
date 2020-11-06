import React from 'react';

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'darkred' : 'black'};
        :hover {
            color: darkblue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = () => {
    return (
        <Header as="a" colored> {/* as="a" заменить текущий тег (div) на тег a*/}
            <h1>Dmitry Kozlov</h1>
            <h2>5 записей, из них понравилось 0 записей</h2>
        </Header>
    );
};

export default AppHeader;