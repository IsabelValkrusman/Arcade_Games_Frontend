import React, { useState } from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap'; // Importige Bootstrap Spinner ja Alert
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';

// Keele lipud
const flags = {
    ee: '/images/flag-estonia.png', // Eesti lipp
    en: '/images/flag-uk.png',      // Inglise lipp
    ru: '/images/flag-russia.png',  // Vene lipp
};

const ArcadeScreen = () => {
    const [language, setLanguage] = useState('ee'); // Algne keel on eesti
    const { data: products, isLoading, error } = useGetProductsQuery();

  

    // Tekstid erinevates keeltes
    const texts = {
        ee: (
            <div className="arcade-description mb-4">
                <h2 style={{ textAlign: 'center', color: '#542010', fontFamily: 'Courier New, sans-serif', fontWeight: 'bold' }}>
                    Tere tulemast Halinga Restorani mänguaparaatide maailma!
                </h2>
                <p style={{ fontSize: '18px', color: '#000000', fontFamily: 'system-ui', lineHeight: '1.6', fontWeight: 'bold' }}>
                Kõik Eesti mänguaparaadid on nüüd  Halinga Restoranis, kus leidub nii unikaalseid kui ka klassikalisi mänge. Meie kogus on mitmeid haruldasi arcade, mida maailmas on vaid mõni eksemplar näiteks Lucky & Wild ja Nõukogude Liidust pärit mängu automaadid Snaiper , Hobune ,Lennuk , Torpeedorünnak , Gaseeritud vesi ja neil on oma ajalugu näiteks Snaiper ,Hobune, Lennuk ja UFO Catcher Kadrioru lõbustuspargist .Hydra, Pinball Whirlwind, Atari Road Riot 4 WD on Tallinki praamidest. Lisaks uhkele mänguaparaatide valikule on meil suur ja mitmekesine kollektsioon laste kiikesid Elektro-Mobiltechnik  nagu Smurf ,Mustang ,Nessy ,Sky Wolf ,Burger ,Phantasy Pony ,Whale ,Dozer ,Jumbo ,Donald Duck ,Multi Truck  .R.G.Mitchell nagu Jumbo , Space Rocket ,Candy ,Red Arrow  .
                </p>
       
            </div>
        ),
        en: (
            <div className="arcade-description mb-4">
                <h2 style={{ textAlign: 'center', color: '#542010', fontFamily: 'Courier New, sans-serif', fontWeight: 'bold' }}>
                    Welcome to the World of Arcade Machines at Halinga Restaurant!
                </h2>
                <p style={{ fontSize: '18px', color: '#000000', fontFamily: 'system-ui', lineHeight: '1.6', fontWeight: 'bold' }}>
                All Estonian arcade machines are now located at Halinga Restaurant, featuring both unique and classic games. Our collection includes several rare arcade machines, with only a few examples worldwide, such as Lucky & Wild and Soviet-era machines like Sniper, Horse, Airplane, Torpedo Attack, and Soda Water. These machines have their own history; for example, Sniper, Horse, Airplane, and UFO Catcher are from Kadriorg Amusement Park. Machines like Hydra, Pinball Whirlwind, and Atari Road Riot 4 WD come from Tallink ferries. In addition to our impressive selection of arcade machines, we have a large and varied collection of children’s rides from Elektro-Mobiltechnik, such as Smurf, Mustang, Nessy, Sky Wolf, Burger, Fantasy Pony, Whale, Dozer, Jumbo, Donald Duck, and Multi Truck. Our R.G. Mitchell collection includes rides like Jumbo, Space Rocket, Candy, and Red Arrow.
                </p>
         
            </div>
        ),
        ru: (
            <div className="arcade-description mb-4">
                <h2 style={{ textAlign: 'center', color: '#542010', fontFamily: 'Courier New, sans-serif', fontWeight: 'bold' }}>
                    Добро пожаловать в мир игровых автоматов в ресторане Халина!
                </h2>
                <p style={{ fontSize: '18px', color: '#000000', fontFamily: 'system-ui', lineHeight: '1.6', fontWeight: 'bold' }}>
                Все игровые автоматы Эстонии теперь находятся в ресторане Halinga, где представлены как уникальные, так и классические игры. У нас есть несколько редких игровых автоматов, которых в мире всего несколько экземпляров, например, Lucky & Wild и автоматы из Советского Союза, такие как Снайпер, Лошадь, Самолет, Торпедная атака и Газированная вода. Эти автоматы имеют свою историю — например, Снайпер, Лошадь, Самолет и UFO Catcher происходят из Кадриоргу. Автоматы Hydra, Pinball Whirlwind, Atari Road Riot 4 WD ранее находились на паромах Tallink. Кроме внушительного ассортимента игровых автоматов, мы также представляем большую и разнообразную коллекцию детских качалок от Elektro-Mobiltechnik: Смурф, Мустанг, Несси, Небесный Волк, Бургер, Фантазийный Пони, Кит, Дозер, Джамбо, Дональд Дак и Мульти Трак. От R.G. Mitchell у нас представлены такие качалки, как Джамбо, Космическая ракета, Кенди и Красная стрела.
                </p>
    
            </div>
        ),
    };

    // Keelevahetuse funktsioon
    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <div>
            {/* Keelevahetuse lipud */}
            <div className="language-flags">
                <img 
                    src="/images/flag-en.svg" 
                    alt="English" 
                    className={`flag-icon ${language === 'en' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                />
                <img 
                    src="/images/flag-ru.svg" 
                    alt="Russian" 
                    className={`flag-icon ${language === 'ru' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('ru')}
                />
                <img 
                    src="/images/flag-ee.svg"  
                    alt="Estonian" 
                    className={`flag-icon ${language === 'ee' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('ee')}
                />
            </div>

            {/* Arcade info tekst vastavalt valitud keelele */}
            {texts[language]}

            {/* Piltide rida */}
            <Row className="my-4">
                <Col sm={12} md={4}>
                    <img src="/images/8121.jpg" alt="Arcade Image 1" style={{ width: '100%', height: 'auto' }} />
                </Col>
             
                <Col sm={12} md={4}>
                    <img src="/images/8180.jpg" alt="Arcade Image 3" style={{ width: '100%', height: 'auto' }} />
                </Col>
              
            </Row>

            <Row className="my-4">
            <Col sm={12} md={4}>
                    <img src="/images/8135.jpg" alt="Arcade Image 2" style={{ width: '100%', height: 'auto' }} />
                </Col>

                <Col sm={12} md={4}>
                    <img src="/images/8143.jpg" alt="Arcade Image 3" style={{ width: '100%', height: 'auto' }} />
                </Col>
            </Row>

        </div>
    );
};

export default ArcadeScreen;
