const FIREBASE_DOMAIN="https://react-quotes-10e08-default-rtdb.firebaseio.com/"

export async function getAllQuotes(){
    const responce=await fetch(`${FIREBASE_DOMAIN}quotes.json`)
    const data=await responce.json()
    
    if(!responce.ok){
        throw new Error(data.message||"Could not fetch quotes.")
    }
    const transformQuotes=[]

    for(let key in data){
        const quoteObj={
            id:key,
            ...data[key]
        }

        transformQuotes.push(quoteObj)
    }
    console.log(transformQuotes)
    return transformQuotes


}

export async function getOneQuote(quotesId){
    const responce =await fetch(`${FIREBASE_DOMAIN}quotes/${quotesId}.json`)
    const data=await responce.json()
    if(!responce.ok){
        throw new Error(data.message||"Quote not Found")
    }
    const loadedQuote={
        id:quotesId,
        ...data
    }

    return loadedQuote;
}


export async function addQuotes(quoteData){
    const responce=await fetch(`${FIREBASE_DOMAIN}quotes.json`,{
        method:"POST",
        body:JSON.stringify(quoteData),
        headers:{
            'Content-Type':'application/json',
        }
    })
    const data =await responce.json();
    if(!responce.ok){
        throw new Error(data.message||"Could not Creat")
    }

    return null;
    
}

export async function addComment(commonData,quoteId){
    const responce=await fetch(`${FIREBASE_DOMAIN}comments/${quoteId}.json`,{
        method:"POST",
        body:JSON.stringify(commonData),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const data =await responce.json();
    if(!responce.ok){
        throw new Error(data.message||"Comment could not created")
    }

    return{commentID:data.name}
}

export async function getAllComments(quoteId){
    const responce=await fetch(`${FIREBASE_DOMAIN}comments/${quoteId}.json`);
    const data =await responce.json();

    if(!responce.ok){
        throw new Error(data.message||"Comment Not Founded")
    }

    let loadedComments=[]

    for(const key in data){
        const commentObj={
            id:key,
            ...data[key]
        }
        loadedComments.push(commentObj)
    }


    return loadedComments;
}
