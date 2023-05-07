const posts = [
    {name:"post one"},
    {name:"post two"},
    {name:"post three"},
    {name:"post four"}
]
function createPost(post){
    return new Promise((resolve,reject) => {
        posts.push(post)
        resolve(post);
    })
}
// createPost({name:"post five"})
// console.log(posts)

function updateUserActivity (){
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            let lastActivity = new Date()
            console.log(`Last seen : ${lastActivity}`)
            resolve()

        },1000)
    })
}

function printPost(){
    posts.forEach((posts) => {
        console.log(posts.name)
    }
)}
//  createPost({name:"post five"})

// printPost()

// updateUserActivity()

function deletePost(){
    return new Promise((resolve,reject) => {
        if(posts.length > 0){

            const del = posts.pop()
            resolve(del)

        }
        else{
            reject("ERROR")
        }
    })
}
Promise.all([createPost({name:"post five"}),updateUserActivity()])