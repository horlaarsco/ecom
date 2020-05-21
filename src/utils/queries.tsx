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
      tokens
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
      tokens
    }
  }
`;
