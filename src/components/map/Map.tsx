import React from 'react';
import styled from 'styled-components';

export interface MapProps {
    mapName: string
}

const MapWrapper = styled.section`
    width: 60%;
    height: 500px;
    position: absolute;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    background: red;
    transform: translateY(-50%);
`;


const Map: React.FC<MapProps> = ({ mapName }) => {
    return (
        <MapWrapper>

        </MapWrapper>
    );
}

export default Map;