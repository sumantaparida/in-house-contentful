import styled from 'styled-components';

const NavigationStyle = styled.header`
    .navHeader {
        position: sticky;
        top: 0;

        .navBar {
            display: flex;
            height: 40px;
            padding: 16px;
            align-items: center;
            background-color: rgb(22, 27, 34);

            .navMenuList {
                display: flex;
                width: 50%;
                gap: 24px;
            }
        }
    }
`;

export default NavigationStyle;
