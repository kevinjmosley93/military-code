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
      <nav aria-label='job pagination' className='paginate '>
        <ul className='pagination-lg justify-content-sm-end justify-content-center d-flex flex-row p-0'>
          <button
            onClick={goToPreviousPage}
            className={` ${
              currentPage === 1 ? 'disabled' : ''
            } badge p-2 bg-primary bg-gradient`}>
            <i className='fa fa-arrow-circle-left' aria-hidden='true'></i>
          </button>
          {getPaginationGroup().map((item, index) => (
            <li key={index} onClick={changePage} className='page-item'>
              <button
                style={{ paddingInline: '.3rem' }}
                className={` ${
                  currentPage === item ? 'active' : ''
                } page-link p-2`}>
                <span className=''>{item}</span>
              </button>
            </li>
          ))}
          {currentPage === pageLimit ? (
            ''
          ) : (
            <button
              onClick={goToNextPage}
              className={`badge p-2 bg-primary bg-gradient`}>
              <i className='fa fa-arrow-circle-right' aria-hidden='true'></i>
            </button>
          )}
        </ul>
      </nav>
    )
  }
  const filteredData = getPaginatedData().map(info => info)

  return {
    paginationJsx,
    filteredData
  }
}
