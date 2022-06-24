import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block', width: "250px" }}
          data-ad-client='ca-pub-4651779567680129'
          data-ad-slot='6842240717'
          data-ad-format='auto' />
    );
  }
}