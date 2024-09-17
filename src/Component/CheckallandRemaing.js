import React from 'react'

export default function CheckallandRemaing({countaingcheck, checkall}) {
  return (
    <div className="check-all-container">
          <div>
            <div onClick={checkall} className="button">Check All</div>
          </div>

          <span>{countaingcheck} item{countaingcheck > 1 ? 's' : ''} remaining</span>
    </div>
  )
}
