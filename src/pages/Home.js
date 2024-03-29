import {useContext, useEffect, useState} from "react";
import MyHeader from "../components/Myheader";
import MyButton from "../components/MyButton";
import {DiaryStateContext} from "../App";

const Home = () => {
    const diaryList = useContext(DiaryStateContext);
    const [data, setData] = useState([]);
    const [curDate, setCurDate] = useState(new Date());

    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월`

    useEffect(() => {
        const firstDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth(),
            1
        ).getTime();
        const lastDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth()+1,
            0
        ).getTime();

        setData(diaryList.filter((it)=>firstDay<=it.data&&it.date<=lastDay));
    }, [diaryList,curDate]);

    const increaseMonth = ()=>{
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate())
        )
    }
    const decreaseMonth = ()=>{
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate())
        )
    }
    return (
        <div>
            <MyHeader headText={headText}
            leftChild={<MyButton text={"<"} onClick={()=>{}}/> }
            rightChild={<MyButton text={">"} onClick={()=>{}}/> }
            />
        </div>
    );
};

export default Home;