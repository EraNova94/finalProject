import React, { createContext, useReducer } from "react";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import fire from "../fire";
export const commentContext = createContext();

const INIT_STATE = {
  comments: [],
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_COMMENT":
      return {
        ...prevState,
        comments: action.payload,
      };
    default:
      return prevState;
  }
}

const CommentsContextProvider = ({ children }) => {
  const db = getFirestore(fire);

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addComment(obj) {
    try {
      const commentsRef = await addDoc(collection(db, "comments"), obj);
      console.log(commentsRef);
    } catch (error) {
      console.error(error);
    }
  }

  async function readComments() {
    try {
      const { docs } = await getDocs(collection(db, "comments"));
      const data = docs.map(item => {
        return { ...item.data(), id: item.id };
      });
      dispatch({
        type: "GET_COMMENT",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  let commentCloud = { addComment, readComments, comments: state.comments };
  return (
    <commentContext.Provider value={commentCloud}>
      {children}
    </commentContext.Provider>
  );
};

export default CommentsContextProvider;
