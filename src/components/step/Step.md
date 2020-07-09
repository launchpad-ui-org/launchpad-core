The Step component accompanies the Stepper to represent a series of steps that have been or need to be completed.

```jsx
import { Step } from '@alaneicker/atomik-ui';

<>
  <Step label="Complete" href="/personal-info" isComplete={true}>
    1
  </Step>
  <Step label="Active" href="/personal-info" isActive={true}>
    2
  </Step>
  <Step label="Incomplete" href="/personal-info">
    3
  </Step>
</>;
```

#### Demos

[`<Stepper />`](/#/Navigation/Stepper)