import api from "../api";
import {
	POSTS_FETCHED,
	BLOG_POSTS_FETCHED,
	POST_FETCHED,
	POST_CREATED,
	POST_UPDATED,
	POST_DELETED,
} from "../types";

export const postsFetched = (posts) => ({
	type: POSTS_FETCHED,
	posts,
});

export const blogPostsFetched = (posts) => ({
	type: BLOG_POSTS_FETCHED,
	posts,
});

export const postFetched = (post) => ({
	type: POST_FETCHED,
	post,
});

export const postCreated = (post) => ({
	type: POST_CREATED,
	post,
});

export const postUpdated = (post) => ({
	type: POST_UPDATED,
	post,
});

export const postDeleted = (_id) => ({
	type: POST_DELETED,
	_id,
});

export const fetchAll = () => (dispatch) =>
	api.posts.fetchAll().then((posts) => {
		dispatch(postsFetched(posts));
	});

export const blog = () => (dispatch) =>
	api.posts.blog().then((posts) => {
		dispatch(blogPostsFetched(posts));
	});

export const create = (data) => (dispatch) =>
	api.posts.create(data).then((post) => {
		dispatch(postCreated(post));
	});

export const update = (data) => (dispatch) =>
	api.posts.update(data).then((post) => {
		dispatch(postUpdated(post));
	});

export const deletes = (_id) => (dispatch) =>
	api.posts.delete(_id).then(() => {
		dispatch(postDeleted(_id));
	});

export const read = (_id) => (dispatch) =>
	api.posts.get(_id).then((post) => {
		dispatch(postFetched(post));
	});
