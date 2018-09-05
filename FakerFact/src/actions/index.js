// export const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS"


// export const toggleCompose = () => {
//   return dispatch => {
//     dispatch({
//       type: TOGGLE_COMPOSE,
//     })
//   }
// }

// export const addMessage = message => {
//   return async dispatch => {
//   const response = await fetch('https://message-app-for-you.herokuapp.com/messages', {
//       method: 'POST',
//       body: JSON.stringify(message),
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       }
//     })
//   const messages = await response.json()
//     dispatch({
//       type: ADD_MESSAGE,
//       payload: messages
//     })
//    }
//  }
