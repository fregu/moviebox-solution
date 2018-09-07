// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getShow } from 'store/actions'
import ActionHero from 'containers/ActionHero'
import Tabs from 'components/Tabs'
import VideoGrid from 'components/VideoGrid'
import CastList from 'components/CastList'
import Link from 'components/Link'

type Props = {
  id: string,
  show: {
    id: string,
    title?: string,
    overview?: string,
    credits: Array<any>,
    videos: Array<any>
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
    const {
      show: { overview, videos = [], credits = [] }
    } = this.props
    return (
      <div className="SingleShow">
        <ActionHero />
        <Link className="SingleMovie-backLink" modifiers={['discreet']} to="/">
          Tillbaka
        </Link>
        <div className="layout-container layout-padding">
          <div className="text-lead">
            {overview &&
              overview.split('\n').map((p, index) => <p key={index}>{p}</p>)}
          </div>
          <Tabs
            items={[
              { title: 'Cast', content: <CastList cast={credits} /> },
              videos.length
                ? { title: 'Videos', content: <VideoGrid videos={videos} /> }
                : null
            ].filter(Boolean)}
          />
        </div>
      </div>
    )
  }
}
export default connect(
  ({ activeMovie }) => ({ show: activeMovie }),
  dispatch => ({
    getShow: id =>
      dispatch(getShow(id, { videos: true, credits: true, episodes: true }))
  })
)(SingleShow)
