import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/api/books");
    },
    searchBooks: (title) => {
        return axios.post("/search", {title: title});
    },
    addToDB: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    removeBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    }
}