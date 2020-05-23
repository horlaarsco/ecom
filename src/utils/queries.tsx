import { gql } from "apollo-boost";

export const SIGN_UP = gql`
  mutation($data: UserInput) {
    addUser(input: $data) {
      firstName
      lastName
      email
      password
      role
      username
      password
      updatedAt
      createdAt
      verified
      id
      token
    }
  }
`;

export const LOG_IN = gql`
  mutation($data: LoginInput) {
    loginUser(input: $data) {
      firstName
      lastName
      email
      password
      role
      username
      password
      updatedAt
      createdAt
      verified
      id
      token
    }
  }
`;

export const CHECK_LOG_IN = gql`
  mutation Login($type: ID) {
    verifylogin(id: $type) {
      firstName
      lastName
      email
      password
      role
      username
      password
      updatedAt
      createdAt
      verified
      id
      token
    }
  }
`;
