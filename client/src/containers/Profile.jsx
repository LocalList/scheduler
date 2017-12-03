import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { button, Image } from 'react-bootstrap';
import { editProfile } from '../actions/index';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emergencyContact: this.props.user.emergencyContact,
      address: this.props.user.address,
      email: this.props.user.email,
      phoneNumber: this.props.user.phoneNumber,
    };

    this.onChangeEC = this.onChangeEC.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
  }

  onChangeEC(e) {
    this.setState({
      emergencyContact: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }


  render() {
    return (
      <div className="pcontainer">
        <div className="ptop" >
          <Image className="imaP" src="https://static.pexels.com/photos/189349/pexels-photo-189349.jpeg" circle />
          <p className="np1">{this.props.user.name}</p>
        </div>
        <div className="pbot">
          <div className="b-container">
            <input className="pIn" id="emergencyContactP" type="text" name="emergencyContact" onChange={this.onChangeEC} value={this.state.emergencyContact} />
          </div>
          <div className="b-container">
            <input className="pIn" id="addressP" type="text" name="address" value={this.state.address} onChange={this.onChangeAddress} />
          </div>
          <div className="b-container">
            <input className="pIn" id="emailP" type="text" name="email" value={this.state.email} onChange={this.onChangeEmail} />
          </div>
          <div className="b-container">
            <input className="pIn" id="phoneNumberP" type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChangePhone} />
          </div>
          <button className="btnP" onClick={() => {
            let data = {
              name: this.props.user.name,
              emergencyContact: this.state.emergencyContact,
              address: this.state.address,
              email: this.state.email,
              phoneNumber: this.state.phoneNumber,
            };

            this.props.editProfile(data);
          }}>Edit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editProfile,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
