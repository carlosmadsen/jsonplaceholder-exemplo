export class UsersService {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/users';
    }
    getUsers() {
        return fetch(this.url)
            .then(res => {
            return res.json();
        })
            .then((users) => {
            return users;
        });
    }
    getUser(id) {
        return fetch(this.url + '?id=' + id)
            .then(res => {
            return res.json();
        })
            .then((users) => {
            if (users.length > 0) {
                return users[0];
            }
            else {
                return null;
            }
        });
    }
}
