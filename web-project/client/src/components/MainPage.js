import React from "react";
import Header from "./Header";

const MainPage = ({isAuth, setAuth}) => {
    return (
        <div className='main-page-container'>
            <Header isAuth={isAuth} setAuth={setAuth}/>
            <img 
                src='https://greenfortune.com/media/optimized/NL_HEX_Oudewater_2018_DB_025-2.jpg?w=1920&h=1080&fit=crop'
                className='w-100'
            />

            <section className='description-container section-container'>
                <div className='description-section'>
                    <div className='section'>
                        <img src='https://greenkitchenstories.com/wp-content/uploads/2021/03/Kale_pasta_01-1333x750.jpg' className='food-img' />
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
                        <img src='https://greenkitchenstories.com/wp-content/uploads/2020/12/Yogurt-Bowl-Harissa-Chickpeas-1200x675.jpg' className='food-img' />
                    </div>
                </div>
            </section>

            <div className='back-green'>
                <section className='menu-descr-container section-container'>
                    <div className='half-img section'>
                        <img src='https://greenkitchenstories.com/wp-content/uploads/2021/09/Mushroom-Caesar-01.jpg' className='food-img'/>
                    </div>
                    <div className='section section-text'>
                        <p className='description-text menu-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet consectetur erat, et iaculis neque rhoncus et. Maecenas blandit nulla consequat ante efficitur, ac molestie sem rutrum. Nunc eros mi, dignissim vel purus ac, lacinia imperdiet dui. Cras mattis odio in ante sagittis vulputate. Quisque vestibulum mauris nisi, ut congue ante elementum quis. Vestibulum a elit risus. Donec nec lacinia urna, sit amet accumsan ligula.                        </p>
                        <button className='menu-btn'>MENU</button>
                    </div>
                </section>
            </div>
        </div>
        
    )
}

export default MainPage;