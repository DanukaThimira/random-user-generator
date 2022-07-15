import React,{useState, useEffect} from "react";

function NameList() {
    const [loadData, setLoadData] = useState();
  const [users, setUsers] = useState([
    {
      "gender": "female",
      "name": {
      "title": "Ms",
      "first": "Boleslava",
      "last": "Stepanchenko"
      },
      "location": {
      "street": {
      "number": 3662,
      "name": "Nezalezhnosti Ukrayini"
      },
      "city": "Nosivka",
      "state": "Sumska",
      "country": "Ukraine",
      "postcode": 71947,
      "coordinates": {
      "latitude": "74.6054",
      "longitude": "19.7350"
      },
      "timezone": {
      "offset": "-7:00",
      "description": "Mountain Time (US & Canada)"
      }
      },
      "email": "boleslava.stepanchenko@example.com",
      "login": {
      "uuid": "2cc2539b-b764-4a23-a3e7-05cb74cc1924",
      "username": "heavybird407",
      "password": "this",
      "salt": "EArNklzo",
      "md5": "aa665324c1efe8bc693fc16c0c624522",
      "sha1": "572765b0d24d6014e0a0884cf2ed33588312173d",
      "sha256": "5433374d866ef0ec03743a49c483f2d1beff13b727876a7ae34eadc305f4b756"
      },
      "dob": {
      "date": "1987-04-26T10:15:34.629Z",
      "age": 35
      },
      "registered": {
      "date": "2016-12-20T11:44:10.568Z",
      "age": 5
      },
      "phone": "(067) T81-5129",
      "cell": "(096) R63-8116",
      "id": {
      "name": "",
      "value": null
      },
      "picture": {
      "large": "https://randomuser.me/api/portraits/women/45.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
      },
      "nat": "UA"
      }
  ]);
   useEffect(() => {
    fetch("https://randomuser.me/api").then(res => res.json()).then(data => setUsers((users) => [...users,data.results[0]]))
  },[loadData])
   console.log(users);

   const addUser = () => {
    
     let newUser = (users.map((user) => (
      <div style={{border: '1px solid #000',display: 'flex',alignItems: 'center',padding: '10px',width:'70%'}}>
        
        <img src={user.picture.medium} alt={user.name.first}/>
        <p>
        {user.name.first} {user.name.last}
        </p>
       </div>
      
    )))
    return newUser;
   }
   
  return (
    <div>
      <button onClick={() => setLoadData(new Date)}>Add User</button>
      {addUser()}

    </div>
  )
}

export default NameList;