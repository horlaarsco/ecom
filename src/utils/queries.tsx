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
      orders {
        firstName
        number
        owner
        lastName
        address
        address2
        city
        number
        postCode
      }
    }
  }
`;

export const GET_BRAND = gql`
  query getBrand($slug: String!) {
    brand(slug: $slug) {
      id
      name
      slug
      image
      products {
        name
        price
        slug
        images
        salePrice
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      name
      name
      images
      price
      salePrice
      category
      slug
      brand {
        name
        slug
      }
    }
  }
`;

export const GET_BRANDS = gql`
  query {
    brands {
      id
      name
      slug
      image
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      name
      slug
      brand {
        name
      }
      images
      sizes
      price
      quantity
      salePrice
      category
      colors
      description
    }
  }
`;

export const LOG_OUT = gql`
  mutation Logout($type: ID) {
    logout(id: $type) {
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

export const ADD_BRAND = gql`
  mutation($data: BrandInput) {
    addBrand(input: $data) {
      id
      slug
      description
      name
    }
  }
`;

export const ADD_ORDER = gql`
  mutation($data: OrderInput) {
    addOrder(input: $data) {
      id
      lastName
      number
      owner
      lastName
      address
      address2
      city
      number
      postCode
    }
  }
`;
