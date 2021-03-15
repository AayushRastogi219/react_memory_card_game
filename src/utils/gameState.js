import store from 'store'
import { get } from 'lodash'

const appName = 'memoryGame'

/**
 * This function initialize the setting to default in store.
 */
const setup = () => {
  if (!store.get(appName)) {
    store.set(appName, {
      settings: {},
      state: null
    })
  }
}

/**
 * This function clear the setting from store.
 */
const clearGame = () => {
  setup()
  const currentState = store.get(appName)
  const newState = {...currentState, state: null}
  store.set(appName, newState)
}

/**
 * This function save the setting into store.
 * @param {object} value - A object param.
 */
const saveSettings = (settings) => {
  setup()
  const currentSettings = store.get(appName)
  const newSettings = {...currentSettings, settings}
  store.set(appName, newSettings)
}

/**
 * This function provide the setting which are saved in store.
 * @param {string} value - A string param.
 * @return {object} c - An object value.
 */
const loadSettings = (value) => {
  setup()
  const storedSettings = store.get(appName).settings
  return value
    ? get(store.get(appName).settings, value)
    : storedSettings
}

export {
  clearGame,
  loadSettings,
  saveSettings
}
