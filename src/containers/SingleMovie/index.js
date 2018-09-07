// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovie } from 'store/actions'
import ActionHero from 'containers/ActionHero'
import Tabs from 'components/Tabs'
import VideoGrid from 'components/VideoGrid'
import CastList from 'components/CastList'
import Link from 'components/Link'
type Props = {
  id: string,
  movie: {
    id: string,
    title?: string,
    overview?: string,
    credits: Array<any>,
    videos: Array<any>
  },
  getMovie: Function
}

class SingleMovie extends Component<Props> {
  componentDidMount = () => {
    const { movie, id, getMovie } = this.props
    if (!movie || movie.id !== id) {
      getMovie(id)
    }
  }
  render() {
    const {
      movie: { overview, videos = [], credits = [] }
    } = this.props
    return (
      <div className="SingleMovie">
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
  ({ activeMovie }) => ({ movie: activeMovie }),
  dispatch => ({
    getMovie: id => dispatch(getMovie(id, { videos: true, credits: true }))
  })
)(SingleMovie)
