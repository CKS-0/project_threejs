import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          '#e52165',
          '#fa8072',
          '#80C670',
          '#726DE8',
          '#353934',
          '#2CCCE4',
          '#065535',
          '#f3ca20',
          '#ff6e40',
          '#FF96AD',
          '#05716c',
          '#5F123D',
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker