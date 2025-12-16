import React from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import IssueCard from './IssueCard';

const AllIssues = () => {
    const axios = useAxios();

    const {data:issues=[]}=useQuery({
        queryKey:['issues'],
        queryFn: async ()=>{
            const res=await axios.get('/issues');
            return res.data;
        }
    })
    return (
        <div className='mt-20 mb-5'>
            <div className='flex flex-row-reverse items-center justify-between gap-5'>
                <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Filter By ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Category</a></li>
                    <li><a>Status</a></li>
                    <li><a>Priority</a></li>
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
            <div className='font-bold text-3xl'>
                Complained Issues({issues.length})
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