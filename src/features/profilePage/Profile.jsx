import { use, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"

export default function Profile() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState()

    
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) 
            navigate("/signin")



        async function getProfileData() {
            const token = localStorage.getItem("token")
            console.log(token)
            try{
                const response = await fetch("http://localhost:8084/main/user-info", {
                    method: "GET",
                    headers: { 
                        "Authorization": `Bearer ${token}`, 
                        "Content-Type": "application/json"},
                    
                  });
                const data = await response.json()
                console.log(data)
                console.log('data', data)
            }catch(error) {
                console.error(error)
            }
        }
        console.log(profile)
        getProfileData()
    }, [])

    function exit() {
        localStorage.removeItem("token"); 
        setProfile(null);
        navigate("/signin")

        
    }
    
    return (
        <div className="main-container1">
        <header className="header1">
            <div className="bilimber1">
                <h2>Bilim Ber</h2>
            </div>
            <div className="logout-btn1">
                <img src="images/dark-light.png" alt="" />
                <button onClick={exit}>Выйти</button>
            </div>
        </header>
        <section className="profile-section1">
            <div className="profile-card1">
                <div className="profile-image-button1">
                    <div className="profile-image1">
                        <img src="images/profile-image.png" alt="" />
                    </div>
                    <div className="image-btn1">
                        <button>Изменить фотографию</button>
                    </div>
                </div>
                <div className="profile-info-btn1">
                    <div className="profile-info1">
                        
                    </div>
                    <div className="info-btn1">
                        <button>Редактировать информацию</button>
                    </div>
                </div>

            </div>
        </section>
        <footer class="footer1">
            <div class="contacts-container">
                <div class="address-container">
                    <p>Местоположение</p>
                    <p>Область Актобе, Район Алматы</p>
                    <p>030007, город Актобе, улица Сатпаева 50 </p>
                </div>
                <div class="messages-container">
                    <p>По всем вопросам</p>
                    <p>Mobile: +7 777 555 12 12</p>
                    <p>whitehill@bbr.edu.kz</p>
                </div>
            </div>
            <div class="grades-container">
                <p>Создатели этой платформы хотели бы получить ваши отзывы</p>
                <p>Give feedback about this software</p>
            </div>
        </footer>
    </div>
    )
}