import React from 'react'
import ContactUs from './ContactUs'

// import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

it('renders correctly', () => {
  const tree = shallow(
    <ContactUs />
  )
  console.log(tree.debug())
})
