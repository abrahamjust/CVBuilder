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
                <h2>EXPERIENCE</h2>
                <p>Company: {data.company}</p>
                <p>Role: {data.role}</p>
                <p>Responsibility: {data.responsibility}</p>
                <p>Date: {data.date}</p>
            </>
        )
    }
}