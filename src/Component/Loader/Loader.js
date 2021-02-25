import React from 'react';
import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
export default class App extends React.Component {
  //other logic
  render() {
    const {onLoad} = this.props;
    console.log(this.props);
    return (
      <Loader
        type="Bars"
        color="#DB7093"
        height={50}
        width={50}
        visible={onLoad}
      />
    );
  }
}
