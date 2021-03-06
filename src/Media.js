import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
};

const Media = (props) => {
  const {
    body,
    bottom,
    className,
    heading,
    left,
    list,
    middle,
    object,
    right,
    tag,
    top,
    ...attributes,
  } = props;

  let defaultTag;
  if (heading) {
    defaultTag = 'h4';
  } else if (left || right) {
    defaultTag = 'a';
  } else if (object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }
  const Tag = tag || defaultTag;

  const classes = classNames(
    className,
    {
      'media-body': body,
      'media-heading': heading,
      'media-left': left,
      'media-right': right,
      'media-top': top,
      'media-bottom': bottom,
      'media-middle': middle,
      'media-object': object,
      'media-list': list,
      media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list,
    }
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Media.propTypes = propTypes;

export default Media;
