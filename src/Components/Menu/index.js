import React from 'react';

function MenuItem() {
  return (
    <div
      style={{
        display: 'flex',
        height: '120px',
        width: '100%',
        border: '2px solid blue',
      }}
    >
      {/* Left section */}
      <div
        style={{
          width: '150px',
          height: '100%',
          border: '2px solid yellow',
        }}
      ></div>

      {/* Center section */}
      <div
        style={{
          flex: 1,
          border: '2px solid orange',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        <p>Album Name</p>
        <p
          style={{
            fontSize: '10px',
          }}
        >
          bnkjhgn,mlkjkjknmnmnbjhfhjvmv
        </p>
      </div>

      {/* Right section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '120px',
          height: '100%',
          border: '2px solid yellow',
          color: '#fff',
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
      >
        100 follows
      </div>
    </div>
  );
}

export default ({ data }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '380px',
        maxHeight: '500px',
        border: '5px solid red',
        overflowY: 'auto',
        top: '61px',
        backgroundColor: 'black',
      }}
    >
      {data.map(n => <MenuItem  />)}
    </div>
  )
};


