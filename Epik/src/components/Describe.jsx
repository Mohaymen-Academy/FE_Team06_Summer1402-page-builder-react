import React from 'react';
import '../assets/styles/describe.css'
import DesCard from './DesCard';
import { categories } from '../Data/cats';
const Describe = (props) => {
    return (
        <
            // style={{''}}
            >
            <h1 style={{color:'white',marginLeft:'120px'}}>Categories</h1>
            <div className='categories'>
                {/* <div className=""> */}
                {categories.map((cat,index) =>
                    <DesCard key={index} title={cat.title} image={cat.image} />
                )}
                {/* </div> */}
            </div>
            <button
                style={{
                    padding: '13px',
                    marginTop: '15px',
                    backgroundColor: ' rgb(44, 44, 44)',
                    color: '#cccccc',
                    borderRadius: ' 3px',
                    justifySelf: 'center',
                    marginLeft: '47%',
                    marginRight: "45%",
                }}>
                View All

            </button>
        </>
    )
}
export default Describe;