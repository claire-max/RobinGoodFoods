const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    
  }

  type Food {
    foodId: ID!
    description: String
    image: String
    link: String
    title: String!
  }

  type Drink {
    drinkId: ID!
    description: String
    image: String
    link: String
    title: String!
  }

  type Merchandise {
    merchandiseId: ID!
    description: String
    image: String
    link: String
    title: String!
  }

  type Feedback {
    feedbackId: ID!
    email: String!
    comment: String!
  }

  type TheTeam {
    teamId: ID!
    description: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveFood(foodData: foodInput!): User
  }
`;

module.exports = typeDefs;
