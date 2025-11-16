const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export default {
    async getBooks() {
        const resp = await fetch(BASE_URL);
        return resp.json();
    },

    async createBook(book) {
        const resp = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        });
        return resp.json();
    },

    async updateBook(id, book) {
        const resp = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        });
        return resp.json();
    },

    async deleteBook(id) {
        const resp = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE"
        });
        return resp.json();
    }
};
