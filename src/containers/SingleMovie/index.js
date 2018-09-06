// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovie } from 'store/actions'
import ActionHero from 'containers/ActionHero'

type Props = {
  id: string,
  movie: {
    id: string,
    title?: string
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
    // const {
    //   movie: { title }
    // } = this.props
    return (
      <div className="SingleMovie">
        <ActionHero />
      </div>
    )
  }
}
export default connect(
  ({ activeMovie }) => ({ movie: activeMovie }),
  dispatch => ({
    getMovie: id => dispatch(getMovie(id))
  })
)(SingleMovie)
