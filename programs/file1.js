// function call .call stack asynchronous call ,promise

const a=()=>{
    b();
    console.log("🚀~ a ~ a:");
};

const b=()=>{
    console.log("🚀~ b ~ b:");
    setTimeout(() =>{
        console.log("🚀~ b~timer 1:");
    },10000);
    setTimeout(() =>{
        console.log("🚀~ b~timer 2:");
    },0);
};

a();
console.log("🚀~ Final:")

// Empty

// a is pushed to the call stack
// b is pushed to the call stack
// b is popped from the call stack and executed
// a is popped from the call stack and executed



const sample = (callback)=>{
    callback("Sample Content","Demo");
};
const add = (a,b)=> {
    console.log("🚀 ~data:",a+b);
};
sample(add);
const login = async () =>{
    await checkHeader();
    await checkPassword();
};