import React from 'react'
import ContactUsView from './ContactUsView'

// import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

it('renders correctly', () => {
  const tree = shallow(
    <ContactUsView />
  )
  // console.log(tree.debug())
})
