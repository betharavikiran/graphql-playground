import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createShop = gql`
  mutation createShop($name: String!) {
      createShop(name: $name) {
          _id
      }
  }
`;

class CreateShopForm extends Component {
    state = {
        error: null
    };

  submitForm() {
      createShop({
          variables: {
              name: this.name.value,
          },
      })
          .catch((error) => {
              console.log(error);
              this.stateState({error: error.message});
          });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}> Submit</button>
      </div>
    );
  }
}

export default graphql(createShop, {
  name: 'createShop',
  options: {
    refetchQueries: ['Shops'],
  },
})(CreateShopForm);
