import React,{useEffect,useState} from 'react';

const UnmountTest = ()=>{
    useEffect(()=>{
        console.log("Mount btn!");
        return ()=>{
            console.log("Unmount!");
        };
    },[]);
    return <div>Unmount Testing Component</div>
}

const LifeCycle = ()=> {
//    const [count,setCount] = useState(0);
//    const [text,setText] = useState("");
//
//    useEffect(()=>{
//        console.log("Mount");
//    },[]);
//
//    useEffect(()=>{
//        console.log("Update");
//    });
//
//    useEffect(()=>{
//        console.log(`Count : ${count}`);
//        if(count>5){
//        alert("count가 5를 넘음 1로 초기화");
//        setCount(1);
//        }
//    },[count]);
    const [isVisible, setVisible] = useState(false);
    const toggle = () => setVisible(!isVisible);

    return(
    <div style={ {padding:20} }>
        <button onClick={toggle}>on/off</button>
        {isVisible && <UnmountTest/>}
    </div>)
}

export default LifeCycle;