// @flow
import React, { Component } from 'react'
import SearchBar from 'containers/SearchBar'
import SearchResults from 'containers/SearchResults'
import ActionHero from 'containers/ActionHero'
import View from 'components/View'
import { connect } from 'react-redux'
import CategoryBrowser from 'containers/CategoryBrowser'
import NewMovies from 'containers/NewMovies'

import Title from 'components/Title'
import movieBackground from 'assets/images/movie_background.jpg'
type Props = {
  search: {
    query?: string
  }
}
class HomeView extends Component<Props> {
  render() {
    const {
      search: { query }
    } = this.props
    return (
      <View fullWidth className="HomeView overflow-hidden" modifiers={['fill']}>
        <NewMovies />
        <ActionHero background={{ image: movieBackground }} withVideo>
          <Title className="text-center">Welcome to Moviebox</Title>
        </ActionHero>
        <SearchBar />
        {query ? <SearchResults /> : <CategoryBrowser />}
      </View>
    )
  }
}

export default connect(({ search }) => ({ search }))(HomeView)
