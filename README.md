Basic CRUD using GraphQL API

# Structure
books {
    id,
    title,
    publishedYear
    author
}

author {
    id,
    name,
    books
}

# Data
- list of books
- list of authors
- list of books with author details
- list of author with book details
- add a book
- update a book
- delete
