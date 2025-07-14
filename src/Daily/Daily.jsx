import React, { useState } from 'react';
import './Daily.css';

const DailyLogForm = () => {
  const [formData, setFormData] = useState({
    siteName: '',
    transitionId: '',
    transitionDate: '',
    equipmentType: '',
    assetCodeName: '',
    assetType: '',
    subCode: '',
    meter1Start: '',
    meter1End: '',
    meter2Start: '',
    meter2End: '',
    dateStart: '',
    dateEnd: '',
    clockIn: '',
    clockOut: '',
    fuelType: '',
    issuedOil: '',
    debitNote: '',
    employeeType: '',
    employeeId: '',
    debitReason: '',
    debitAmount: '',
    scope: '',
    location: '',
    remarks: '',
  });

  const [submittedReports, setSubmittedReports] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      ...formData,
      meter1Difference:
        Number(formData.meter1End) - Number(formData.meter1Start) || 0,
      meter2Difference:
        Number(formData.meter2End) - Number(formData.meter2Start) || 0
    };
    setSubmittedReports([...submittedReports, newReport]);
    setFormData({
      siteName: '',
      transitionId: '',
      transitionDate: '',
      equipmentType: '',
      assetCodeName: '',
      assetType: '',
      subCode: '',
      meter1Start: '',
      meter1End: '',
      meter2Start: '',
      meter2End: '',
      dateStart: '',
      dateEnd: '',
      clockIn: '',
      clockOut: '',
      fuelType: '',
      issuedOil: '',
      debitNote: '',
      employeeType: '',
      employeeId: '',
      debitReason: '',
      debitAmount: '',
      scope: '',
      location: '',
      remarks: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Daily Log Report For Vehicle & Machine</h2>

      <form onSubmit={handleSubmit}>
        {/* Basic Info */}
        <div className="form-row">
          <input name="siteName" value={formData.siteName} onChange={handleChange} placeholder="Site Name" required />
          <input name="transitionId" value={formData.transitionId} onChange={handleChange} placeholder="Transition ID" required />
          <input name="transitionDate" type="date" value={formData.transitionDate} onChange={handleChange}  required/>
        </div>

        <div className="form-row">
          <select name="equipmentType" value={formData.equipmentType} onChange={handleChange} required >
            <option>Select Equipment Type</option>
            <option>Excavator</option>
            <option>Truck</option>
            <option>Loader</option>
          </select>
          <select name="assetCodeName" value={formData.assetCodeName} onChange={handleChange} required >
            <option>Select Asset Name</option>
            <option>EX001</option>
            <option>BD002</option>
          </select>
          <select name="assetType" value={formData.assetType} onChange={handleChange} required>
            <option>Select Asset Code</option>
            <option>Heavy</option>
            <option>Light</option>
          </select>
          <select name="subCode" value={formData.subCode} onChange={handleChange} required>
            <option>Select Sub Code</option>
            <option>SC001</option>
            <option>SC002</option>
          </select>
        </div>

        {/* Meter Readings */}
        <hr />
        <div className="form-row orange">
          <input name="meter1Start" value={formData.meter1Start} onChange={handleChange} placeholder="1st Km/Hr Meter Start" required />
          <input name="meter1End" value={formData.meter1End} onChange={handleChange} placeholder="End" required />
          <input value={formData.meter1End - formData.meter1Start || ''} readOnly placeholder="Difference" required />
        </div>

        <div className="form-row orange">
          <input name="meter2Start" value={formData.meter2Start} onChange={handleChange} placeholder="2nd Km/Hr Meter Start" required />
          <input name="meter2End" value={formData.meter2End} onChange={handleChange} placeholder="End" required/>
          <input value={formData.meter2End - formData.meter2Start || ''} readOnly placeholder="Difference" required/>
        </div>

        {/* Date & Clock */}
        <div className="form-row orange">
          <input name="dateStart" type="date" value={formData.dateStart} onChange={handleChange} placeholder="Date Start"  required/>
          <input name="dateEnd" type="date" value={formData.dateEnd} onChange={handleChange} placeholder="Date End" required/>
        </div>

        <div className="form-row orange">
          <input name="clockIn" type="time" value={formData.clockIn} onChange={handleChange} placeholder="In Time" required/>
          <input name="clockOut" type="time" value={formData.clockOut} onChange={handleChange} placeholder="Out Time" required />
        </div>

        {/* Fuel & Employee */}
        <hr />
        <div className="form-row">
          <select name="fuelType" value={formData.fuelType} onChange={handleChange} required>
            <option>Select Fuel Type</option>
            <option>Diesel</option>
            <option>Petrol</option>
          </select>
          <input name="issuedOil" value={formData.issuedOil} onChange={handleChange} placeholder="Issued Oil" required/>
        </div>

        <div className="form-row">
          <select name="debitNote" value={formData.debitNote} onChange={handleChange} required >
            <option>Select Yes/No</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <select name="employeeType" value={formData.employeeType} onChange={handleChange} required >
            <option>Select Employee Type</option>
            <option>Operator</option>
            <option>Helper</option>
          </select>
          <input name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="Employee ID" required />
        </div>

        <div className="form-row">
          <input name="debitReason" value={formData.debitReason} onChange={handleChange} placeholder="Debit Reason" required/>
          <input name="debitAmount" value={formData.debitAmount} onChange={handleChange} placeholder="Debit Amount" required/>
        </div>

        {/* Scope and Remarks */}
        <hr />
        <div className="form-row">
          <input name="scope" value={formData.scope} onChange={handleChange} placeholder="Scope of Work" required/>
        </div>

        <div className="form-row">
          <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required/>
          <input name="remarks" value={formData.remarks} onChange={handleChange} placeholder="Remarks" required/>
        </div>

        {/* Submit Button */}
        <div className="btn">
          <button type="submit" style={{ backgroundColor:"#ed8d3aff", border: "none",height:"30px",borderRadius:"5px"}}>Submit Report</button>
        </div>
      </form>

      {/* Table Display */}
      {submittedReports.length > 0 && (
        <div className="table-container">
          <h3>Submitted Reports</h3>
          <table>
            <thead>
              <tr>
                <th>Site Name</th>
                <th>Transition ID</th>
                <th>Meter 1 Diff</th>
                <th>Meter 2 Diff</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {submittedReports.map((report, index) => (
                <tr key={index}>
                  <td>{report.siteName}</td>
                  <td>{report.transitionId}</td>
                  <td>{report.meter1Difference}</td>
                  <td>{report.meter2Difference}</td>
                  <td>{report.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DailyLogForm;