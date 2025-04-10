import React, { useState } from "react";
import { Shield, Home, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./LoginPage.css";
import GroupPhoto from '../../assets/LoginPage.jpg'

function LoginPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await axios.post(
                'http://localhost:4000/api/auth/login',
                formData
            );

            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            setTimeout(() => {
                switch (user.role.toLowerCase()) {
                    case 'admin':
                        navigate("/admin-dashboard");
                        break;
                    case 'teacher':
                        navigate("/teacher");
                        break;
                    case 'parent':
                        navigate("/parent");
                        break;
                    case 'accountant':
                        navigate("/accountant");
                        break;
                    default:
                        navigate("/");
                }
            }, 0);
        } catch (err) {
            const errorMessage = err.response?.data?.message ||
                'Login failed. Please try again.';
            setError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="login-container">
            {/* Left Section */}
            <div className="left-section">
                <div className="title-container">
                    {/* <img src={Logo} alt="SGU Logo" className="logo" /> */}
                    <div className="title-text">
                        <h1 className="heading-1">Welcome to</h1>
                        <h2 className="heading-2">CampusConnect Portal</h2>
                    </div>
                </div>
                <div className="illustration-container">
                    <img src={GroupPhoto} alt="Login illustration" className="LoginPage-Img"/>
                </div>
            </div>

            {/* Right Section */}
            <div className="right-section">
                <Link to="/" className="back-home">
                    <Home size={20} />
                    <span>Back to Home</span>
                </Link>
                <div className="login-box">
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-group">
                            <h3 className="login-text">Login</h3>
                            {error && <div className="error-message">{error}</div>}

                            <label htmlFor="email" className="input-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input-field"
                                placeholder="example@plasmid.in"
                                required
                                disabled={isSubmitting}
                            />

                            <label htmlFor="password" className="input-label">Password</label>
                            <div className="password-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="•••••"
                                    required
                                    disabled={isSubmitting}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-toggle"
                                    disabled={isSubmitting}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="login-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    Logging in...
                                </>
                            ) : (
                                'Login'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;