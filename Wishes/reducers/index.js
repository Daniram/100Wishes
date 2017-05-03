import { combineReducers } from 'redux'
import addListForm from './addListForm'
import addListItemForm from './addListItemForm'
import activeList from './list'
import lists from './lists'
import listItems from './listItems'
import user from './user'

export default combineReducers({
    addListForm,
    addListItemForm,
    activeList,
    lists,
    listItems,
    user
})