[![Twitter Follow](https://img.shields.io/twitter/follow/deiucanta.svg?style=social?maxAge=2592000)](https://twitter.com/deiucanta)
[![Version](https://img.shields.io/npm/v/react-click-boundary.svg)](https://www.npmjs.com/package/react-click-boundary)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/deiucanta/react-click-boundary/blob/master/LICENSE)

---

This is a React component that helps you listen for clicks outside your element. Classic use cases for such a component are

- closing a dropdown when clicking outside
- closing a modal when clicking outside
- canceling inline editing when clicking outside

## How is this better than the alternatives?

1. It has a better name 😃 Most of the alternative names are using verbs (`react-click-outside` or `react-onclickoutside`). I think that the component names should be using nouns and that's why this is called `react-click-boundary`.

2. It's not a Higher Order Component. The alternatives which are build as HOCs allow you to handle the events but only outside of your component. You wrap your component in their HOC and only the parent component can register a handler.

3. It doesn't add new DOM elements. Some of the alternatives add a `<div>` wrapper around your elements. This component doesn't do that, instead it uses your outermost element as a boundary.

In short: it has a better name, it's not a HOC and it doesn't add unnecesary DOM elements.

## Installation

```bash
npm install react-click-boundary --save
```

## Example

```js
import React from 'react'
import ClickBoundary from 'react-click-boundary'

class Modal extends React.Component {
  render() {
    return (
      <ClickBoundary onClickOutside={() => alert('yes!')}>
        <div className="modal">
          Content
        </div>
      </ClickBoundary>
    )
  }
}

export default Modal
```

## Change Log

**0.1.0** (2017-12-04) **—** initial release

## Contributing

Before you submit a pull request, please take the following actions.

1. Open an issue describing the contribution you would like to make
2. Discuss until we all agree that your idea is useful for the project
3. Create a pull request but make sure you follow the style guide and the tests pass
4. Voila! You've done an amazing job.

## Credits

- [Hexbridge](http://hexbridge.com) for sponsoring my open-source work.

## License

MIT @ [Andrei Canta](https://twitter.com/deiucanta)
