import React, { useReducer } from "react";

const TeamContext = React.createContext({
  teamMembers: [],
  setTeamMembers: () => {},
});

const defaultState = {
  teamMembers: [{ id: "dddd" }],
};

const type = {
  set: "SET_ITEM",
};

const teamMemberReducer = (state, action) => {
  switch (action.type) {
    case type.set: {
      const teamMembers = action.teamMembers;

      return {
        teamMembers,
      };
    }
    default:
      return state;
  }
};

export const TeamMemberProvider = ({ children }) => {
  const [teamMembersState, dispach] = useReducer(
    teamMemberReducer,
    defaultState
  );

  const setTeamMembersHandler = (teamMembers) =>
    dispach({ type: type.set, teamMembers });

  return (
    <TeamContext.Provider
      value={{
        teamMembers: teamMembersState.teamMembers,
        setTeamMembers: setTeamMembersHandler,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export default TeamContext;
