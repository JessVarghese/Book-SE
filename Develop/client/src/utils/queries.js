import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks
      book {
        bookID
        authors
        description
        title
        image
        link
    }
  }
`;
