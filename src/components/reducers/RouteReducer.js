export default function RouteReducer(state="Signup",action){
  switch(action.type){
      case "page":
          state=action.data
          return state
      default:
          return state
  }
}

//action is dict where action={type:"page",}