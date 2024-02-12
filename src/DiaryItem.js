import React, {useEffect, useState, useRef, useContext} from "react";
import {DiaryStateDispatchContext} from "./App";
const DiaryItem = ({author, content, created_date, emotion, id})=>{

    const {onRemove, onEdit} = useContext(DiaryStateDispatchContext);
    const [isEdit,setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const [localContent, setLocalContent] = useState(content);
    const localContentInput = useRef();
    const handleRemove = ()=>{
        console.log(id);
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
            onRemove(id);
        }
    }

    const localQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    }

    const handleEdit = () => {
        if(localContent.length<5){
            localContentInput.current.focus();
            return;
        }
        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
                    onEdit(id,localContent);
                    toggleIsEdit();
                }
    }

    return (<div className="DiaryItem">
        <div className="cover" key={id}>
            <div>작성자: {author} | 감정: {emotion}</div>
            <div>작성시간: {new Date(created_date).toLocaleDateString()}</div>
            <br/>
            <hr/>
            <div className="content">
                {isEdit?<textarea ref= {localContentInput} value={localContent} onChange={
                    (e)=> setLocalContent(e.target.value)
                }></textarea>:<>{content}</>}
            </div>
            {isEdit?
                (<><button onClick={localQuitEdit}>수정 취소</button>
                <br/>
                <button onClick={handleEdit}>수정 완료</button></>)
            :
            (<><button onClick={handleRemove}>삭제하기</button>
            <br/>
            <button onClick={toggleIsEdit}>수정하기</button></>)
            }
        </div>
    </div>
    );
}

export default React.memo(DiaryItem);