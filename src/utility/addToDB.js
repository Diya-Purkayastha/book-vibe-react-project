
//get from localstorage
const getStoredBook = () =>{
    const storedBookSTR = localStorage.getItem("readList");

    if(storedBookSTR){
        const storeBook = JSON.parse(storedBookSTR)
        return storeBook;
    }
    else{
        return [];
    }
}

//add to DB
const addToStoreDB = (id) =>{

    const storeBook = getStoredBook();
    if(storeBook.includes(id)){
        alert("id already exists")
    }
    else{
        storeBook.push(id);
        const data = JSON.stringify(storeBook)
        localStorage.setItem("readList" , data)
    }
}

export {addToStoreDB, getStoredBook}