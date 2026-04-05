import "./experience.css"
export { Experience };

function Experience({data, setData, editStatus}) {
    if(editStatus) {
        return (
            <>
                <h2>EXPERIENCE</h2>
                <input type="text" placeholder="company" value={data.company} onChange={(e) => setData({...data, company: e.target.value})}/>
                <input type="text" placeholder="role" value={data.role} onChange={(e) => setData({...data, role: e.target.value})}/>
                <input type="text" placeholder="responsibility" value={data.responsibility} onChange={(e) => setData({...data, responsibility: e.target.value})}/>
                <input type="date" placeholder="date" value={data.date} onChange={(e) => setData({...data, date: e.target.value})}/>
            </>
        )
    } else {
        return (
            <>
                <p>{data.company}</p>
                <p>{data.role}</p>
                <p>{data.responsibility}</p>
                <p>{data.date}</p>
            </>
        )
    }
}