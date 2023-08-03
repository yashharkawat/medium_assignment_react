import { Link, Outlet } from "react-router-dom";
import { Formik } from "formik";
import * as yup from 'yup';
import { useState } from "react";

const NavBar=(props)=>{
    const initialValues={
        author:'',
        date:'',
        likes:'',
        comments:'',
    };
    const [filter,setFilter]=useState(false);
    return (
        <>
            <Link to='add'><button>Add new post</button></Link>
            <div>
                <input type="text" placeholder="Search by post, author, or topic" onChange={(e)=>props.searchHandler(e.target.value)} />
            </div>
            <div>
                <button onClick={()=>setFilter(true)}>Apply filter</button>
                {filter &&
                    <Formik initialValues={initialValues} onSubmit={(values)=>{
                        //console.log(values);
                        setFilter(false);
                        props.sendFilter(values);
                    }}>
                        {({values,handleChange,handleSubmit})=>(
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Filter by Author: </label>
                                    <input type="text" name="author" value={values.author} onChange={handleChange} />
                                    </div>
                                    <div>
                                    <label>Filter by Date: </label>
                                    <input type="date" name="date" value={values.date} onChange={handleChange} />
                                    </div>
                                    <div>
                                    <label>Filter by Likes: </label>
                                    <input type="number" name="likes" value={values.likes} onChange={handleChange} />
                                    </div>
                                    <div>
                                    <label>Filter by Comments: </label>
                                    <input type="number" name="comments" value={values.comments} onChange={handleChange} />
                                    </div>
                                    <button type="submit">Apply Filters</button> 
                            </form>
                        )}
                    </Formik>
                }
            </div>
        </>
    );
}
export default NavBar;