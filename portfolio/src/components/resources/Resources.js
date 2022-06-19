import React from 'react'
import Resource from '../resource/Resource';
import './resources.css'
function Resources() {
  return (
    <div className='r1'>
        <div className='r1-texts'>
            <h3 className='r1-title'>
                Resources which I follows for learning
            </h3>

        </div>
        <div className='r1-list'>
            <Resource/>
            <Resource/>
            <Resource/>
            <Resource/>
  
        </div>
    </div>
  )
}

export default Resources;