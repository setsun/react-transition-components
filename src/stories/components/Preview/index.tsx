import * as React from 'react';

const Modal = (props) => {
  const { style, ...rest } = props;

  const modalStyles = {
    position: 'relative',
    display: 'inline-block',
    background: 'white',
    borderRadius: '6px',
    padding: '16px',
    boxShadow: '0 8px 6px -6px black',
  };

  return (
    <div
      style={{
        ...style,
        ...modalStyles,
      }}
      {...rest}
    >
      <h2
        style={{
          margin: 0,
          textAlign: 'center',
          letterSpacing: '2px',
          marginBottom: '16px',
        }}
      >
        Ms. Whiskers
      </h2>
      <img src="https://placekitten.com/g/270/180" />
      <p
        style={{
          margin: 0,
          textAlign: 'center',
          marginTop: '16px',
        }}
      >
        Loving and affectionate, pls adopt
      </p>
    </div>
  );
}

const Preview = (props) => {
  const previewStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
  };

  return (
    <div style={previewStyle}>
      <Modal {...props} />
    </div>
  );
}


export default Preview;
