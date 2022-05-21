import React from 'react'

function EmpList() {
    const employee = [
        {
            name : 'Zara',
            job : 'Analyst'
        },
        {
            name : 'Sara',
            job : 'BusinessAnalyst'
        },
        {
            name : 'Shaik',
            job : 'Singer'
        },
        {
            name : 'Syed',
            job : 'Actor'
        }
    ]
{/*const employeelist = employee.map(employee=><h2>{employee.name} {employee.job}</h2>)*/}
  return (
    <div>
    
      <table>
        <tr>
          <th>Name</th>
          <th>Job</th>
        
        </tr>
        {employee.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.job}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default EmpList