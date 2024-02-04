import React from 'react';
import './footer.css'

const footer = () => {
    return (
        <div className='footer'>
            <span>Designed and Deverloped by Duyen</span>
            <div >
                    <a href="https://github.com/lephamxuanduyen">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.facebook.com/xuanduyen.lepham.1">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/l%C3%AA-ph%E1%BA%A1m-xu%C3%A2n-duy%C3%AAn-322563284/">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/nau.ne.2003/">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
            </div>
        </div>
    );
};

export default footer;