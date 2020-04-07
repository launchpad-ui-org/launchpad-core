import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import createFocusTrap from 'focus-trap';
import FormField from '../form-field';
import Button from '../button';
import Label from '../label';
import validateDate from '../../utilities/validate-date';

const DatePicker = ({
  classes,
  disabled,
  label,
  onChange,
  onDateChange,
  value,
  ...props
}) => {
  const calendar = useRef();
  const [focusTrap, setFocusTrap] = useState(null);
  const [theValue, setTheValue] = useState(validateDate(value));
  const [isOpen, setIsOpen] = useState(false);

  const cancel = () => {
    setIsOpen(false);
  };

  const handleDateChange = (details) => {
    const date = new Date(details)
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .toString();

    if (date === 'Invalid Date') {
      onChange(date);
      return;
    }

    setTheValue(date);
    onChange(date);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      cancel();
    }
  };

  useEffect(() => {
    setFocusTrap(
      createFocusTrap(calendar.current, {
        allowOutsideClick: true,
        clickOutsideDeactivates: false,
        escapeDeactivates: true,
        fallbackFocus: calendar,
      }),
    );
  }, [calendar]);

  useEffect(() => {
    if (focusTrap) {
      setTimeout(() => {
        focusTrap[isOpen ? 'activate' : 'deactivate']();
      }, 200);
    }
  }, [focusTrap, isOpen]);

  return (
    <div className={classnames('date-picker', classes)}>
      {label && (
        <div className="date-picker__label">
          <Label>{label}</Label>
        </div>
      )}
      <div className="date-picker__input">
        <FormField
          mask="99/99/9999"
          onBlur={(e) => { return handleDateChange(e.target.value); }}
          value={theValue}
          disabled={disabled}
          {...props}
        />
        <Button
          classes="date-picker__input__btn"
          variant="hollow"
          size="md"
          onClick={() => { return setIsOpen(!isOpen); }}
          disabled={disabled}
        >
          Select a Date
        </Button>
      </div>
      <div
        className={classnames('date-picker__calendar', {
          'is-open': isOpen,
        })}
        onKeyDown={(e) => { return handleKeyDown(e); }}
        onClick={() => { return cancel(); }}
      >
        <div className="date-picker__calendar__ui" ref={calendar}>
          <Calendar
            onChange={(details) => { return handleDateChange(details); }}
            value={new Date(theValue)}
          />
        </div>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  /** Adds custom component CSS classes */
  classes: PropTypes.string,
  /** Disables a date picker form field and calandar. */
  disabled: PropTypes.bool,
  /** Specifies label text. */
  label: PropTypes.string,
  /** Triggers callback when date picker input value changes */
  onChange: PropTypes.func,
  /** Triggers callback when calendar date changes */
  onDateChange: PropTypes.func,
  /** The date picker input value. Must be a Date(). */
  value: PropTypes.string,
};

DatePicker.defaultProps = {
  classes: '',
  disabled: false,
  label: '',
  onChange() {},
  onDateChange() {},
  value: '',
};

export default DatePicker;
