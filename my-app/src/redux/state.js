let renderTree = () => {
    console.log('State changed');
}
let state = {
    Dialogs: [
        {id:"1", name:"Dmitry"},
        {id:"2", name:"Sasha"},
        {id:"3", name:"Timofey"}
    ],

    Posts: [
        {id: "1", massage: "Hi", likes: "0"},
        {id: "2", massage: "somebody is here?", likes: "2"},
        {id: "3", massage: "why everyone don't like me?", likes: "0"},
        {id: "4", massage: "uhh...", likes: "0"},
        {id: "5", massage: "...", likes: "0"},
        {id: "6", massage: "...", likes: "10"}
    ],

    Massages: [
        {id:"1",massage:"Damir loh"},
        {id:"2",massage:"soglasen?"},
        {id:"3",massage:"che ignorish?"},
        {id:"4",massage:"a ti i est damir"},
        {id:"5",massage:"ti loh"},
    ]

}

export const AddPost = (massage) => {
    let Post = {
        id: "1",
        massage: massage,
        likes: "0"
    }
    state.Posts.push(Post)
    console.log(state)
    renderTree(state);
}

export const subs = (obs) => {
    renderTree = obs;
}


export default state;