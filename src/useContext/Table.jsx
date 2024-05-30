import React from 'react'

export default function Table({data}) {
  return (
    <>
         <table className="table">
                <thead>
                    <tr>
                        <th>Collection Name</th>
                        <th>Permission Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.collectionName}</td>
                            <td>{item.permi_name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </>
  )
}
