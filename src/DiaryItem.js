const DiaryItem = ({onDelete, author, content, created_date, emotion, id})=>{
    return (<div className="DiaryItem">
        <div className="cover" key={id}>
            <div>작성자: {author} | 감정: {emotion}</div>
            <div>작성시간: {new Date(created_date).toLocaleDateString()}</div>
            <br/>
            <hr/>
            <div>{content}</div>
            <button onClick={ ()=>{
                console.log(id);
                if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
                    onDelete(id);
                }
            }
            }>삭제하기</button>
        </div>
    </div>
    );
}

export default DiaryItem;