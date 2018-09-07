// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import './index.css'

type TabProps = {
  title: string,
  content?: any,
  active?: boolean,
  index?: number,
  onClick?: Function
}
type TabListProps = {
  tabs: Array<TabProps>,
  onClick?: Function
}
type Props = {
  className?: string,
  items?: Array<TabProps>
}
type State = {
  activeTab?: number
}
const TabList = ({ tabs, onClick = () => {} }: TabListProps) => (
  <menu role="TabList" className="TabList">
    <ul className="TabList-list">
      {tabs.map((tab, index) => (
        <TabItem {...tab} index={index} key={index} onClick={onClick} />
      ))}
    </ul>
  </menu>
)

const TabItem = ({ title, active, index, onClick = () => {} }: TabProps) => (
  <li
    className={classNames('Tab', { 'Tab--active': active })}
    aria-pressed={active ? 'true' : 'false'}
    role="tab"
    onClick={() => onClick(index)}
    tabIndex="-1"
  >
    {title}
  </li>
)

const TabPanel = ({ content, active, index }: TabProps) => (
  <section
    role="tabpanel"
    className={classNames('TabPanel', { 'TabPanel--active': active })}
    aria-hidden={active ? 'false' : 'true'}
  >
    {content}
  </section>
)

export default class Tabs extends Component<Props, State> {
  state = { activeTab: 0 }
  onClick = (index: number) => {
    this.setState({ activeTab: index })
  }
  render() {
    const { className, items = [] } = this.props
    const { activeTab = 0 } = this.state
    return (
      <div className={classNames('Tabs', className)}>
        <TabList
          onClick={this.onClick}
          tabs={items.map((tab, index) => ({
            ...tab,
            active: activeTab === index
          }))}
        />
        <div className="Tabs-panels">
          {items.map((item, index) => (
            <TabPanel
              key={index}
              {...item}
              active={activeTab === index}
              index={index}
            />
          ))}
        </div>
      </div>
    )
  }
}
