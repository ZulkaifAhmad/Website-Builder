import React,{memo} from 'react'

function SmallCard({date,companyName,title}) {
  return (
    <div className='smallCard'>
        <p className='smallCardP'>{date} -  Running</p>
        <h2 className='smallTitle'>{title}</h2>
        <p className='smallCardP'>{companyName}</p>
    </div>
  )
}

export default memo(SmallCard)