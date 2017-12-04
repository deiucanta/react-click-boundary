import React from 'react'
import PropTypes from 'prop-types'

class ClickBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onClickOutside: PropTypes.func.isRequired,
  }
  render() {
    return React.cloneElement(this.props.children, {
      ref: element => (this.container = element),
    })
  }
  componentDidMount() {
    document.addEventListener('click', this.handle, false)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handle, false)
  }
  handle = event => {
    if (this.container.contains(event.target) === false) {
      this.props.onClickOutside(event)
    }
  }
}

export default ClickBoundary
