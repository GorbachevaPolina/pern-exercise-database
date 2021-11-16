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
                    Catalog of workouts
                    <br />
                    Start working on yourself today
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
                        <img src='https://p4.wallpaperbetter.com/wallpaper/5/212/870/women-belly-exercising-sport-bras-sport-hd-wallpaper-preview.jpg' alt='workout' className='mainpage-img' />
                    </div>
                    <div className='section'>
                        <p className='description-text'>
                            It can be quite intimidating to start exercising with no prior experience. All different types of workouts can confuse and even deter newcomers from continuing their fitness journey.
                            <br/>
                            The goal of this website is to organise workouts in a way that would allow people to start exercising without thinking about it too much.
                        </p>
                    </div>
                </div>
                <br />
                <div className='description-section'>
                    <div className='section'>
                        <p className='description-text'>
                            More experienced people could also find use in this application. 
                            <br />
                            You can easily keep track of your current workout routine by adding exercises to favourites.
                            <br />
                            Also, this website can help you discover new workouts, which you may have never seen before.
                        </p>
                    </div>
                    <div className='section'>
                        <img src='https://media.istockphoto.com/photos/man-standing-in-yoga-position-picture-id688086016?k=20&m=688086016&s=612x612&w=0&h=w9zfw21q3f4q3Ja1MaG30AieamM1y0bE-Pdtza-HvRg=' alt='workout' className='mainpage-img' />
                    </div>
                </div>
            </section>

            <div className='back-green'>
                <section className='menu-descr-container section-container'>
                    <div className='half section'>
                        <img src='https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/11/Banner-1656x981-gym.jpg' alt='workout' className='mainpage-img half-img'/>
                    </div>
                    <div className='section section-text'>
                        <p className='description-text menu-text'>
                            Browse catalog to see tons of workouts by top fitness creators on YouTube. 
                            <br /> 
                            Each workout has a description and categories so even people, who have never exercised before, can understand what each workout does.
                            <br />
                            You can save preferred exercises to Favourites section in your profile to have quick access to them at all times.
                        </p>
                        <Link to='/catalog' className='menu-btn'>CATALOG</Link>
                    </div>
                </section>
            </div>
        </div>
        
    )
}

export default MainPage;