let books = [
    {
        id: "1",
        title: 'The Awakening',
        publishedYear: 2015,
        authorId: "2",
    },
    {
        id: "2",
        title: 'City of Glass',
        publishedYear: 2020,
        authorId: "1",
    },
    {
        id: '3',
        title: 'City of Glass lock',
        publishedYear: 2025,
        authorId: '1',
    },
];

let authors = [
    {
        id: '1',
        name: 'Paul Auster',
        bookIds: ['2', '3']
    }, {
        id: '2',
        name: 'Kate Chopin',
        bookIds: ['1']
    }
]

const resolvers = {
    Book: {
        author: (parent: { authorId: string; }, _args: any, _context: any, _info: any) => {
            return authors.find(author => author.id === parent.authorId)
        },
    },
    Author: {
        books: (parent: { bookIds: string | string[]; }, _args: any, _context: any, _info: any) => {
            return books.filter(book => parent.bookIds?.includes(book.id))
        },
    },
    Query: {
        authors: () => {
            return authors
        },
        books: () => {
            return books
        }
    },
    Mutation: {
        addBook: (_parent: any, args: any, _context: any, _info: any) => {
            const newBook = { ...args, id: books.length + 1 }
            books.push(newBook);
            return newBook;
        },
        updateBook: (_parent: any, args: any, _context: any, _info: any) => {
            const updatedBook = { ...args }
            books = books.map(book => book.id === args.id ? {...book, ...updatedBook } : book );
            return updatedBook;
        },
        deleteBook: (_parent: any, args: { id: string; }, _context: any, _info: any) => {
            books = books.filter(book => book.id === args.id);
            return "Book Deleted Successfully";
        },

        addAuthor: (_parent: any, args: any, _context: any, _info: any) => {
            const newAuthor = { ...args, id: authors.length + 1 }
            authors.push(newAuthor);
            return newAuthor;
        },
        updateAuthor: (_parent: any, args: any, _context: any, _info: any) => {
            const updatedAuthor = { ...args }
            authors = authors.map(author => author.id === args.id ? {...author, ...updatedAuthor} : author );
            return updatedAuthor;
        },
        deleteAuthor: (_parent: any, args: { id: string; }, _context: any, _info: any) => {
            authors = authors.filter(author => author.id === args.id);
            return "Author Deleted Successfully";
        }
    }
};

export default resolvers;