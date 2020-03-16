import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import smokeImage from '../../images/smoke-sprite.png';

export interface BoxProps {
  id: any
  left: number
  top: number
  hideSourceOnDrag: boolean
}

const SmokeItem = styled.div`
  position: absolute;
  height: 57px;
  width: 67px;
  cursor: move;
  z-index: 2;
  background-image: url(${smokeImage});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Smoke: React.FC<BoxProps> = ({
  id,
  left,
  top,
  hideSourceOnDrag
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: 'box' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  if (isDragging && hideSourceOnDrag) {
    return (
      <SmokeItem ref={drag} />
    )
  }
  return (
    <SmokeItem ref={drag} style={{ left, top }} />
  )
}

export default Smoke;
