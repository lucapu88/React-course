import React from 'react';

const RefExample = () => {
  const refBottom = React.useRef(null);
  const refTop = React.useRef(null);

  const scrollBottomElement = () => {
    refBottom.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const scrollTopElement = () => {
    refTop.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <h1 ref={refTop}>Use Ref</h1>
      <div
        className="my-5 mx-auto"
        style={{
          height: '100vh',
        }}
      >
        <button className="btn btn-info" onClick={scrollBottomElement}>
          Scroll bottom
        </button>
      </div>

      <h2>Testo Testo</h2>
      <div
        style={{
          height: '100vh',
        }}
      ></div>

      <h2 ref={refBottom}>Ancora Testo</h2>
      <div
        style={{
          height: '30vh',
        }}
      ></div>
      <button className="btn btn-info" onClick={scrollTopElement}>
        Scroll top
      </button>
    </>
  );
};

export default RefExample;
