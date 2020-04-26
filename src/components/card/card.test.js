/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
  let card;

  beforeEach(() => {
    card = shallow(
      <Card title="Card Title" footer={<div />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum
        lectus vel libero gravida, sit amet sodales ipsum maximus.
      </Card>,
    );
  });

  it('Should render without errors', () => {
    expect(card.length).toBe(1);
  });

  it('Should render a header', () => {
    expect(card.find('.rcl-card__header').length).toBe(1);
  });

  it('Should render a body', () => {
    expect(card.find('.rcl-card__body').length).toBe(1);
  });

  it('Should render a footer', () => {
    expect(card.find('.rcl-card__footer').length).toBe(1);
  });
});