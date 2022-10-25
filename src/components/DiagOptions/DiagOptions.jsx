import React, { useState } from 'react'
import style from './DiagOptions.module.scss'

const DiagOptions = ({symptoms}) => {
    const [selectedSymptomId, setSelectedSymptomId] = useState(10)
    const [ageValue, setAgeValue] = useState('')
    const [genderValue, setGenderValue] = useState('female')
    const [diagData, setDiagData] = useState([])


    const diagnosisHandler = async (e) => {
      e.preventDefault()
      const url = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${selectedSymptomId}]&gender=${genderValue}&year_of_birth=${ageValue}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNhbi5vY2FsaXJAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxMTMzNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMi0xMC0yNCIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjY2NjY2MDI5LCJuYmYiOjE2NjY2NTg4Mjl9.F5oceLi8hy29H7KiseJi1a6kRoLrzrBxWmBR0Vy-oD0&format=json&language=en-gb`
      const res = await fetch(url)
      const data = await res.json()
      setDiagData(data)
    }
console.log(diagData)
  return (
    <div>
      <form onSubmit={diagnosisHandler} className={style.optionsContainer}>
        <label htmlFor="symptoms">Symptoms</label>
        <select onChange={(e) => setSelectedSymptomId(symptoms.filter((symptom) => {
          return e.target.value === symptom.Name
          })[0].ID)} required name="symptoms" id="symptoms">
            {symptoms.map((symptom) => {
                return <option id={symptom.ID} key={symptom.ID} value={symptom.Name}>{symptom.Name}
                </option>
            })}
        </select>
        <label htmlFor='year'>Year</label>
        <input onChange={(e) => setAgeValue(e.target.value)} required maxLength={4} placeholder='i e. 1988' type="text" name="year" id="year" />
        <div style={{'display': 'flex', 'gap': '0.5rem'}}>
        <label htmlFor="gender">Select Gender</label>
          <select onChange={(e) => setGenderValue(e.target.value)} name="gender" id="gender">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <input type="submit" value="Diagnose Me" />
        </form>
        {diagData.map((diag) => {
          return <div>
            <p>{diag.Issue.Name}</p>
          <p>{diag.Issue.Accuracy}%</p>
          </div>
        })}
        </div>
  )
}

export default DiagOptions