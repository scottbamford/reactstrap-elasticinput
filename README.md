# reactstrap-elasticinput
Reactstrap Input component that autosizes to fit its contents when used with type=\"textarea\".

## Installation

Install react-use-async-callback locally within your project folder, like so:

```shell
npm install reactstrap-elasticinput
```

Or with yarn:

```shell
yarn add reactstrap-elasticinput
```

## Basic Usage

You can use ElasticInput anywhere you would use an Input, however its elastic autosizing only works if the type of the input is passed
as "textarea" (the default if no type is passed to EkasticInput)

### Typescript
```ts
import { ElasticInput } from 'reactstrap-elasticinput';

<ElasticInput type="textarea" name="..." value="..." />
```

### Javascript
```js
import { ElasticInput } from 'reactstrap-elasticinput';

<ElasticInput type="textarea" name="..." value="..." />
```

You can pass any of Input's props to ElasticInput and they will be passed through to the wrapped Input.

## CSS and Styling

All ElasticInput components have a CSS class of "elastic" attached to them (via their className prop).

You can use this in CSS to do things such as set a maximum height for example.

```css
textarea.elastic {
    max-height: 200px;
    transition: ease 0.4s;
}
```

The elastic size of the componet is always set using the style={{ height: [size]px }} prop and updated each time the user inputs into the component.

## Typescript
This package is written in typescript and comes with its own bindings.

## License

Licensed under the MIT license.
