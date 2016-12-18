import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from './Button'
import Welcome from './Welcome'
import AppMenu from 'views/AppMenu'
import PersonList from 'components/PersonList/PersonList'
import { MockData } from 'utils'

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))

storiesOf('AppMenu', module).add('Example', () => (
  <AppMenu />
))

storiesOf('PersonList', module).add('Example', () => {
  return <PersonList data={MockData.PersonArray} onItemPress={(item) => action('pressed')} />
})
