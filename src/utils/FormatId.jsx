import React from 'react';

const FormatID = (id) => {
  if (id < 10) {
    return `No.00${id}`;
  } else if (id < 100) {
    return `No.0${id}`;
  } else {
    return `No.${id}`;
  }
};

export default FormatID;
