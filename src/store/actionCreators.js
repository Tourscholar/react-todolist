import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
} from "./actionTypes";
import axios from "axios";

const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value,
  };
};

const getAddItemAction = () => {
  return {
    type: ADD_TODO_ITEM,
  };
};

const getDeleteItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index,
  };
};

const initListAction = (data) => {
  return {
    type: INIT_LIST_ACTION,
    data,
  };
};

const getTodoList = () => {
  return (dispatch) => {
    axios
      .get("/api/todolist.json")
      .then((res) => {
        const data = res.data;
        const action = initListAction(data);
        dispatch(action);
      })
      .catch(() => {
        console.log("err");
      });
  };
};

export {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  initListAction,
  getTodoList,
};
