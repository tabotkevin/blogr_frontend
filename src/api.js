import axios from "axios";

export default {
	user: {
		login: (credentials) =>
			axios
				.post("/api/auth/login", { credentials })
				.then((res) => res.data.user),
		signup: (user) =>
			axios.post("/api/users/signup", { user }).then((res) => res.data.user),
		confirm: (token) =>
			axios
				.post("/api/auth/confirmation", { token })
				.then((res) => res.data.user),
		resetPasswordRequest: (email) =>
			axios.post("/api/auth/reset_password_request", { email }),
		validateToken: (token) => axios.post("/api/auth/validate_token", { token }),
		resetPassword: (data) => axios.post("/api/auth/reset_password", { data }),
		fetchCurrentUser: () =>
			axios.get("/api/users/current_user").then((res) => res.data.user),
	},
	posts: {
		fetchAll: () => axios.get("/api/posts").then((res) => res.data.posts),
		get: (id) => axios.get(`/api/posts/${id}`).then((res) => res.data.post),
		create: (data) =>
			axios.post("/api/posts", data).then((res) => res.data.post),
		update: (data) =>
			axios
				.put(`/api/posts/${data.get("_id")}`, data)
				.then((res) => res.data.post),
		delete: (id) => axios.delete(`/api/posts/${id}`),
	},
};
