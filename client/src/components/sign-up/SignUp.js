import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SignUp.css'
import { createPost , updatePost} from '../../actions/posts';

const SignUp = ({currentId, setCurrentId}) => {

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId ) : null);

    useEffect(()=>{
        if(post) setPostData(post);
    }, [post])

    const [postData, setPostData] = useState({
        firstName: '',
        lastName: '',
        cnic: '',
        work: '',
        contact: '',
        salary: '',
        description: ''

    });

    const dispatch = useDispatch();

    const clear = () => {

        setCurrentId(null);

        setPostData({
            firstName: '',
            lastName: '',
            cnic: '',
            
            work: '',
            contact: '',
            salary: '',
            description: ''
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData));
        }else {
            dispatch(createPost(postData))
        }

        clear();
        
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input 
                    className="form__input" 
                    type="text" 
                    name="firstName"
                    id="firstName" 
                    placeholder="First Name"
                    value={postData.firstName}
                    onChange={(e) => setPostData( {...postData, firstName: e.target.value })}
                    />
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input
                    className="form__input"  
                    type="text" 
                    name="lastName" 
                    id="lastName"  
                    placeholder="LastName" 
                    value={postData.lastName} 
                    onChange={(e) => setPostData( {...postData, lastName: e.target.value })}
                />
                </div>
                <div className="cnic">
                    <label className="form__label" for="cnic">CNIC </label>
                    <input  
                    type="text" 
                    name="cnic" 
                    id="cnic"  
                    className="form__input"
                    placeholder="cnic"
                    value={postData.cnic} 
                    onChange={(e) => setPostData( {...postData, cnic: e.target.value })}
                    />
                </div>
                <div className="work">
                    <label className="form__label" for="work">Work </label>
                    <input  
                    type="text" 
                    name="work" 
                    id="work"  
                    className="form__input"
                    placeholder="work"
                    value={postData.work} 
                    onChange={(e) => setPostData( {...postData, work: e.target.value.split(',') })}
                    />
                </div>
                <div className="contact">
                    <label className="form__label" for="contact">Contact No </label>
                    <input  
                    type="text" 
                    name="contact" 
                    id="contact"  
                    className="form__input"
                    placeholder="contact no"
                    value={postData.contact} 
                    onChange={(e) => setPostData( {...postData, contact: e.target.value.split(',') })}
                    />
                </div>
                <div className="salary">
                    <label className="form__label" for="salary">Salary Range </label>
                    <input  
                    type="text" 
                    name="salary" 
                    id="salary"  
                    className="form__input"
                    placeholder="Salary Range"
                    value={postData.salary} 
                    onChange={(e) => setPostData( {...postData, salary: e.target.value.split(',') })}
                    />
                </div>

                <div className="description">
                    <label className="form__label" for="description">Description </label>
                    <input  
                    type="text" 
                    name="description" 
                    id="description"  
                    className="form__input"
                    placeholder="description"
                    value={postData.description} 
                    onChange={(e) => setPostData( {...postData, description: e.target.value.split(',') })}
                    />
                </div>
                {/* <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                </div> */}
            </div>
            <div class="footer">
                <button type="submit" class="btn">Register</button>
            </div>
        </div>
      </form>  
        </>
    );
}

export default SignUp;