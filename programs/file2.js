//PROMISES
const fetchData = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve("Data Fetched Successfully!");
    // console.log(`"🚀Data Fetched Successfully!"`);
        
    } else {
        console.log(`"🚀Data not Fetched"`);
        reject("No Data Found!");
    }
});

fetchData.then((data) => {
    console.log("🚀Data:", data);
}).catch((error) => {
    console.log("🚀Error:", error);
});




const getUser = () => {
    return Promise.resolve("User List Fetched");
};

const getUserName = (userId) => {
    return Promise.resolve("User Detail Fetched");
};

const login = () => {
    return Promise.resolve("Login Successful");
};

login().then((response) => {
    console.log("response:", response);
    getUser().then((response) => {
        console.log("response:", response);
        getUserName().then((response) => {
            console.log("response:", response);
        });
    });
});


