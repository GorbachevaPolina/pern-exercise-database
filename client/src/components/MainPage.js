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
                    Каталог упражнений
                    <br />
                    Начни работу над собой сегодня
                </p>
                {/* {
                    isAuth ?
                    <Link to='/dashboard' className='profile-btn main-btn'>Избранное</Link> :
                    <Link to='/register' className='profile-btn main-btn'>Регистрация</Link>
                } */}
                {
                    isAuth ?
                    null :
                    <Link to='/register' className='profile-btn main-btn'>Регистрация</Link>
                }
            </div>

            <section className='description-container section-container'>
                <div className='description-section'>
                    <div className='section'>
                        <img src='https://p4.wallpaperbetter.com/wallpaper/5/212/870/women-belly-exercising-sport-bras-sport-hd-wallpaper-preview.jpg' alt='workout' className='mainpage-img' />
                    </div>
                    <div className='section'>
                        <p className='description-text'>
                            Многим людям трудно начать заниматься спортом без какого-либо опыта. Различные виды тренировок могут сбить с толку или даже отпугнуть новичков.
                            <br/>
                            Цель данного веб-сервиса - организовать тренировки таким образом, чтобы даже самые необытные люди смогли подобрать себе упражения по вкусу.
                        </p>
                    </div>
                </div>
                <br />
                <div className='description-section'>
                    <div className='section'>
                        <p className='description-text'>
                            Более опытные люди также смогут найти пользву в данном сайте.  
                            <br />
                            Пользователь может не только управлять уже существующими тренировками с помощью функции добавления в избранное, но и открывать для себя еще неизвестные упражнения, просматривая каталог.
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
                            Просматривайте каталог, чтобы увидеть упражнения от лучших фитнес-блогеров на YouTube. 
                            <br /> 
                            У каждой тренровки есть описание и категории, поэтому даже самые неопытные люди смогут разобраться с любым упражнением.
                            <br />
                            Понравившиеся упражнения можно сохранить в Избранное для легкого доступа к ним.
                        </p>
                        <Link to='/catalog' className='menu-btn'>КАТАЛОГ</Link>
                    </div>
                </section>
            </div>
        </div>
        
    )
}

export default MainPage;