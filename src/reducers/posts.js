import {
	POST_CREATED,
	POST_UPDATED,
	POSTS_FETCHED,
	BLOG_POSTS_FETCHED,
	POST_DELETED,
	POST_FETCHED,
} from "../types";

export default function posts(state = {}, action = {}) {
	switch (action.type) {
		case POST_CREATED:
			return { ...state, ...action.post };
		case POST_UPDATED:
			return state.map((item) => {
				if (item._id === action.post._id) return action.post;
				return item;
			});
		case POSTS_FETCHED:
			return [...state, ...action.posts];
		case BLOG_POSTS_FETCHED:
			return [...state, ...action.posts];
		case POST_FETCHED: {
			const index = state.findIndex((item) => item._id === action.post._id);
			if (index > -1) {
				return state.map((item) => {
					if (item._id === action.post._id) return action.post;
					return item;
				});
			}
			return [...state, ...action.post];
		}
		case POST_DELETED:
			return state.filter((item) => item._id !== action._id);
		default:
			return state;
	}
}
