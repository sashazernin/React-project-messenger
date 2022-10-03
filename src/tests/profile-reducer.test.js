import profileReducer, {addPost, postText} from "../redux/ProfileReducer";

let state = {
    Posts: [
        {id: "1", message: "Hi", likes: "0"},
        {id: "2", message: "somebody is here?", likes: "2"},
        {id: "3", message: "why everyone don't like me?", likes: "0"},
        {id: "4", message: "uhh...", likes: "0"},
        {id: "5", message: "...", likes: "0"},
        {id: "6", message: "...", likes: "10"}
    ],
    PostText: '',
    profile: null,
    status: ""
}

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost()
    //2.action
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.Posts.length).toBe(7)
})

it('delete', () => {
    let action = postText("ok")
    profileReducer(state,action)
    action = addPost()
    let newState = profileReducer(state,action)
    expect(newState.Posts[6].message).toBe("ok")
})