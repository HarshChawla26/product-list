import React, { useEffect, useRef, useState } from 'react'
import "./FilterBox.css"
export default function FilterBox(props) {
  const {filterList,sortList,sortRef,list} = props

  const [filterVal, setfilterVal] = useState("0")
  
  const [sortVal, setsortVal] = useState("-1")


  const handleFilter = (e)=>{
    const newValue = e.target.value;
    setfilterVal(newValue);
  }
  
  const handleSorting = (e)=>{
    const newValue = e.target.value;
    setsortVal(newValue);
  }

  useEffect(() => {
    filterList(filterVal)
  }, [filterVal])

  useEffect(() => {
    sortList(list)
  }, [sortVal])
  
  return (
    <div id='filterBox'>
      <div className='dropdown'>
        <select name="filter" id="filter" value={filterVal} onChange={handleFilter}>
          <option value='0'>All</option>
          <option value='1'>Skin Care</option>
          <option value='2'>Electronics</option>
          <option value='3'>Health Care</option>
          <option value='4'>Clothes</option>
          <option value='5'>Books</option>
        </select>
      </div>
      <div className='dropdown'>
        <select ref={sortRef} name="sort" id="sort" value={sortVal} onChange={handleSorting}>
          <option value='-1'>Default</option>
          <option value='1'>Price - High to low</option>
          <option value='2'>Price - Low to High</option>
        </select>
      </div>
    </div>
  )
}
