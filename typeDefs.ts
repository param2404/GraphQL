const typeDefs = `#graphql

    type Author {
        id:ID!
        name: String!
        books: [Book]
    }

    type Book {
        id:ID!
        title: String!
        publishedYear: Int
        author: Author
    }

    type Query {
        authors: [Author]
        books: [Book]
    }
 
    type Mutation {
      addBook(title: String!, publishedYear: Int, authorId: ID!) : Book!
      updateBook(id: ID!, title: String, publishedYear: Int, authorId: ID!) : Book!
      addAuthor(name: String!) : Author!
      updateAuthor(id: ID!, name: String!) : Author!
      deleteBook(id: ID!) : String
      deleteAuthor(id: ID!) : String
    }
`;

export default typeDefs;