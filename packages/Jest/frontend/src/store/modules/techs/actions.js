export function addTechs(tech) {
  return {
    type: 'ADD_TECH',
    payload: { tech },
  };
}
