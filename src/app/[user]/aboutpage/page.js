
import React from 'react';

const DeveloperCard = ({ imgSrc, name, role }) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    marginBottom: '20px', 
    width: '200px' 
  }}>
    <img style={{ 
      width: '100px', 
      height: '100px', 
      borderRadius: '50%' 
    }} src={imgSrc} alt={name} />
    <h2 style={{ margin: '10px 0' }}>{name}</h2>
    <p style={{ margin: '0' }}>{role}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px', 
      backgroundColor: '#ffedd5', 
      fontFamily: 'Arial, sans-serif', 
      color: '#333' 
    }}>
        <bold style={{ 
        margin: '20px 0', 
        textAlign: 'center', 
        fontSize: '2.0em', 
        color: '#666' 
      }}>ABOUT US</bold>
      <p style={{ 
        margin: '20px 0', 
        textAlign: 'center', 
        fontSize: '1.2em', 
        color: '#666' 
      }}>
       Bokii and Co. is company dedicated to enhancing the dormitory experience at the University of San Carlos (USC).
        Our mission is to provide high-quality living spaces that foster a sense of community and belonging. 
        We understand that a dorm room is not just a place to sleep, but a reflection of the student's personality
         and lifestyle. That's why we offer a range of features and amenities to help students personalize their living
      spaces and create a comfortable, inviting environment. As USC's dorm management system, we are dedicated 
         to providing a hassle-free experience for both students and staff. Our system is designed to streamline the
          management of dormitories, making it easier to handle tasks such as room assignments, maintenance requests,
       and emergency situations. We are proud to be a part of the USC community and are dedicated to ensuring that
        our services meet the needs of our students.We strive to provide the best possible living conditions and a
         high-quality dorm management system to enhance the overall student experience at USC. <br/><br/>Dedicated developers who are 
         passionate in making the dorm management system.
      </p>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%' 
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          width: '50%' 
        }}>
          <DeveloperCard imgSrc="/aboutpagePhotos/developer1.jpg" name="Ian Joseph Sobrecaray" role="Backend Developer" />
          <DeveloperCard imgSrc="/aboutpagePhotos/developer2.jpg" name="Earion Icer" role="Backend Developer" />
          <DeveloperCard imgSrc="/aboutpagePhotos/developer3.jpg" name="Jiwoo Jung" role="Backend Developer" />
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          width: '50%' 
        }}>
          <DeveloperCard imgSrc="/aboutpagePhotos/developer4.jpg" name="Henrick Lian Filoteo" role="Backend Developer" />
          <DeveloperCard imgSrc="/aboutpagePhotos/developer5.jpg" name="Ma. Keisha Atiga" role="Frontend Developer" />
          <DeveloperCard imgSrc="/aboutpagePhotos/developer6.jpg" name="Hailey Jaranilla" role="Frontend Developer" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

