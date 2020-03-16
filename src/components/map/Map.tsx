import React, { useState } from 'react';
import styled from 'styled-components';
import { useDrop, XYCoord } from 'react-dnd';
import update from 'immutability-helper';
import Smoke from '../Smoke/Smoke';
import { DragItem } from '../../interfaces/DragItem';
import dust2Map from '../../images/de_dust2_radar.webp';

// export interface ContainerProps {
//     hideSourceOnDrag: boolean
// }

export interface ContainerState {
  boxes: { 
    [key: string]: {
      top: number,
      left: number,
      title: string
    } 
  };
};

const MapContainer = styled.section`
  position: relative;
  width: 1024px;
  height: 1024px;
  margin: auto;
  background-image: url(${dust2Map});
  background-size: cover;
`;

const Map: React.FC = () => {
  const [boxes, setBoxes] = useState<{
    [key: string]: {
      top: number,
      left: number
    }
  }>({
    a: { top: 20, left: 80 },
    b: { top: 180, left: 20 },
  });

  const [, drop] = useDrop({
    accept: 'box',
    drop: (item: DragItem, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveBox(item.id, left, top);
      return undefined;
    },
  });

  const moveBox = (id: string, left: number, top: number) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      }),
    );
  };

  return (
    <MapContainer ref={drop}>
      {Object.keys(boxes).map((key) => {
        const { left, top } = boxes[key];
        return (
          <Smoke
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={false}
          />
        );
      })}
    </MapContainer>
  );
};

export default Map;
