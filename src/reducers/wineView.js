export const wineView = (state = {}, action) => {
  switch (action.type) {
    case 'SET_WINEVIEW':
      return action.wineView;
    default:
      return state;
  }
};
