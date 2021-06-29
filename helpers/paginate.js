import { Button } from 'react-bootstrap'
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
      <section className='pagination'>
        <button
          as='a'
          variant='primary'
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
          prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            as='a'
            variant='primary'
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? 'active' : null
            }`}>
            <span>{item}</span>
          </button>
        ))}

        {currentPage === pageLimit ? (
          ''
        ) : (
          <button
            as='a'
            variant='primary'
            onClick={goToNextPage}
            className={`next`}>
            next
          </button>
        )}
      </section>
    )
  }
  const filteredData = getPaginatedData().map(info => info)

  return {
    paginationJsx,
    filteredData
  }
}
