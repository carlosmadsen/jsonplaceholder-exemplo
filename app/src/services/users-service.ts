import { User } from "../models/user.js";

export class UsersService {
	private url: string = 'https://jsonplaceholder.typicode.com/users';

	public getUsers(): Promise<User[]> {
		return fetch(this.url)
			.then(res => {
				return res.json();
			})
			.then((users: User[]) => {
				return users;
			});
	}

	public getUser(id: number): Promise<User | null> {
		return fetch(this.url + '?id=' + id)
			.then(res => {
				return res.json();
			})
			.then((users: User[]) => {
				if (users.length > 0) {
					return users[0];
				} else {
					return null;
				}				
			});
	}
}