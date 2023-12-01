# Create React Web Component

[![NPM Version](https://img.shields.io/npm/v/@geops/create-react-web-component.svg)](https://www.npmjs.com/package/@geops/create-react-web-component)
[![Github License](https://img.shields.io/github/license/Silind/create-react-web-component)](https://github.com/Silind-Software/create-react-web-component/blob/master/LICENSE)
![Build Status](https://github.com/oterral/create-react-web-component/workflows/build/badge.svg)

This project is a fork of the archived but great [SimonHoiberg/create-react-web-component](https://github.com/SimonHoiberg/create-react-web-component).

It includes the React 18 support and removed all cli stuff.

### How to use it

In your project:

```console
yarn add @geops/create-react-web-component
```

Create a js file:

```js
import ReactWebComponent from "@geops/create-react-web-component";
import MyReactComponent from "./MyReactComponent";

ReactWebComponent.setAttributes(MyReactComponent.attributes);
ReactWebComponent.setProperties(MyReactComponent.defaultProps);
ReactWebComponent.render(MyReactComponent, "trafimage-maps", { shadow: false });
```

## Contributing

### Getting Started

```console
yarn install
yarn test
```

### Issuess

In the case of a bug report, bugfix or a suggestions, please feel very free to open an issue.

### Pull request

Pull requests are always welcome, and I'll do my best to do reviews as fast as I can.

## License

This project is licensed under the [MIT License](https://github.com/Silind-Software/create-react-web-component/blob/master/LICENSE)

## Get Help

Read more about using Web Components with React on the [official React Docs](https://reactjs.org/docs/web-components.html)

- If appropriate, [open an issue](https://github.com/oterral/create-react-web-component/issues/new) on GitHub
