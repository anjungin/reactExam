import React,{useState, useEffect} from 'react';

const CounterA = React.memo(({count})=>{
    useEffect(()=>{
        console.log('counterA');
    })
    return <div>{count}</div>;
})

const CounterB = ({obj})=>{
    useEffect(()=>{
        console.log('counterB');
    })
    return <div>{obj.count}</div>;
}

const areEqual = (preProps,nextProps)=>{
    return preProps.obj.count === nextProps.obj.count
}

const MemoizedCounterB = React.memo(CounterB,areEqual);

const OptimizeTest = () => {
    const [count,setCount] = useState(1);
    const [obj,setObj] = useState({
        count:1
    });
    return(<div style={{padding:50}}>
        <div>
            <h2>Counter A</h2>
            <CounterA count={count}/>
            <button onClick={()=>setCount(count)}>a</button>
        </div>
        <div>
            <h2>Counter B</h2>
            <MemoizedCounterB obj={obj}/>
            <button onClick={()=>setObj({count: obj.count})}>b</button>
        </div>
    </div>)
}

export default OptimizeTest;