import React from 'react'

const Tranlation = ({ doStuff, setInput }) => {
  return (
    <div>
        <textarea className='text-area' cols={50} rows={10} onChange={(e) => setInput(e.target.value)}></textarea>
        <button className='action-btn' onClick={doStuff}>Do the Thing!</button>
    </div>
  )
}

export default Tranlation