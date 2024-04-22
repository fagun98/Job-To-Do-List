'use client';
import React, { useState } from 'react'

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [Company, setCompany] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [customDate, setCustomDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Company || !jobRole) {
        alert('Please fill in all fields');
        return;
        }
        const updatedJobs = [...jobs];
        const today = customDate || new Date();
        const formattedDate = today.toISOString().split('T')[0];
        const newJob = {
        'Date': formattedDate,
        'Company': Company,
        'Job': jobRole,
        };
        updatedJobs.push(newJob);
        setJobs(updatedJobs.sort((a, b) => (a.Date > b.Date ? 1 : -1)));
        setCompany('');
        setJobRole('');
        setCustomDate(null);
    }

  return (
    <div>
        <form className='p-6 justify-center items-center w-1/2' onSubmit={handleSubmit}>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                <input 
                    type="text" 
                    id="company" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                    dark:focus:border-blue-500" 
                    placeholder="company"
                    value={Company}
                    onChange={(e) => setCompany(e.target.value)} 
                />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Role</label>
                <input 
                    type="text" 
                    id="jobrole" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                    dark:focus:border-blue-500" 
                    placeholder="Job Role" 
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                />
            </div>

            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input
                    type="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={customDate ? customDate.toISOString().split('T')[0] : ''}
                    onChange={(e) => setCustomDate(new Date(e.target.value))}
                />
            </div>

            <button 
                type="submit" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                    text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>

        <div className="relative overflow-x-auto shadow-md p-6 border-2 rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Today's List
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"> 
                    <span className={`${jobs.length > 20 ? 'text-orange-500':'text-green-700' }`}>Today's Count: {jobs.length}</span></p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Company
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Job
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {job.Date}
                            </th>
                            <td className="px-6 py-4">
                                {job.Company}
                            </td>
                            <td className="px-6 py-4">
                                {job.Job}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default JobList