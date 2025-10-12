import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';  // Importige Bootstrap Spinner ja Alert

const PartyScreen = () => {
  const { id } = useParams();

  // Keele valik (default on "ee" - eesti keel)
  const [language, setLanguage] = useState('ee');

  // Keele vahetamise funktsioonid
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Menüü sektsioonide tekstide kaardistamine vastavalt keelele
  const menuTexts = {
    
    ee: {
      sections: [
        {
          title: '',
          content: (
            <div>
              <img 
                src="/images/5552.jpg" 
                alt="Grupi pilt" 
                style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto 10px auto' }}  
              />   
              
            
            </div>
            
          ),
        },

        {
          title: '',
          content: (
            <p style={{ fontSize: '16px', color: '#000', marginTop: '20px' }}>
            
            </p>
          ),
        }
      ],
      pizzaOrder: (
        <div className="pizza-order">
        
        </div>
      )
    },
    en: {
      sections: [
        {
          title: '',
          content: (
            <div>
              <img 
                src="/images/5550.jpg" 
                alt="Grupi pilt" 
                style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto 10px auto' }} 
              />

              <p>
              
                <br />
              </p>
            </div>
          ),
        },
   

        {
          title: '',
          content: (
            <p style={{ fontSize: '16px', color: '#000', marginTop: '20px' }}>
             
            </p>
          ),
        }
      ],
      pizzaOrder: (
        <div className="pizza-order">
   
        </div>
      )
    },
    ru: {
      sections: [
        {
          title: '',
          content: (
            <div>
              <img 
                src="/images/5551.jpg" 
                alt="Grupi pilt" 
                style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto 10px auto' }} 
              />

              <p>
              
                <br />
              </p>
            </div>
          ),
        },
        
        {
          title: '',
          content: (
            <p style={{ fontSize: '16px', color: '#000', marginTop: '20px' }}>
            </p>
          ),
        }
      ],
    
    },
  };

  return (
    <div>
    {/* Header Section */}
    <header className="header">
      <div className="language-buttons">
        <img 
            src="/images/flag-en.svg" 
            alt="English" 
            className={`flag-icon ${language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
        />
        <img 
            src="/images/flag-ru.svg" 
            alt="Russian" 
            className={`flag-icon ${language === 'ru' ? 'active' : ''}`}
            onClick={() => changeLanguage('ru')}
        />
        <img 
            src="/images/flag-ee.svg" 
            alt="Estonian" 
            className={`flag-icon ${language === 'ee' ? 'active' : ''}`}
            onClick={() => changeLanguage('ee')}
        />
      </div>
    </header>

   

      {/* Pealkiri ja teksti sisu vastavalt valitud keelele */}
      {menuTexts[language].sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          {section.content}
        </div>
      ))}

     
    </div>
  );
};

export default PartyScreen;
