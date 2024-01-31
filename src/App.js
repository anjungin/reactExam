import {useRef, useState} from "react";
import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
function App() {
//    const dumyList = [
//        {
//            id: 1,
//            author: "안정인",
//            emotion:5,
//            content:"먼작기",
//            created_date: new Date().getTime()
//        },
//        {
//            id: 2,
//            author: "최윤서",
//            emotion:4,
//            content:"밤대",
//            created_date: new Date().getTime()
//        },
//        {
//            id: 3,
//            author: "김진석",
//            emotion:4,
//            content:"뭔루팡",
//            created_date: new Date().getTime()
//        },{
//            id: 4,
//            author: "구도윤",
//            emotion:5,
//            content:"밤대랑 먼작기가 뭐예요?",
//            created_date: new Date().getTime()
//        },{
//            id: 5,
//            author: "김도균",
//            emotion:1,
//            content:"먼작기",
//            created_date: new Date().getTime()
//        }
//
//    ]

   const dataId = useRef(0);
   const [data, setData] = useState([]);
   const onCreate = (author, content, emotion) =>{
   const created_date = new Date().getTime();
   const newItem = {
    author,
    content,
    emotion,
    created_date,
    id: dataId.current
   };
   dataId.current += 1;
   setData([newItem, ...data]);
   }
  return (
    <div className="App">
        <DiaryEditor onCreate={onCreate}/>
        <DiaryList diaryList={data}/>
    </div>
  );
}

export default App;
