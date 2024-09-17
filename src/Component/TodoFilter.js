import React, { useEffect, useState } from 'react'

export default function TodoFilter({filterBy}) {
  let [filter,Setfilter]= useState('All')
  useEffect(()=>{
    filterBy(filter)
  },[filter,filterBy])
  return (
    <div>
    <button className={`button filter-button ${ filter==='All'?'filter-button-active' : ""}`} onClick={()=> Setfilter('All')}>
      All
    </button>
    <button className={`button filter-button ${filter==='Active'? 'filter-button-active' : ""}`} onClick={()=> Setfilter('Active')}>Active</button>
    <button className={`button filter-button ${filter==='Completed'? 'filter-button-active' : ""}`} onClick={()=> Setfilter('Completed')}>Completed</button>
  </div>
  )
}
