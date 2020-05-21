import React, { useState, useRef, Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import FormField from '../form-field';
import Hint from '../hint';
import { List, ListItem } from '../list';

const CreditCardField = ({
  className,
  customFields,
  label,
  onChange,
  ...others
}) => {
  const state = useState({
    number: '',
    expiry: '',
    cvc: '',
    zip: '',
  });

  const fields = [
    ...[
      {
        placeholder: 'Card Number',
        fieldName: 'cc_number',
        hasError: false,
        errorText: 'Card number is required',
      },
      {
        placeholder: 'Card Expiration',
        fieldName: 'cc_expiry',
        hasError: false,
        errorText: 'Card expiration date is required',
      },
    ],
    ...customFields,
  ];

  console.log(fields);

  const hasErrors = fields
    .map(({ hasError }) => {
      return hasError;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  const handleChange = (e) => {
    onChange(state);
  };

  return (
    <>
      <fieldset
        className={classnames('atomikui-credit-card-field', className, {
          'has-error': hasErrors,
        })}
        {...others}
      >
        <legend className="atomikui-label">{label}</legend>
        <div className="atomikui-credit-card-field__fields">
          <svg
            id="Layer_1"
            enableBackground="new 0 0 480 480"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            height="38"
          >
            <path
              fill="#666"
              d="m472 135h-464c-4.4 0-8-3.6-8-8v-24c0-22.1 17.9-40 40-40h400c22.1 0 40 17.9 40 40v24c0 4.4-3.6 8-8 8zm0 16h-464c-4.4 0-8 3.6-8 8v36c0 4.4 3.6 8 8 8h464c4.4 0 8-3.6 8-8v-36c0-4.4-3.6-8-8-8zm-464 68h464c4.4 0 8 3.6 8 8v150c0 22.1-17.9 40-40 40h-400c-22.1 0-40-17.9-40-40v-150c0-4.4 3.6-8 8-8zm140 117c0-4.4-3.6-8-8-8h-67c-4.4 0-8 3.6-8 8s3.6 8 8 8h67c4.4 0 8-3.6 8-8zm0-50c0-4.4-3.6-8-8-8h-67c-4.4 0-8 3.6-8 8s3.6 8 8 8h67c4.4 0 8-3.6 8-8z"
            />
          </svg>
          {fields.map(({ placeholder, fieldName, hasError }) => {
            return (
              <div
                key={shortid.generate()}
                className={`atomikui-credit-card-field__${fieldName}`}
              >
                <FormField
                  name={`cc_${fieldName}`}
                  placeholder={placeholder}
                  value={state.number}
                  hasError={hasError}
                  borderless
                />
              </div>
            );
          })}
        </div>
      </fieldset>
      {!!hasErrors && (
        <List>
          {fields.map(({ hasError, errorText }) => {
            return (
              <Fragment key={shortid.generate()}>
                {hasError && (
                  <ListItem>
                    <Hint type="error">{errorText}</Hint>
                  </ListItem>
                )}
              </Fragment>
            );
          })}
        </List>
      )}
    </>
  );
};

CreditCardField.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Form fields */
  customFields: PropTypes.arrayOf(
    PropTypes.shape({
      placeholder: PropTypes.string,
      fieldName: PropTypes.string,
      hasError: PropTypes.bool,
      errorText: PropTypes.string,
    }),
  ),
  /** Creditcard fieldset label */
  label: PropTypes.string,
  /** onChange callback */
  onChange: PropTypes.func,
};

CreditCardField.defaultProps = {
  className: '',
  customFields: [],
  label: '',
  onChange() {},
};

export default CreditCardField;
