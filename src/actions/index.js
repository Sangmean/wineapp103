import * as WinesService from '../services/Wines';

export const setHttpLoading = () => {
  return {
    type: 'HTTP_LOADING'
  };
};

export const setHttpLoaded = () => {
  return {
    type: 'HTTP_LOADED'
  };
};

export const setHttpError = error => {
  return {
    type: 'HTTP_ERROR',
    error
  };
};

//--------------------------------------------

export const setRegions = regions => {
  return {
    type: 'SET_REGIONS',
    regions
  };
};

export const fetchRegions = () => {
  return dispatch => {
    dispatch(setRegions([]));
    dispatch(setHttpLoading());
    return WinesService.fetchRegions().then(
      data => {
        dispatch(setRegions(data));
        dispatch(setHttpLoaded());
        return data;
      },
      err => {
        dispatch(setHttpError(`error while fetching regions : ${err.message}`));
      }
    );
  };
};

export const setWines = wines => {
  return {
    type: 'SET_WINES',
    wines
  };
};

export const fetchWineList = region => {
  return dispatch => {
    dispatch(setWines([]));
    dispatch(setHttpLoading());
    return WinesService.fetchWinesFrom(region).then(
      data => {
        dispatch(setHttpLoaded());
        dispatch(setWines(data));
        return data;
      },
      err => {
        dispatch(setHttpError(`error while fetching wines : ${err.message}`));
      }
    );
  };
};

export const setWineView = wineView => {
  return {
    type: 'SET_WINEVIEW',
    wineView
  };
};

export const fetchWineView = id => dispatch => {
  dispatch(setHttpLoading());
  WinesService.fetchWine(id).then(
    data => {
      dispatch(setHttpLoaded());
      dispatch(setWineView(data));
      console.log('checking fetchi wines ', data);
    },
    err => {
      dispatch(setHttpError(`error while fetching wine : ${err.message}`));
    }
  );
};
