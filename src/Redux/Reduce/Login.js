import ActionTypes from "../Constants/Actions";
import userConst from "../Constants/InitUser";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN: {
        const {userName, password} = userConst;
        const {user} = action;
        let access = false;

        userName === user.userName && password === user.password && (access = true);

        user.isValid(access);

        return {
          access,
        };

    }
    default:
      return state;
  }
};
