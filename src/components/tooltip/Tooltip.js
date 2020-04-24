import React, { Children, cloneElement, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tooltip = ({ children, align, triggerOnClick, ...props }) => {
  const [tooltip, setToolTip] = useState(null);

  const createTooltipElement = (content) => {
    return (
      <div
        id="rcl-tooltip"
        className={classnames('rcl-tooltip', {
          [`rcl-tooltip--align-${align}`]: align,
        })}
      >
        {content}
      </div>
    );
  };

  const createTooltip = (e) => {
    const content = e.target.getAttribute('data-tooltip');
    alert('sdfsadfasdf');
    console.log(e.target);

    const {
      target: { offsetTop, offsetLeft, clientWidth, clientHeight },
    } = e;

    setToolTip(createTooltipElement(content));

    setTimeout(() => {
      const theTooltip = document.querySelector('#rcl-tooltip');
      const coords = theTooltip.getBoundingClientRect();

      const tooltipHeight = coords.height;
      const tooltipWidth = coords.width;

      const targetOffsetLeft = offsetLeft;
      const targetOffsetTop = offsetTop;

      const arrowOffset = 12;

      const topPosition = `${
        targetOffsetTop - (tooltipHeight + arrowOffset)
      }px`;

      const bottomPosition = `${
        targetOffsetTop + (clientHeight + arrowOffset)
      }px`;

      const centerOffset =
        clientWidth > tooltipWidth
          ? targetOffsetLeft + (clientWidth - tooltipWidth) / 2
          : targetOffsetLeft - (tooltipWidth - clientWidth) / 2;

      switch (align) {
        case 'right':
          break;
        case 'left':
          break;
        case 'bottom-left':
          theTooltip.style.top = bottomPosition;
          theTooltip.style.left = `${targetOffsetLeft}px`;
          break;
        case 'bottom-center':
          theTooltip.style.top = bottomPosition;
          theTooltip.style.left = `${centerOffset}px`;
          break;
        case 'bottom-right':
          theTooltip.style.top = bottomPosition;
          theTooltip.style.right = `${
            window.innerWidth - (targetOffsetLeft + clientWidth)
          }px`;
          break;
        case 'top-left':
          theTooltip.style.top = topPosition;
          theTooltip.style.left = `${targetOffsetLeft}px`;
          break;
        case 'top-center':
          theTooltip.style.top = topPosition;
          theTooltip.style.left = `${centerOffset}px`;
          break;
        case 'top-right':
          theTooltip.style.top = topPosition;
          theTooltip.style.right = `${
            window.innerWidth - (targetOffsetLeft + clientWidth)
          }px`;
          break;
        default:
      }
    }, 0);
  };

  const removeTooltip = () => {
    return setToolTip(null);
  };

  useEffect(() => {
    if (triggerOnClick) {
      document.addEventListener('click', (e) => {
        if (!e.target.getAttribute('data-tooltip')) {
          setToolTip(null);
        }
      });
    }
  }, []);

  return (
    <>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          ...props,
          ...(!triggerOnClick && {
            onMouseEnter: createTooltip,
            onMouseLeave: removeTooltip,
          }),
          ...(triggerOnClick && {
            onClick: createTooltip,
            onTouchStart: createTooltip,
          }),
        });
      })}
      {createPortal(tooltip, document.body)}
    </>
  );
};

Tooltip.propTypes = {
  /** The tooltip alignment */
  align: PropTypes.oneOf([
    'right',
    'left',
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'top-left',
    'top-center',
    'top-right',
  ]),
  /** The child element that will recieve a tooltip */
  children: PropTypes.node,
  /** The text that will be rendered as tooltip content */
  title: PropTypes.string,
  /** triggers the tooltip onClick/onTouchStart */
  triggerOnClick: PropTypes.bool,
};

Tooltip.defaultProps = {
  align: 'top-left',
  children: <></>,
  title: '',
  triggerOnClick: false,
};

export default Tooltip;
