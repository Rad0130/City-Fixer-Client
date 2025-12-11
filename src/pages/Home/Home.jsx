import React from 'react';
import Banner from '../../components/Banner';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    const axios=useAxios();

    const {data:allIssues=[]}=useQuery({
        queryKey:['issues'],
        queryFn: async()=>{
            const res=await axios.get('/issues');
            return res.data;
        }
    })

    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className='font-bold text-4xl mt-20 mb-10'>latest Resolved Issues</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    allIssues.map(issue=>
                        <div key={issue._id} className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-50 to-indigo-100 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                    <div className="absolute top-0 left-0 h-2 w-full bg-linear-to-r from-blue-500 to-purple-600"></div>
                    
                    <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                        <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                        Resolved
                        </span>
                    </div>
                    
                    <div className="mb-4">
                        <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800">
                        High Priority
                        </span>
                    </div>
                    
                    <div className="mb-4 overflow-hidden rounded-xl">
                        <img 
                        src="https://images.unsplash.com/photo-1596557238586-37c8c832eb2b" 
                        alt="Pothole on Main Street"
                        className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    
                    <h3 className="mb-2 text-xl font-bold text-gray-800 line-clamp-1">
                        Pothole on Main Street
                    </h3>
                    
                    <p className="mb-4 text-gray-600 line-clamp-2">
                        Large pothole causing traffic disruption near the city center. Requires immediate attention.
                    </p>
                    
                    <div className="mb-4 space-y-2">
                        <div className="flex items-center">
                        <svg className="mr-2 h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span className="text-gray-700">Road Damage</span>
                        </div>
                        <div className="flex items-center">
                        <svg className="mr-2 h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-700">Main Street, City Center</span>
                        </div>
                    </div>
                    
                    <div className="mb-6 flex items-center justify-between border-t border-gray-200 pt-4">
                        <div className="flex items-center">
                        <svg className="mr-2 h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <div>
                            <p className="text-sm text-gray-500">Assigned to</p>
                            <p className="font-medium text-gray-800">Road Maintenance Dept</p>
                        </div>
                        </div>
                        
                        <div className="flex items-center rounded-full bg-linear-to-r from-blue-100 to-indigo-100 px-4 py-2">
                        <svg className="mr-2 h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        <span className="font-bold text-gray-800">45</span>
                        <span className="ml-1 text-sm text-gray-600">Upvotes</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <div>
                        <p className="text-sm text-gray-500">Reported by</p>
                        <p className="font-medium text-gray-800">John Smith</p>
                        </div>
                        
                        <button className="rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2 font-semibold text-white transition-all hover:from-blue-700 hover:to-indigo-700 hover:shadow-md">
                        View Details
                        </button>
                    </div>
                    </div>
                    )
                }
            </div>

            {/* feature section */}
            <section className="py-16 bg-linear-to-b from-white to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Platform</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Empowering citizens to make their cities better through technology
                    </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* <!-- Feature 1 --> */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Real-time Tracking</h3>
                        <p className="text-gray-600">
                        Track your reported issues from submission to resolution with live updates and notifications.
                        </p>
                    </div>

                    {/* <!-- Feature 2 --> */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 rounded-full bg-linear-to-r from-green-500 to-teal-500 flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Response</h3>
                        <p className="text-gray-600">
                        Priority routing ensures critical issues get immediate attention from relevant departments.
                        </p>
                    </div>

                    {/* <!-- Feature 3 --> */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 rounded-full bg-linear-to-r from-orange-500 to-red-500 flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Community Support</h3>
                        <p className="text-gray-600">
                        Upvote issues to show importance and collaborate with neighbors on community problems.
                        </p>
                    </div>

                    {/* <!-- Feature 4 --> */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Data Insights</h3>
                        <p className="text-gray-600">
                        Comprehensive analytics help city officials make data-driven decisions for infrastructure planning.
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            {/* <!-- How It Works Section --> */}
            <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Simple steps to report and resolve public issues in your city
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* <!-- Step 1 --> */}
                <div className="relative">
                    <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-6 relative z-10">
                        <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Report Issue</h3>
                        <p className="text-gray-600">
                        Take a photo, add description and location of the issue through our mobile or web app.
                        </p>
                    </div>
                    </div>
                </div>

                {/* <!-- Step 2 --> */}
                <div className="relative">
                    <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-linear-to-r from-green-500 to-teal-600 flex items-center justify-center mb-6 relative z-10">
                        <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <div className="bg-green-50 p-6 rounded-2xl">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Review & Assign</h3>
                        <p className="text-gray-600">
                        Admin reviews and assigns the issue to relevant staff based on category and location.
                        </p>
                    </div>
                    </div>
                </div>

                {/* <!-- Step 3 --> */}
                <div className="relative">
                    <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-linear-to-r from-orange-500 to-amber-600 flex items-center justify-center mb-6 relative z-10">
                        <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-2xl">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Progress Updates</h3>
                        <p className="text-gray-600">
                        Track real-time updates as staff works on the issue. Get notified about progress changes.
                        </p>
                    </div>
                    </div>
                </div>

                {/* <!-- Step 4 --> */}
                <div className="relative">
                    <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-linear-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-6 relative z-10">
                        <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <div class="bg-purple-50 p-6 rounded-2xl">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Resolution & Feedback</h3>
                        <p className="text-gray-600">
                        Issue gets resolved and closed. Provide feedback to help improve city services.
                        </p>
                    </div>
                    </div>
                </div>
                </div>

                {/* <!-- Connecting Lines for Desktop --> */}
                <div className="hidden md:block absolute top-40 left-0 right-0">
                <div className="flex justify-center">
                    <div className="w-3/4 h-1 bg-linear-to-r from-blue-500 via-green-500 to-purple-500 opacity-30 rounded-full"></div>
                </div>
                </div>
            </div>
            </section>

            {/* <!-- Extra Section 1: Statistics --> */}
            <section className="py-16 bg-linear-to-r from-indigo-600 to-purple-700 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Making a Real Difference</h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    Join thousands of citizens who are actively improving their communities
                </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="text-5xl font-bold mb-2">10,000+</div>
                    <p className="text-lg opacity-90">Issues Reported</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-bold mb-2">85%</div>
                    <p className="text-lg opacity-90">Resolution Rate</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-bold mb-2">24h</div>
                    <p className="text-lg opacity-90">Average Response Time</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-bold mb-2">50+</div>
                    <p className="text-lg opacity-90">Cities Covered</p>
                </div>
                </div>
            </div>
            </section>

            {/* <!-- Extra Section 2: Testimonials --> */}
            <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">What Citizens Say</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Real stories from people who made their neighborhoods better
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-blue-400 to-purple-500"></div>
                    <div className="ml-4">
                        <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                        <p className="text-sm text-gray-600">Local Resident</p>
                    </div>
                    </div>
                    <p className="text-gray-600 italic">
                    "Reported a broken streetlight in my area. It was fixed within 48 hours! This platform truly works."
                    </p>
                    <div className="mt-4 flex text-yellow-400">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                    </div>
                </div>

                {/* <!-- Testimonial 2 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-green-400 to-teal-500"></div>
                    <div className="ml-4">
                        <h4 className="font-bold text-gray-800">Michael Chen</h4>
                        <p className="text-sm text-gray-600">Business Owner</p>
                    </div>
                    </div>
                    <p className="text-gray-600 italic">
                    "The pothole in front of my shop was fixed in record time. Great transparency and updates throughout."
                    </p>
                    <div className="mt-4 flex text-yellow-400">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                    </div>
                </div>

                {/* <!-- Testimonial 3 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-orange-400 to-red-500"></div>
                    <div className="ml-4">
                        <h4 className="font-bold text-gray-800">Priya Sharma</h4>
                        <p className="text-sm text-gray-600">Community Leader</p>
                    </div>
                    </div>
                    <p className="text-gray-600 italic">
                    "Our community park cleanup was organized through this platform. 50+ volunteers participated!"
                    </p>
                    <div className="mt-4 flex text-yellow-400">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Home;