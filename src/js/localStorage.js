export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = ({backside, score, ui}) => {
  try {
    const serializedState = JSON.stringify({backside, score, ui: {playerNames: ui.playerNames}});
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};
