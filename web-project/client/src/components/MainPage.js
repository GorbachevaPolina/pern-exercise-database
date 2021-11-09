import React from "react";
import Header from "./Header";
import {Link} from 'react-router-dom'

const MainPage = ({isAuth, setAuth}) => {
    return (
        <div className='main-page-container'>
            <Header isAuth={isAuth} setAuth={setAuth}/>
            {/* <img 
                src='https://p4.wallpaperbetter.com/wallpaper/63/681/258/sports-gym-wallpaper-preview.jpg'
                className='w-100'
            /> */}
            <div className='hero'>
                <p className='hero-text'>
                    База физических упражнений.
                    <br />
                    Начни работу над собой уже сейчас 
                </p>
                {
                    isAuth ?
                    <Link to='/dashboard' className='profile-btn main-btn'>Favourite Exercises</Link> :
                    <Link to='/register' className='profile-btn main-btn'>Register</Link>
                }
            </div>

            <section className='description-container section-container'>
                <div className='description-section'>
                    <div className='section'>
                        <img src='https://p4.wallpaperbetter.com/wallpaper/5/212/870/women-belly-exercising-sport-bras-sport-hd-wallpaper-preview.jpg' className='mainpage-img' />
                    </div>
                    <div className='section'>
                        <p className='description-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet consectetur erat, et iaculis neque rhoncus et. Maecenas blandit nulla consequat ante efficitur, ac molestie sem rutrum. Nunc eros mi, dignissim vel purus ac, lacinia imperdiet dui. Cras mattis odio in ante sagittis vulputate. Quisque vestibulum mauris nisi, ut congue ante elementum quis. Vestibulum a elit risus. Donec nec lacinia urna, sit amet accumsan ligula.                        </p>
                    </div>
                </div>
                <br />
                <div className='description-section'>
                    <div className='section'>
                        <p className='description-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet consectetur erat, et iaculis neque rhoncus et. Maecenas blandit nulla consequat ante efficitur, ac molestie sem rutrum. Nunc eros mi, dignissim vel purus ac, lacinia imperdiet dui. Cras mattis odio in ante sagittis vulputate. Quisque vestibulum mauris nisi, ut congue ante elementum quis. Vestibulum a elit risus. Donec nec lacinia urna, sit amet accumsan ligula.                        </p>
                    </div>
                    <div className='section'>
                        <img src='https://media.istockphoto.com/photos/man-standing-in-yoga-position-picture-id688086016?k=20&m=688086016&s=612x612&w=0&h=w9zfw21q3f4q3Ja1MaG30AieamM1y0bE-Pdtza-HvRg=' className='mainpage-img' />
                    </div>
                </div>
            </section>

            <div className='back-green'>
                <section className='menu-descr-container section-container'>
                    <div className='half section'>
                        <img src='https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/11/Banner-1656x981-gym.jpg' className='mainpage-img half-img'/>
                    </div>
                    <div className='section section-text'>
                        <p className='description-text menu-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet consectetur erat, et iaculis neque rhoncus et. Maecenas blandit nulla consequat ante efficitur, ac molestie sem rutrum. Nunc eros mi, dignissim vel purus ac, lacinia imperdiet dui. Cras mattis odio in ante sagittis vulputate. Quisque vestibulum mauris nisi, ut congue ante elementum quis. Vestibulum a elit risus. Donec nec lacinia urna, sit amet accumsan ligula.                        </p>
                        <Link to='/catalog' className='menu-btn'>CATALOG</Link>
                    </div>
                </section>
            </div>
        </div>
        
    )
}

export default MainPage;