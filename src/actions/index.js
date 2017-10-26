import axios from 'axios';
export const URL = "http://mappy.dali.dartmouth.edu/members.json";

export const ActionTypes = {
  FETCH_DALI_MEMBERS: 'FETCH_DALI_MEMBERS'
};


export function getDaliMembers() {
  return (dispatch) => {
    axios.get(URL).then((response) => {
      dispatch({type: ActionTypes.FETCH_DALI_MEMBERS,
        payload: {members: response.data}});
    }).catch((error) => {
      console.log(error);
    });
  };
}
