const combineReducers = (config) => {
  return (state, action) => {
    return Object.keys(config).reduce((state, key) => {
      const reducer = config[key];
      console.log('state', state);
      console.log("key", key);
      console.log('action', action);
      console.log('reducer', reducer);
      const previousState = state.get(key);
      console.log('revious', previousState);
      const newValue = reducer(previousState, action);
      console.log('new value', newValue);
      if (!newValue) {
        throw new Error(
          `A reducer returned undefined when reducing key::"${key}"`,
        );
      }
      return state.set(key, newValue);
    }, state);
  };
};

export default combineReducers;
