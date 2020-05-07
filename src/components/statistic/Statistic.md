A statistic is a piece of data about a specific attribute.

### Basic Statistic

A basict statistic has a value and a label.

```jsx
import { Statistic } from '@alaneicker/react-component-library';

<>
  <Statistic value="25,000" label="Views" />
  <Statistic
    value={
      <>
        Seventy
        <br />
        Thousand
      </>
    }
    label="Registered Users"
  />
</>;
```

### Top aligned Label

The `topLabel` prop can be used to position the label above the value.

```jsx
import { Statistic } from '@alaneicker/react-component-library';

<Statistic value="$75,000" label="Money Raised" topLabel />;
```

### Statistic With Icon

The `icon` prop can be used to set an icon nex to the calue. Set the icon color with the `iconColor` prop.

```jsx
import { Statistic } from '@alaneicker/react-component-library';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

<Statistic
  icon={faUsers}
  iconColor="#027abf"
  value="100,000"
  label="Members"
/>;
```

### Horizntal Statistic

The `horizontal` prop can be used to create a horizontal layout.

```jsx
import { Statistic } from '@alaneicker/react-component-library';

<Statistic value="45,700" label="Miles" horizontal />;
```

### Sizes

The `size` prop can be used to alter the statistic size. Sizes values include `sm`, `md`, and `lg`;

```jsx
import { Statistic } from '@alaneicker/react-component-library';

<>
  <Statistic value="33,000" label="Downloads" size="sm" />
  <Statistic value="33,000" label="Downloads" size="md" />
  <Statistic value="33,000" label="Downloads" size="lg" />
  <Statistic value="33,000" label="Downloads" /> {/* Default */}
</>;
```

### Colored

The `color` prop can be used to set the color of the statistic value.

```jsx
import { Statistic } from '@alaneicker/react-component-library';

<>
  <Statistic value="27" label="Red" color="red" />
  <Statistic value="8" label="Orange" color="orange" />
  <Statistic value="34" label="Gold" color="gold" />
  <Statistic value="27" label="Green" color="green" />
  <Statistic value="1" label="Light Blue" color="light-blue" />
  <Statistic value="11" label="Medium Blue" color="medium-blue" />
  <Statistic value="22" label="Dark Blue" color="dark-blue" />
  <Statistic value="3" label="Light Gray" color="light-gray" />
  <Statistic value="17" label="Medium Gray" color="medium-gray" />
  <Statistic value="87" label="Dark Gray" color="dark-gray" />
</>;
```