import React from 'react'

const Title = () => {
  // console.log({ blog: data })
  return <div>blog id page</div>
}

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-blog`)
//   const data = await res.json()

//   console.log({ data })

//   const paths = data.map(({ fields: { title } }) => ({
//     params: { title }
//   }))

//   return { paths, fallback: false }
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-blog`)
//   const data = await res.json()
//   if (!data) return

//   console.log({ data })

//   return { props: { data } }
// }

export default Title
