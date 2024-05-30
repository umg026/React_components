import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData, deleteUser } from '../../redux/features/Users/thunk/user_thunk';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Table() {
    const dispatch = useDispatch();
    // State for pagination

    const { isLoading, data, page, perPage, totalPages } = useSelector(state => state.userData); // Fetch data from redux 
    // console.log(page);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(4)
    // for Searching state
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        dispatch(userData({ page: currentPage, pageSize: limit }));
    }, [dispatch, currentPage, limit, searchQuery]);


    // for searching function :
    const handelSearch = () => {
        dispatch(userData({ page: 1, searchQuery }))
        setCurrentPage(1)
    }


    // Handling loading state
    if (isLoading) {
        return <div className="flex justify-center items-center h-[100vh]"> Loading..........</div>;
    }
    
    const prevPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const nextPage = () => {
        setCurrentPage(prevPage => (page < totalPages ? page + 1 : prevPage));
    };

    const changePage = (id) => {
        setCurrentPage(id);
    };
    // delete Role with confrim 
    const handelDelete = (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this role?');

        if (confirmed) {
            dispatch(deleteUser(id));
            toast.success("User Delete Successfully");
        }
    }
    return (
        <div>

            {/* ======== Header  ================== */}
            <div className="sm:flex sm:items-center lg:px-6 sm:px-2 pb-5">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">User</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the role in your account including their name, type,  and permission.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <div className="flex gap-4">
                        <form className="flex items-center max-w-sm mx-auto">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-950 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                                    </svg>
                                </div>
                                {/* input field  */}
                                <input type="text" value={searchQuery} autoFocus
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Or UserName..." required />
                            </div>
                            <button type="submit" onClick={handelSearch} className="hidden p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>
                        <div className="">
                            <Link to="create" type="button" className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add User</Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* =============================  Table Data ===================================================== */}

            <div className="mt-8 flow-root">
                <div className=" w-full overflow-x-auto">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Id</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Username</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Image</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Craeted</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {data && data?.map((item, index) => (

                                    <tr key={index}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{index + 1}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-950">{item.username}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-950">{item.email}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-950">{item.name}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-950">
                                            <img src={`http://192.168.1.116:8090/api/files/_pb_users_auth_/${item.id}/${item.avatar}`} alt="not found" className='rounded-full w-12 h-12 object-cover' />
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-950">{item.created}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-950">
                                            <Link type="button"
                                                to={`/users/edit/${item.id}`}
                                                className="mr-3 text-sm text-blue-800 hover:underline hover:text-blue-950 py-1  rounded focus:outline-none focus:shadow-outline">Update</Link>

                                            <button //  deleteUser
                                                onClick={() => handelDelete(item.id)}
                                                type="button" className="text-s text-red-600 font-medium hover:underline py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex w-full mt-16 justify-center items-center gap-3">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Previous</button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                    <button
                        key={number}
                        onClick={() => changePage(number)}
                        className={`flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 ${currentPage === number ? 'bg-gray-900/10' : ''}`}
                    >
                        {number}
                    </button>
                ))}
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Next    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>

        </div>
    );
}

export default Table;

