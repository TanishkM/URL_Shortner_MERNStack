import { React, useState } from 'react'

const Input = () => {
    const [url, setUrl] = useState("");
    const setLink = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:3001/api/links/new_url`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({link:url})
        });
    
        const json = await response.json()

        setUrl("http://localhost:3000/t/"+json.n_link)
      }


    return (
        <div className='c1'>
            <div className='c2'>
                <form action="POST" onSubmit={setLink}>
                    <input type="text" className='ip' placeholder='Enter Link' value={url} onChange={(event) => {
                        setUrl(event.target.value);
                    }} />
                    <button className='btn btn-sm btn-primary' >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Input
