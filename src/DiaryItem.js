const DiaryItem = ({author, content, created_date, emotion, id})=>{
    return (<div className="DiaryItem">
        <div className="cover" key={id}>
            <div>작성자: {author} | 감정: {emotion}</div>
            <div>작성시간: {new Date(created_date).toLocaleDateString()}</div>
            <br/>
            <hr/>
            <div>{content}</div>

        </div>
    </div>
    );
}

export default DiaryItem;