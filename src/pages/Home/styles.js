import styled from 'styled-components';

export const HomeWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        width: 40%;

        img {
            animation: pulse infinite 2s ease-in-out;
        }

        h1 {
          text-align: center;
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(.9);
        } 
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(.9);
        }
    }
`