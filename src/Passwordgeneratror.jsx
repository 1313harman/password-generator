import {useState,useCallback,useEffect,useRef} from "react"
function Password(){
    const [length,setLength]=useState(8)
    const [numberallowed,setNumberAllowed]=useState(false)
    const [charallowed,setCharAllowed]=useState(false)
    const [password,setPassword]=useState("")
    const passwordref=useRef(null)

    const passwordGenerator=useCallback(() => {
        let pass="" 
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberallowed) {
            str += "0123456789"
        }
        if(charallowed){
            str+="!@#$%^&*()_-+={[}]"
        }
        for (let i = 1; i <= length; i++) {
            let char=Math.floor(Math.random() * str.length+1)
            pass+=str.charAt(char)
        }
        setPassword(pass)
    },[length,numberallowed,charallowed])

   const copyPass = useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
   },[password])

    useEffect(()=>{
        passwordGenerator()
    },[length,numberallowed,charallowed])
    return (
        <>
            <div className="text-center w-full max-v-md mx-auto shadow-md rounder-lg px-4 my-8 text-orange-500 bg-gray-700">
                <h1 className='text-white text-center my-3'>Password generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passwordref}></input>
                    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPass}>Copy</button>
                </div>
                <div>
                    <div>
                        <input type="range"  className='cursor-pointer' min={8 } max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}></input>
                        <label>Length:{length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={numberallowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={charallowed} id="numberInput" onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
                        <label htmlFor="characterInput">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Password