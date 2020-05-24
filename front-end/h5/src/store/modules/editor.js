// initial state
import Work from '../../components/core/models/work'
import { actions as pageActions, mutations as pageMutations } from './page'
import { actions as elementActions, mutations as elementMutations } from './element'
import { actions as workActions, mutations as workMutations } from './work'

const state = {
  works: [],
  work: new Work(),
  editingPage: { elements: [] },
  editingElement: null,
  formDetailOfWork: {
    uuidMap2Name: {},
    formRecords: []
  },
  workTemplates: [],
  dragConfig: {
    isPreDrag: false,
    isDrag: false,
    isDragArea: false,
    control: null,
    insertControlId: '',
    insertControlSlotIndex: 0,
    targetFormControlId: '',
    startLoc: {
      x: 0,
      y: 0
    },
    endLoc: {
      x: 0,
      y: 0
    }
  }
}

// getters
const getters = {}

// actions
const actions = {
  ...elementActions,
  ...pageActions,
  ...workActions
}

// mutations
const mutations = {
  ...elementMutations,
  ...pageMutations,
  ...workMutations
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
