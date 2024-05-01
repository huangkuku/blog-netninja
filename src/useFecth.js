import { useState, useEffect } from "react"

const useFetch = (url) => {  // useFetch 節省你寫isPending error 重複的code 那blogs怎麼辦呢 用data替換; 取得url值
    const [data, setData] = useState(null) // useFetch的data可以是blogs 、tags、categories...等
    const [isPending, setIsPending] = useState(true)// pending, loading
    const [error, setError] = useState(null)   // 用來儲存error訊息 
    console.log("data", data) // null; array(2) [{…}, {…}]
    useEffect( ()=>{
        setTimeout(()=>{  // seTimeout( func(), unit:ms)
            fetch(url) // url 用在這裡
            .then(res =>{
                if(!res.ok){ // error URL: res.ok= false, correct URL:res.ok= true
                    throw Error("couldn't fetch the data for that resource.")
                }
                return res.json()
            })
            .then(d =>{
                console.log("d:",d) // // null; array(2) [{…}, {…}]
                setData(d)
                setIsPending(false)
                setError(null)
            })
            .catch( error =>{
                setIsPending(false)
                setError(error.message) // console.log(error.message), error.message存到setError()內
            })
        },1000)
    }, []) // [條件], re-render條件(跑useEffect()) 

    return {data, isPending, error} // 使用 useFetch(), return 這些東西 可以是arr, Obj 
}
 
export default useFetch;