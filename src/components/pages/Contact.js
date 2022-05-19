import React from 'react';



// export default function Contact() {
//     return (
//         <div>
//             <div className='form-group'>
//                 <label for='name'>Name: </label>
//                 <input type='text' id='name' className='contact-name'></input>
//                 <label for='email'>Email: </label>
//                 <input type='text' id='email' className='contact-email'></input>
//                 <label for='message'>Message: </label>
//                 <input type='text' id='message' className='contact-message'></input>
//                 <button type='submit' value='Submit'></button>
//             </div>
//         </div>
//     )
// };


export default function Contact() {
    return  (
        <div className='form'>
            <div className="form-group">
                <label for="name">Name: </label>
                <input type="name" className="form-control" id="name" />
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="text" className="form-control" id="email" />
            </div>
            <div className="form-group">
                <label for="message">Message:</label>
                <input type="text" className="form-control" id="message" />
            </div>
            <button type="submit" className="message-button">Submit</button>
        </div>
    )
}