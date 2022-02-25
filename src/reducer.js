export const initialState = {
    user:null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQDAZ-BCZghMy15xCmuiZmN5bYT0Xild89IUW9Hq01ms06YUYI4_0zBvGZ13uOl3d8djUMVM3ASb1A7OUa71fq2stIVXvIN4UXktBPHktOutiZszdEm5IVH0Q_ofkWJFm7pwygwrLnt0YH3eRDv5qNKOnQ3q4VLpgAyegXcC4qKYtFNh"
};


const reducer = (state , action) => {

    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
                };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists:action.playlists
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}


export default reducer;