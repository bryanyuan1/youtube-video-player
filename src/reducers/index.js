// goal: use named export for each reducer and un-named export for the combined reducers using Redux.combineReducers function

import { combineReducers } from 'redux';

export const videoListReducer = (original=[], action) => {
  if(action.type === 'CHANGE_LIST') {
    return [...action.payload];
  }
  return original;
}

export const videoSelectReducer = (selected=null, action) => {
  if(action.type === 'SELECT_VIDEO') {
    return action.payload;
  }
  return selected;
}

export const searchWordReducer = (original='', action) => {
  if(action.type === 'CHANGE_WORD') {
    return action.payload;
  }
  return original;
}

export const channelTypeReducer = (original='any', action) => {
  if(action.type === 'CHANGE_CHANNEL') {
    return action.payload;
  }
  return original;
}

export const videoDefinitionReducer = (original='any', action) => {
  if(action.type === 'CHANGE_DEFINITION') {
    return action.payload;
  }
  return original;
}

export const videoDurationReducer = (original='any', action) => {
  if(action.type === 'CHANGE_DURATION') {
    return action.payload;
  }
  return original;
}

export const searchHistoryReducer = (original=[], action) => {
  if(action.type === "ADD_HISTORY") {
    return [action.payload, ...original];
  } 
  return original;
};

export default combineReducers({
  videoList: videoListReducer,
  selectedVideo: videoSelectReducer,
  searchWord: searchWordReducer,
  channelType: channelTypeReducer,
  videoDuration: videoDurationReducer,
  videoDefinition: videoDefinitionReducer,
  searchHistory: searchHistoryReducer,
});

