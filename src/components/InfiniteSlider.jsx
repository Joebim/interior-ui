import React, { useState } from 'react';

export default function InfiniteSlider({ children, duration, reverse = false, isHovered, className, loopClass }) {

  return (
    <div
      className={`loop-slider ${loopClass}`}
      style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal',
        // animationPlayState: isHovered ? 'paused' : 'running',
      }
    }>
      <div className={`inner ${className}`}>
        {children}
      </div>
    </div>
  );
}
