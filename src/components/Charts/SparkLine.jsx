import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const SparkLine = ({ id, height, width, color, data, type }) => {
  return (
    <Sparklines
      id={id}
      height={height}
      width={width}
      data={data}
      type={type}
    >
      <SparklinesLine color={color}/>
    </Sparklines>
  )
}

export default SparkLine