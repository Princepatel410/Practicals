//promise chaining
 const promise = new Promise((resolve, reject) => {     setTimeout(() => {
        resolve('done');
     }, 2000);
    });
promise.then((res) => {
    console.log(res);
    return 'done2';
}
).then((res) => {
    console.log(res);
    return 'done3';
}
).then((res) => {
    console.log(res);
}
);
//async await
async function fetchData() {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jsonData = await res.json();
    return jsonData;
}
fetchData().then((jsonData) => {
    console.log(jsonData);
    title.innerHTML = jsonData.setup;
    body.innerHTML = jsonData.punchline;
}
);

//aysnc iteration

