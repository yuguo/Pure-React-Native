import React, {Component} from 'react';
import {Toast} from '../pure_module/src';

const TipsView = () => {
  return(
    <Toast
      backgroundColor="blue"
      onClosed={()=>{console.log('onClosed!')}}
    />
  )
}

export default TipsView;