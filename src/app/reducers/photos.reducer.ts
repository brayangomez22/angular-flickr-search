import { createReducer, on } from '@ngrx/store';

import { focusPhoto, search, searchResultsLoaded } from '../actions/photos.actions';
import { PhotosStateSlice } from './photos-state-slice';

export const initialState: PhotosStateSlice = {
  searchTerm: '',
  photos: [],
  currentPhoto: null
};

export const photosReducer = createReducer(
  initialState,
  on(search, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
    currentPhoto: null
  })),
  on(searchResultsLoaded, (state, { photos }) => ({
    ...state,
    photos
  })),
  on(focusPhoto, (state, action) => ({
    ...state,
    currentPhoto: action.photo
  })),
);
