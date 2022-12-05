import React from 'react';
import Section1Component from './main/Section1Component'
import Section2Component from './main/Section2Component'

function MainComponent({modalOpen}){
  return (
    <main id="main">
      <Section1Component/>
      <Section2Component modalOpen={modalOpen}/>
    </main>
  );
};

export default MainComponent;