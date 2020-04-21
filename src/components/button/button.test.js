import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let button;

  beforeEach(() => {
    button = shallow(
      <Button
        className="rcl-btn--custom"
        size="lg"
        variant="primary"
        type="submit"
        block
        disabled
      >
        <span>Submit</span>
      </Button>,
    );
  });

  it('Should render without errors', () => {
    expect(button.length).toBe(1);
  });

  it('Should render children', () => {
    expect(button.children().length).toBe(1);
    expect(button.children().text()).toBe('Submit');
  });

  it('Should render theme based on `variant prop`', () => {
    expect(button.hasClass('rcl-btn--primary')).toBe(true);
  });

  it('Should accept custom classes', () => {
    expect(button.hasClass('rcl-btn--custom')).toBe(true);
  });

  it('Should render button as block', () => {
    expect(button.hasClass('rcl-btn--block')).toBe(true);
  });

  it('Should render button size variant', () => {
    expect(button.hasClass('rcl-btn--lg')).toBe(true);
  });

  it('Should rbe able to disable button', () => {
    expect(button.prop('disabled')).toBe(true);
  });
});
