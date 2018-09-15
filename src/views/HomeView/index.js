// @flow
import React, { Component } from 'react'
import SearchBar from 'containers/SearchBar'
import SearchResults from 'containers/SearchResults'
import ActionHero from 'containers/ActionHero'
import View from 'components/View'
import { connect } from 'react-redux'
import CategoryBrowser from 'containers/CategoryBrowser'
import Title from 'components/Title'
import movieBackground from 'assets/images/movie_background.jpg'
import { clearActive } from 'store/actions'

type Props = {
  search: {
    query?: string
  },
  activeMovie?: any,
  clearActive: Function
}
class HomeView extends Component<Props> {
  componentDidMount = () => {
    this.props.clearActive()
  }
  render() {
    const {
      search: { query },
      activeMovie
    } = this.props
    return (
      <View fullWidth className="HomeView overflow-hidden" modifiers={['fill']}>
        <ActionHero
          background={{ image: movieBackground }}
          withVideo
          {...activeMovie}
        >
          <Title className="text-center">Welcome to Moviebox</Title>
        </ActionHero>
        <SearchBar />
        {query ? <SearchResults /> : <CategoryBrowser />}
      </View>
    )
  }
}

export default connect(
  ({ search, activeMovie }) => ({ search, activeMovie }),
  dispatch => ({ clearActive: () => dispatch(clearActive()) })
)(HomeView)
