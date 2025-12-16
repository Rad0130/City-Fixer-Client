import React, { useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import IssueCard from './IssueCard';

const AllIssues = () => {
    const axios = useAxios();
    const [filters, setFilters]=useState({
        categories:[],
        status:[],
        priority:[]
    })

    const { data: issues = [] } = useQuery({
        queryKey: ['issues', filters],
        queryFn: async () => {
            const params = new URLSearchParams();

            if (filters.categories.length)
            params.append('category', filters.categories.join(','));

            if (filters.status.length)
            params.append('status', filters.status.join(','));

            if (filters.priority.length)
            params.append('priority', filters.priority.join(','));

            const res = await axios.get(`/issues?${params.toString()}`);
            return res.data;
        }
    });

    const isSelected = (type, value) =>
    filters[type].includes(value);

    const categories=[];
    issues.forEach(issue=>{
        if(!categories.includes(issue.category)){
            categories.push(issue.category);
        }
    })

    const toggleFilter = (type, value) => {
        setFilters(prev => {
            const exists = prev[type].includes(value);

            return {
            ...prev,
            [type]: exists
                ? prev[type].filter(item => item !== value)
                : [...prev[type], value]
            };
        });
    };

    const allStatus=['Open', 'In Progress', 'Resolved']
    const priority=['High', 'Normal']

    return (
        <div className='mt-20 mb-5'>
            <div className='flex items-center justify-between mb-5'>
                <div>
                <h2 className='text-3xl font-bold'>Complained Issues({issues.length})</h2>
                </div>
                <div className='flex flex-row-reverse items-center gap-5'>
                <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Filter By ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>
                        <div>
                            <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1">Category ⬇️</div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                {categories.map(category => (
                                    <li key={category}>
                                        <button
                                        onClick={() => toggleFilter('categories', category)}
                                        className={`btn btn-sm w-full ${
                                            isSelected('categories', category)
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-base-200'
                                        }`}
                                        >
                                        {category}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        </a></li>
                    <li><a>
                        <div>
                            <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1">Status ⬇️</div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                {allStatus.map(status => (
                                    <li key={status}>
                                        <button
                                        onClick={() => toggleFilter('status', status)}
                                        className={`btn btn-sm w-full ${
                                            isSelected('status', status)
                                            ? 'bg-green-500 text-white'
                                            : 'bg-base-200'
                                        }`}
                                        >
                                        {status}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        </a></li>
                    <li><a>
                        <div>
                            <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1">Priority ⬇️</div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                {priority.map(pri => (
                                    <li key={pri}>
                                        <button
                                        onClick={() => toggleFilter('priority', pri)}
                                        className={`btn btn-sm w-full ${
                                            isSelected('priority', pri)
                                            ? 'bg-red-500 text-white'
                                            : 'bg-base-200'
                                        }`}
                                        >
                                        {pri}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        </a></li>
                </ul>
                </div>
                <div>
                    <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
                {
                    issues.map(issue=> <IssueCard key={issue._id} issue={issue}></IssueCard> )
                }
            </div>
        </div>
    );
};

export default AllIssues;