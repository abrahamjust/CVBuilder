import "./education.css";
export { Education };

function Education({data, setData, editStatus}) {
    if(editStatus) {
        return (
            <>
                <h2>EDUCATION</h2>
                <input type="text" placeholder="school" value={data.school} onChange={(e) => setData({...data, school: e.target.value})}/>
                <input type="text" placeholder="degree" value={data.degree} onChange={(e) => setData({...data, degree: e.target.value})}/>
                <input type="date" placeholder="date" value={data.date} onChange={(e) => setData({...data, date: e.target.value})}/>
            </>
        )
    } else {
        return (
            <>
                <p>{data.school}</p>
                <p>{data.degree}</p>
                <p>{data.date}</p>
            </>
        )
    }
}