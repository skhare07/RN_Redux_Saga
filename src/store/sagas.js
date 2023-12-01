import { put, takeLatest, all } from 'redux-saga/effects';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure } from './actions';
import { getPosts } from '../api';

function* fetchPostsSaga() {
  try {
    const response = yield getPosts();
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    // Add other sagas here if needed
  ]);
}
