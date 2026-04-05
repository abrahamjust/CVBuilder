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
                <h2>EDUCATION</h2>
                <p>School: {data.school}</p>
                <p>Degree: {data.degree}</p>
                <p>Date: {data.date}</p>
            </>
        )
    }
}