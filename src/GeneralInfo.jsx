import "./general.css";
export { GeneralInfo };

function GeneralInfo({data, setData, editStatus}) {
    if(editStatus) {
        return (
            <>
                <h2>GENERAL INFO</h2>
                <input type="text" placeholder="name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
                <input type="email" placeholder="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                <input type="number" placeholder="phone" value={data.phone} onChange={(e) => setData({...data, phone: e.target.value})}/>
            </>
        )
    } else {
        return (
            <>
                <h2>GENERAL INFO</h2>
                <p>Name: {data.name}</p>
                <p>Email: {data.email}</p>
                <p>Phone: {data.phone}</p>
            </>
        )
    }
}