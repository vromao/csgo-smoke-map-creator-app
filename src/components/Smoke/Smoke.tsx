import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

export interface BoxProps {
  id: any
  left: number
  top: number
  hideSourceOnDrag: boolean
}

const SmokeItem = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  cursor: move;
  z-index: 2;

  .smokeItem {
    width: 22.5em;
    height: 7.5em;
    background: #f2f9fe;
    -moz-border-radius: 6.25em;
    -webkit-border-radius: 6.25em;
    border-radius: 6.25em;
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    transform: translate(-50%, -50%) scale(0.3);
  }

  .smokeItem::after, .smokeItem::before {
    content: "";
    position: absolute;
    background: #f2f9fe;
    z-index: -1;
    border-radius: 50%;
  }

  .smokeItem::after{
    width: 7.5em;
    height: 7.5em;
    top: -3.125em;
    left: 3.125em;
  }

  .smokeItem::before{
    width: 11.25em;
    height: 11.25em;
    top: -5.625em;
    right: 3.125em;
  }
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
      <SmokeItem ref={drag}>
        <div className="smokeItem"></div>
      </SmokeItem>
    )
  }
  return (
    <SmokeItem ref={drag} style={{ left, top }}>
      <div className="smokeItem"></div>
    </SmokeItem>
  )
}

export default Smoke
