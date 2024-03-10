

const initialState={
    student:[
        {
        name:'priya',
        age:25,
        gender:'female'
        },
          {
           name:'shiva',
           age:20,
           gender:'male'
            },

               {
                name:'chotu',
                age:28,
                gender:'male'
               },
    ]
}

function studentReducer(State=initialState,action){
    return State
}
export default studentReducer