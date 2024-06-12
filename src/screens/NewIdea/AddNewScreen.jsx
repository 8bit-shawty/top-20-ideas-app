import React, { useEffect, useState } from 'react'
import Header from '../Home/components/Header'
import { ChevronLeft, Info, Send } from 'lucide-react'
import { db } from '../../../utils';
import { Ideas } from '../../../utils/schema';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

function AddNewScreen() {
    const navigation = useNavigate();

    const [idea, setIdea] =useState();
    const [username, setUsername] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [existingUser, setExistingUser] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('username'))
            {
                setUsername(localStorage.getItem('username'));
                setExistingUser(true);
            }
    },[])

    const onSaveHandler = async() =>{
        //Logic to save data
        const result = await db.insert(Ideas).values({
            content:idea,
            username:username,
            createdAt:moment().format('DD MMM yyyy') // 18 Aug 2024
        }).returning({id: Ideas.id})

        if(result){
            localStorage.setItem('username', username);
            // console.log("Saved Data!")
            // setUsername('');
            setIdea('');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false)
            }, 5000)
        }
    }



    return (
        <div>
            <Header/>

            {showAlert&& <div role="alert" className="alert alert-success mt-5 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className=''>You're full of bright ideas! Thank you for sharing with the world </span>
            </div>}

            <button className=' btn mt-7' onClick={() => navigation('/')}>
                <ChevronLeft className='h-4 w-4'/>Back</button>
            <h2 className='font-bold text-2xl mt-5'>From Concept to Creation : Empowering your startup journey</h2>
            <div className='flex flex-col mt-7 gap-2'>
                <label>Your Idea *</label>
                <textarea 
                value={idea}
                onChange={(event) => setIdea(event.target.value)}
                className="textarea textarea-accent" placeholder="Write your awesome idea "></textarea>
            </div>

            {!existingUser&& <div className='flex flex-col mt-7 gap-2'>
                <label className='flex justify-between'>Your Username *
                    <span className='flex items-center gap-2 text-sm'><Info className='h-4 w-4'/>No Account Needed</span>
                </label>
                <input 
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type="text" placeholder="Username" className="input input-bordered input-accent w-full" />
            </div>}

            <button 
            disabled={!(idea && username)}
            onClick={() => onSaveHandler()}
            className='btn w-full btn-primary mt-7'>
                Send<Send className='h-4 w-4'/></button>
        </div>
    )
}

export default AddNewScreen