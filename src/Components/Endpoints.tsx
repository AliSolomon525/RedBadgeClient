export const Endpoints = {
  authorization: {
    signupUser: `http://localhost:3000/api/registerUser`,
    loginUser: `http://localhost:3000/api/loginUser`,
    getUserById: `http://localhost:3000/api/userInfo/:id`,
    signupAdmin: `http://localhost:3000/api/registerAdmin`,
    loginAdmin: `http://localhost:3000/api/loginAdmin`,
    getAdminById: `http://localhost:3000/api/adminInfo/:id`,
    bookCreate: `http://localhost:3000/book/create`,
    bookUpdate: `http://localhost:3000/api/book/updatebook/:id`,
    bookDelete: `http://localhost:3000/api/book/deletebook/:id`,
    getBookById: `http://localhost:3000/api/book/books/:id`,
    getAllBooks: `http://localhost:3000/api/book/books`,
    bookListCreate: `http://localhost:3000/api/booklist/create`,
    bookListUpdate: `http://localhost:3000/api/booklist/updatelist/:id`,
    bookListDelete: `http://localhost:3000/api/booklist/list/:id`,
    getBookListById: `http://localhost:3000/api/booklist/booklist/:id`,
  },
};
