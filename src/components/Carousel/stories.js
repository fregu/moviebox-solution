import React from 'react'
import { storiesOf } from '@storybook/react'
import Carousel from 'components/Carousel'

const slideStyle = {
  height: '200px',
  maxWidth: '100%',
  width: '150vw',
  backgroundColor: 'pink'
}
const slideStyle2 = { height: '200px', width: '200px', backgroundColor: 'pink' }

storiesOf('Carousel', module)
  .add('with full width content', () => (
    <Carousel>
      <div style={slideStyle}>Slide 1</div>
      <div style={{ ...slideStyle, backgroundColor: 'lightblue' }}>Slide 2</div>
      <div style={{ ...slideStyle, backgroundColor: 'purple' }}>Slide 3</div>
    </Carousel>
  ))
  .add('with equal wide items', () => (
    <Carousel>
      <div style={slideStyle2}>Slide 1</div>
      <div style={{ ...slideStyle2, backgroundColor: 'lightblue' }}>
        Slide 2
      </div>
      <div style={{ ...slideStyle2, backgroundColor: 'purple' }}>Slide 3</div>
      <div style={slideStyle2}>Slide 1</div>
      <div style={{ ...slideStyle2, backgroundColor: 'lightblue' }}>
        Slide 2
      </div>
      <div style={{ ...slideStyle2, backgroundColor: 'purple' }}>Slide 3</div>
      <div style={slideStyle2}>Slide 1</div>
      <div style={{ ...slideStyle2, backgroundColor: 'lightblue' }}>
        Slide 2
      </div>
      <div style={{ ...slideStyle2, backgroundColor: 'purple' }}>Slide 3</div>
      <div style={slideStyle2}>Slide 1</div>
      <div style={{ ...slideStyle2, backgroundColor: 'lightblue' }}>
        Slide 2
      </div>
      <div style={{ ...slideStyle2, backgroundColor: 'purple' }}>Slide 3</div>
      <div style={slideStyle2}>Slide 1</div>
      <div style={{ ...slideStyle2, backgroundColor: 'lightblue' }}>
        Slide 2
      </div>
      <div style={{ ...slideStyle2, backgroundColor: 'purple' }}>Slide 3</div>
    </Carousel>
  ))
