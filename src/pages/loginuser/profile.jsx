  import React, { useState } from 'react';
  import '../../pages/loginuser/profile.css';

  const UserAuth = () => {
    const [isLogin, setIsLogin] = useState(true); // Выбранная вкладка (Log In или Create Account)
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      dateOfBirth: '',
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Пользователь авторизован
    const [userName, setUserName] = useState(''); // Имя пользователя для приветствия

    // Переключение между вкладками
    const handleTabSwitch = (isLoginTab) => {
      setIsLogin(isLoginTab);
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        dateOfBirth: '',
      });
    };

    // Обновление данных формы
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    // Отправка формы
    const handleSubmit = (e) => {
      e.preventDefault();
      if (isLogin) {
        console.log('Logging in:', formData);
        setUserName(formData.email); // Используем email как имя пользователя
      } else {
        console.log('Registering:', formData);
        setUserName(formData.firstName || 'User'); // Используем имя или дефолтное значение
      }
      setIsAuthenticated(true); // Устанавливаем состояние авторизованного пользователя
    };

    if (isAuthenticated) {
      // Страница приветствия для авторизованного пользователя
      return (
        
        <div className="main-profile">
          <div className="user-greeting">
            <img src="/profile-icon.svg" alt="User Icon" className="user-icon" />
            <h2>
              Hello, <span>{userName}</span>, welcome back!
            </h2>
          </div>
        </div>
      );
    }

    return (
      <div className="main-profile">
        <div className="img-cont">
          <img src="/UPDATE1.svg" alt="Logo" />
        </div>

        <div className="auth-container">
          <div className="auth-tabs">
            <button
              className={`tab-button ${!isLogin ? 'active' : ''}`}
              onClick={() => handleTabSwitch(false)}
            >
              Create account
            </button>
            <div className="divider"></div>
            <button
              className={`tab-button ${isLogin ? 'active' : ''}`}
              onClick={() => handleTabSwitch(true)}
            >
              Log in
            </button>
          </div>
          <hr className="horizontal-line" />
          <form className="auth-form" onSubmit={handleSubmit}>
    {!isLogin && (
      <>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label>Date of Birth</label>
          <div className="date-of-birth">
            <select className='day' name="day" onChange={handleInputChange} required>
              <option value="">DD</option>
              {[...Array(31)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className='month' name="month" onChange={handleInputChange} required>
              <option value="">MM</option>
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(
                (month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                )
              )}
            </select>
            <select className='year'  name="year" onChange={handleInputChange} required>
              <option value="">YYYY</option>
              {[...Array(100)].map((_, i) => (
                <option key={i} value={2025 - i}>
                  {2025 - i}
                </option>
              ))}
            </select>
          </div>
        </div>
      </>
    )}
    {isLogin && (
      <>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
      </>
    )}

    <button type="submit" className="submit-button">
      {isLogin ? 'LOG IN' : 'Create Account'}
    </button>
  </form>
          {isLogin && (
            <a href="/" className="forgot-password">
              Forgot password?
            </a>
          )}
        </div>
      </div>
    );
  };

  export default UserAuth;