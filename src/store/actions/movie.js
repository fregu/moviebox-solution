export const SET_ACTIVE = { type: 'SET_ACTIVE' }
export const CLEAR_ACTIVE = { type: 'CLEAR_ACTIVE' }

export const setActive = (id, media) => ({ ...SET_ACTIVE, id, media })
export const clearActive = () => ({ ...CLEAR_ACTIVE })
