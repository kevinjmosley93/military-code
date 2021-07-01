import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { JobContext } from '../contexts/JobContext'
import Pagination from '../helpers/paginate'
import JobCenterSearch from '../components/JobCenterSearch'

const Resources = () => {
  const [expanded, setExpanded] = useState(false)
  const [uid, setUid] = useState(null)
  const { getApprenticeships, apprenticeships, location } =
    useContext(JobContext)

  const data = apprenticeships || []

  const { filteredData, paginationJsx } = Pagination({
    data
  })

  console.log({ filteredData })

  useEffect(() => {
    getApprenticeships(location)
  }, [])

  if (!apprenticeships)
    return (
      <div>
        <h1 className='text-center'>Apprenticeships near {location}</h1>
        <p>Loading.......</p>
      </div>
    )

  console.log({ apprenticeships })

  return <div>apprenticeships</div>

  // return (
  //   <>
  //     <div className='mb-3 container'>
  //       <div className='row g-5 mt-3'>
  //         <h1 className='text-center'>Apprenticeships near {location}</h1>
  //         <div className='col-md-3'>
  //           <div className='position-sticky pt-2' style={{ top: '2rem' }}>
  //             <div className='p-4 mb-3 bg-light rounded shadow-lg'>
  //               <h4 className='fst-italic text-center mb-2'>Resources</h4>
  //               <ul style={{ listStyle: 'none' }} className='m-0 p-0'>
  //                 <li className='pb-2'>
  //                   <Link href='apprenticeships'>
  //                     <a>Apprenticeships by Location</a>
  //                   </Link>
  //                 </li>
  //                 <li className='pb-2'>
  //                   <Link href='licenses'>
  //                     <a>Licenses by Location</a>
  //                   </Link>
  //                 </li>
  //                 <li className='pb-2'>
  //                   <Link href='training'>
  //                     <a>Training by Location</a>
  //                   </Link>
  //                 </li>
  //                 <li className=''>
  //                   <Link href='unemployment'>
  //                     <a>Unemployment Rates by Location</a>
  //                   </Link>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //         <div className='col-md-9 text-dark py-2'>
  //           <div className=' container'>
  //             <JobCenterSearch />
  //             <div style={{ lineHeight: '2rem' }} className='row my-5'>
  //               {apprenticeships &&
  //                 apprenticeships.map(
  //                   (
  //                     {
  //                       Title,
  //                       ListRegionalAppOfficeContact,
  //                       ListStateAppOfficeContact,
  //                       ListFedAppOfficeContact
  //                     },
  //                     i
  //                   ) => {
  //                     return (
  //                       <div key={i} className='col-md-6'>
  //                         <div className='row g-0 border rounded flex-md-row mb-5 shadow h-md-250 '>
  //                           <div className='col p-4 d-flex flex-column '>
  //                             <h5>{Title}</h5>
  //                             <div
  //                               style={{ wordWrap: 'break-word' }}
  //                               className='d-flex flex-column justify-content-between'>
  //                               {ListRegionalAppOfficeContact.length > 0 && (
  //                                 <div>
  //                                   <h4>
  //                                     Regional Apprenticeship Office Contacts
  //                                   </h4>
  //                                   {ListRegionalAppOfficeContact.map(
  //                                     ({
  //                                       ID,
  //                                       Name,
  //                                       Phone,
  //                                       ProgramLevel,
  //                                       ContactName,
  //                                       ContactEmail,
  //                                       ContactPhone,
  //                                       ContactTitle,
  //                                       Address1,
  //                                       Address2,
  //                                       City,
  //                                       State,
  //                                       Zip
  //                                     }) => {
  //                                       if (ID) setUid(ID)
  //                                       return <h2>{Name}</h2>
  //                                     }
  //                                   )}
  //                                 </div>
  //                               )}
  //                               {ListStateAppOfficeContact.length > 0 && (
  //                                 <div>
  //                                   <h4>
  //                                     State Apprenticeship Office Contacts
  //                                   </h4>
  //                                   {ListStateAppOfficeContact.map(
  //                                     ({
  //                                       ID,
  //                                       Name,
  //                                       Phone,
  //                                       ProgramLevel,
  //                                       ContactName,
  //                                       ContactEmail,
  //                                       ContactPhone,
  //                                       ContactTitle,
  //                                       Address1,
  //                                       Address2,
  //                                       City,
  //                                       State,
  //                                       Zip
  //                                     }) => (
  //                                       <h2>{Name}</h2>
  //                                     )
  //                                   )}
  //                                 </div>
  //                               )}
  //                               {ListFedAppOfficeContact.length > 0 && (
  //                                 <div>
  //                                   <h4>
  //                                     Federal Apprenticeship Office Contacts
  //                                   </h4>
  //                                   {ListFedAppOfficeContact.map(
  //                                     ({
  //                                       ID,
  //                                       Name,
  //                                       Phone,
  //                                       ProgramLevel,
  //                                       ContactName,
  //                                       ContactEmail,
  //                                       ContactPhone,
  //                                       ContactTitle,
  //                                       Address1,
  //                                       Address2,
  //                                       City,
  //                                       State,
  //                                       Zip
  //                                     }) => (
  //                                       <h2>{Name}</h2>
  //                                     )
  //                                   )}
  //                                 </div>
  //                               )}
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     )
  //                   }
  //                 )}
  //             </div>
  //           </div>
  //         </div>
  //         {/* {paginationJsx()} */}
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Resources
