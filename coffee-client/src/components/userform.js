import React, { Component } from 'react';
import * as UserActions from '../redux/actions/users';
import { connect } from 'react-redux';
import { InputButton } from './buttons';
import { Label, InputField, SelectInput, LabelSelect, Form } from './input-fields';
import AddFile from './add-file';

class UserForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      business_type: 'customer',
      business_name: '',
      country: '',
      email: '',
      description: '',
      details: '',
      picture_hash: '',
      id: Math.round(Math.random() * 10e14)
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.business_type === 'customer')
      this.props.createCustomer(this.state);
    if (this.state.business_type === 'producer')
      this.props.createProducer(this.state);
    this.props.history.push('/');
  }

  addHash = hash => {
    this.setState({ picture_hash: hash });
  };

  render () {
    return (
      <div>
        <AddFile onFileAdd={this.addHash}></AddFile>
        <Form onSubmit={this.handleSubmit}>
          <LabelSelect>
            Business type:
            <SelectInput
              name="business_type"
              value={this.state.business_type}
              onChange={this.handleInput}
            >
              <option value="customer">Coffee Shop</option>
              <option value="producer">Coffee Producer</option>
            </SelectInput>
          </LabelSelect>
          <Label>
            Business name:
            <InputField
              name="business_name"
              type="text"
              value={this.state.business_name}
              onChange={this.handleInput}
            />
          </Label>
          <Label>
            Country:
            <InputField
              name="country"
              type="text"
              value={this.state.country}
              onChange={this.handleInput}
            />
          </Label>
          <Label>
            Email:
            <InputField
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </Label>
          <Label>
            Description:
            <InputField
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleInput}
            />
          </Label>
          <Label>
            Details:
            <InputField
              name="details"
              type="text"
              value={this.state.details}
              onChange={this.handleInput}
            />
          </Label>
          <InputButton type="submit" value="Submit" />
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createCustomer: customer => dispatch(UserActions.createCoffeeShop(customer)),
  createProducer: producer => dispatch(UserActions.createProducer(producer))
});

export default connect(
  null,
  mapDispatchToProps
)(UserForm);
