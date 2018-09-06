// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getShow } from 'store/actions'
import ActionHero from 'containers/ActionHero'

type Props = {
  id: string,
  show: {
    id: string,
    title?: string
  },
  getShow: Function
}

class SingleShow extends Component<Props> {
  componentDidMount = () => {
    const { show, id, getShow } = this.props
    if (!show || show.id !== id) {
      getShow(id)
    }
  }
  render() {
    // const {
    //   show: {}
    // } = this.props
    return (
      <div className="SingleShow">
        <ActionHero />
      </div>
    )
  }
}
export default connect(
  ({ activeMovie }) => ({ show: activeMovie }),
  dispatch => ({
    getShow: id => dispatch(getShow(id))
  })
)(SingleShow)
