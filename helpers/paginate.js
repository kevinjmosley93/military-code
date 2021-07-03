import React, { useState } from 'react'

export default function Pagination({ data, pageLimit = 10, dataLimit = 10 }) {
  const [currentPage, setCurrentPage] = useState(1)

  function goToNextPage() {
    setCurrentPage(page => page + 1)
  }

  function goToPreviousPage() {
    setCurrentPage(page => page - 1)
  }

  function changePage(e) {
    const pageNumber = Number(e.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  }
  const paginationJsx = () => {
    return (
      <>
        <div className='paginate justify-content-sm-end justify-content-center d-flex flex-row p-0'>
          {currentPage <= 1 ? (
            ''
          ) : (
            <a
              className='d-flex flex-row align-items-center'
              onClick={goToPreviousPage}>
              <i className='fa fa-arrow-circle-left' aria-hidden='true'></i>
            </a>
          )}
          {getPaginationGroup().map((item, index) => (
            <a
              key={index}
              onClick={changePage}
              style={{ paddingInline: '.3rem' }}
              className={` ${
                currentPage === item ? 'active' : ''
              } page-link p-2`}>
              <span className=''>{item}</span>
            </a>
          ))}
          {currentPage === pageLimit || filteredData.length === 0 ? (
            ''
          ) : (
            <a
              className='d-flex flex-row align-items-center'
              onClick={goToNextPage}>
              <i className='fa fa-arrow-circle-right' aria-hidden='true'></i>
            </a>
          )}
        </div>
      </>
    )
  }
  const filteredData = getPaginatedData().map(info => info)

  return {
    paginationJsx,
    filteredData
  }
}
