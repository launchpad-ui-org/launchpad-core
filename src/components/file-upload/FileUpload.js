import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { List, ListItem } from '../list';
import Hint from '../hint/Hint';
import generateId from '../../utilities/generateId';
import ThemeContext from '../../themeContext';

const FileUpload = ({
  className,
  dragAndDrop,
  errorText,
  hasError,
  helpText,
  label,
  name,
  onChange,
  uploadBtnVariant,
  ...others
}) => {
  const { theme } = useContext(ThemeContext);

  const [files, setFiles] = useState([]);

  const id = generateId('file-input');
  const inputName = name || id;
  const inputHintId = `${inputName}_hint`;
  const inputErrorId = `${inputName}_error`;

  const getFileNames = (fileList) => {
    const fileArray = [];

    for (let i = 0; i < fileList.length; i += 1) {
      fileArray.push(fileList[i].name);
    }

    return fileArray;
  };

  const handleChange = (e) => {
    e.preventDefault();

    const selectedFiles = e.target.files || e.dataTransfer.files;

    setFiles(getFileNames(selectedFiles));
    onChange(selectedFiles);
  };

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      className={classnames('rcl-file-upload', className, {
        [`rcl-file-upload--${theme}`]: theme,
        'has-error': hasError,
      })}
    >
      <input
        id={id}
        name="fileUpload"
        type="file"
        onChange={handleChange}
        multiple
        {...others}
      />
      <label
        onDragOver={onDragOver}
        onDrop={handleChange}
        htmlFor={id}
        className={classnames('rcl-file-upload__wrapper', {
          'rcl-file-upload__wrapper--drag-and-drop': dragAndDrop,
        })}
      >
        {dragAndDrop && (
          <span className="rcl-file-upload__drag-drop-label">
            Select a file to upload or drag and drop in the box
          </span>
        )}
        <span
          className={classnames('rcl-btn rcl-btn--condensed rcl-btn--nowrap', {
            [`rcl-btn--${uploadBtnVariant}`]: uploadBtnVariant,
            'rcl-btn--no-radius': !dragAndDrop,
          })}
        >
          {label}
        </span>
        {!files.length && (
          <span className="rcl-file-upload__no-files-label">
            No files selected
          </span>
        )}
        {dragAndDrop ? (
          <>
            <div className="margin-top-16" />
            <List className="rcl-file-upload__file-list">
              {files.map((file, index) => {
                return <ListItem key={`file-${index}`}>{file}</ListItem>;
              })}
            </List>
          </>
        ) : (
          <span>{files.join(', ')}</span>
        )}
      </label>
      {(helpText || errorText) && (
        <div className="rcl-formfield__hints">
          {helpText && <Hint id={inputHintId}>{helpText}</Hint>}
          {hasError && (
            <Hint id={inputErrorId} type="error">
              {errorText}
            </Hint>
          )}
        </div>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Makes fiel upload drag and drop */
  dragAndDrop: PropTypes.bool,
  /** Text to be displayed when there is an error. */
  errorText: PropTypes.string,
  /** Specifies the error state. */
  hasError: PropTypes.bool,
  /** Assistive text to be displayed with form field. */
  helpText: PropTypes.string,
  /** File upload label */
  label: PropTypes.string,
  /** Specifies input name attribute. */
  name: PropTypes.string,
  /** Triggers onChange callback */
  onChange: PropTypes.func,
  /** Specifies the upload button variant */
  uploadBtnVariant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'hollow',
    'link',
    'block',
  ]),
};

FileUpload.defaultProps = {
  className: '',
  dragAndDrop: false,
  errorText: '',
  hasError: false,
  helpText: '',
  label: 'Select a File',
  onChange() {},
  uploadBtnVariant: null,
};

export default FileUpload;
