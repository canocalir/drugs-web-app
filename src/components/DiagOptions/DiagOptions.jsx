import React, { useState } from 'react'
import style from './DiagOptions.module.scss' 

const DiagOptions = ({symptoms}) => {
    const [selectedSymptomId, setSelectedSymptomId] = useState(10)
    const [ageValue, setAgeValue] = useState('')
    const [genderValue, setGenderValue] = useState('female')
    const [diagData, setDiagData] = useState([])
    const [showSeptom, setShowSeptom] = useState(false)


    const diagnosisHandler = async (e) => {
      e.preventDefault()
      const url = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${selectedSymptomId}]&gender=${genderValue}&year_of_birth=${ageValue}`+ process.env.REACT_APP_DIAG_TOKEN
      console.log(url)
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
            {symptoms?.map((symptom) => {
                return <option id={symptom.ID} key={symptom.ID} value={symptom.Name}>{symptom.Name}
                </option>
            })}
        </select>

        <label htmlFor='year'>Birthday Year</label>
        <input onChange={(e) => setAgeValue(e.target.value)} required maxLength={4} placeholder='i e. 1988' type="text" name="year" id="year" />
        
        <label htmlFor="gender">Select Gender</label>
          <select className='gender-select-box' onChange={(e) => setGenderValue(e.target.value)} name="gender" id="gender">
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select> 

          <button onClick={() => setShowSeptom(!showSeptom)} className='btn' type="submit" value="Diagnose Me">{showSeptom ? "Listed" : "Diagnose Me"}</button>
        </form>
        
        {diagData?.map((diag) => {
          return( 
            <div className={style.septomsContainer}>
               
               <h4>{diag.Issue.Name}:</h4>
                <p>{diag.Issue.Accuracy}%</p>
              </div> 
          )
        })}
        </div>
  )
}

export default DiagOptions