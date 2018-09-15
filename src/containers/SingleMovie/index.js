// @flow
import React from 'react'
import { Query } from 'react-apollo'
import getSingleQuery from 'queries/getSingle.gql'
import ActionHero from 'containers/ActionHero'
import Tabs from 'components/Tabs'
import VideoGrid from 'components/VideoGrid'
import CastList from 'components/CastList'
import Link from 'components/Link'

type Props = {
  id: string
}

const SingleMovie = ({ id }: Props) => (
  <Query query={getSingleQuery} variables={{ type: 'movie', id }}>
    {({
      data: {
        movieInfo: {
          title,
          backdropPath,
          overview,
          videos = [],
          credits = []
        } = {}
      } = {},
      loading
    }) =>
      loading ? (
        'Laddar'
      ) : (
        <div className="SingleMovie">
          <ActionHero id={id} media={'tv'} />
          <Link
            className="SingleMovie-backLink"
            modifiers={['discreet']}
            to="/"
          >
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
  </Query>
)

export default SingleMovie
