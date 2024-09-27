import { useState } from 'react'

function App() {

  const getBox=()=>{
    return document.querySelector('.container')
  }

  const prev = ()=>{
    const box = getBox()
    const width = box.clientWidth
    box.scrollLeft =  box.scrollLeft - width
  }

  const next = ()=>{
    const box = getBox()
    const width = box.clientWidth
    box.scrollLeft = width + box.scrollLeft
  }

  return (
    <>
      <div className='carousle'>
        <button className='prev' onClick={prev}>Prev</button>
        <div className='container'>
          <div className='item'>
            <div className='list'>
              1
            </div>
          </div>

          <div className='item'>
            <div className='list'>
              2
            </div>
          </div>

          <div className='item'>
            <div className='list'>
              3
            </div>
          </div>

          <div className='item'>
            <div className='list'>
              4
            </div>
          </div>

          <div className='item'>
            <div className='list'>
              5
            </div>
          </div>

          <div className='item'>
            <div className='list'>
              6
            </div>
          </div>

          <div className='item'>
            <div className='list'>
              7
            </div>
          </div>

          <div className='item'>
            <div className='list'>
              8
            </div>
          </div>

          <div className='item'>
            <div className='list'>
              9
            </div>
          </div>

          <div className='item'>
            <div className='list'>
              0
            </div>
          </div>
          
        </div>
        <button className='next' onClick={next}>Next</button>
      </div>
    </>
  )
}

export default App
