const state = { roomlist: "tests" };
var now =
    {
        ...state,
        roomlist: "action.roomlist"
    };

console.log(now)