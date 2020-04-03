import { put, takeLatest, all, fork } from 'redux-saga/effects';

const url = 'https://restcountries.eu/rest/v2';

// GET ALL COUNTRIES DATA

function* getAllData() {
  const json = yield fetch(`${url}/all`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  });
  yield put({ type: 'DATA_RECEIVED', json });
}

function* actionWatcher1() {
  yield takeLatest('GET_ALL_DATA', getAllData);
}

// GET DATA BY REGION

function* getDataByRegion(data) {
  console.log(data);
  const region = data.region;

  const regionData = yield fetch(`${url}/region/${region}`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  });

  const json = { regionData, region };
  yield put({ type: 'DATA_RECEIVED_BY_REGION', json });
}

function* actionWatcher2() {
  yield takeLatest('DATA_BY_REGION', getDataByRegion);
}

// GET DATA OF SINGLE COUNTRY BY NAME

function* getData(data) {
  const name = data.name;

  const json = yield fetch(`${url}/name/${name}?fullText=true`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  });

  yield put({ type: 'DATA_RECEIVE', json });
}

function* actionWatcher3() {
  yield takeLatest('GET_DATA', getData);
}

export default function* rootSaga() {
  yield all([fork(actionWatcher1), fork(actionWatcher2), fork(actionWatcher3)]);
}
