// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { search } from 'store/actions'
import Form from 'components/Form'
import FormInput from 'components/FormInput'

type Props = {
  searchMovies: Function,
  search: {
    query?: string
  }
}

class SearchBar extends Component<Props> {
  onChange = (event: Event, formData) => {
    this.props.searchMovies(formData.query)
  }
  render() {
    const {
      search: { query = '' }
    } = this.props
    return (
      <Form className="SearchBar" onChange={this.onChange}>
        <FormInput
          modifiers={['fill', 'large']}
          label="Search for movie or TV-show"
          hiddenLabel
          placeholder="Search for movie or TV-show"
          name="query"
          type="search"
          role="search"
          defaultValue={query}
        />
      </Form>
    )
  }
}
export default connect(
  ({ search }) => ({ search }),
  dispatch => ({ searchMovies: query => dispatch(search(query)) })
)(SearchBar)
