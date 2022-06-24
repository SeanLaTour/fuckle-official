import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block', width: "250px" }}
          data-ad-client='ca-pub-12121212'
          data-ad-slot='12121212'
          data-ad-format='auto' />
    );
  }
}