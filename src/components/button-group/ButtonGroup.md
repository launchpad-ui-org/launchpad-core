### Managing Button Group State

The `ButtonGroup` component offers an `onChange` callback that can be attached to each item to return the selected index and value. The eample below shows how state can be managed externally.

### Radio Button Group

```jsx
import { useState } from 'react';
import { ButtonGroup } from '@alaneicker/react-component-library';

const [checked, setAsChecked] = useState(1);
const [checkedValue, setCheckedValue] = useState('Option');

const options = [
  {
    text: 'Acura',
    value: 'Acura',
  },
  {
    text: 'Chevrolet',
    value: 'Chevrolet',
  },
  {
    text: 'Ford',
    value: 'Ford',
  },
  {
    text: 'Volkswagen',
    value: 'Volkswagen',
  },
];

<ButtonGroup
  label="Favorite Car Brand"
  onChange={({ value, index }) => {
    setAsChecked(index);
    setCheckedValue(value);
  }}
  options={options.map((option, i) => {
    return i === checked ? { ...option, checked: true } : option;
  })}
/>;
```

### button Group Sizes

Sizes include `sm`, `md`, and `lg`.

```jsx
import { ButtonGroup } from '@alaneicker/react-component-library';

<>
  <ButtonGroup
    label="Small Button Group"
    size="sm"
    options={[
      {
        text: 'Option',
        value: 'Option',
        checked: true,
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
  <ButtonGroup
    label="Medium Button Group"
    size="md"
    options={[
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        checked: true,
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
  <ButtonGroup
    label="Default Button Group"
    options={[
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        checked: true,
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
  <ButtonGroup
    label="Large Button Group"
    size="lg"
    options={[
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        checked: true,
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
</>;
```

### Flexible Button Group

A `ButtonGroup` with many options do not work well on smaller devices. In this case, it is recommended to use a `DropDown` menu to convey the list of options.

```jsx
import { ButtonGroup } from '@alaneicker/react-component-library';

<ButtonGroup
  label="Favorite Car Brand"
  options={[
    {
      text: 'Acura',
      value: 'Acura',
    },
    {
      text: 'Chevrolet',
      value: 'Chevrolet',
      checked: true,
    },
    {
      text: 'Ford',
      value: 'Ford',
    },
    {
      text: 'Volkswagen',
      value: 'Volkswagen',
    },
  ]}
  stretch
/>;
```