import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import BlogCards from '../../../components/BlogCards';
import BlogCard from './BlogCard';

const BlogSection = () => {

    const axiosPublic = useAxiosPublic();
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get(`blogs`);
            console.log("this are the users in response:",res.data)
            return res.data;
        }
    })
    return (
        <div className='max-w-6xl mx-auto'>
<h1 className='text-4xl font-bold text-center my-20'>BLOGS</h1>

         <div className='grid grid-cols-2 gap-5'>


            {

blogs.map((blog,idx) =><BlogCard key={idx} blog={blog}/>)








            }



         </div>


        </div>
    );
};

export default BlogSection;