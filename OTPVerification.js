import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "firebaseConfig";

const OTPVerification = ({ phoneNumber, onVerifySuccess }) => {
    const [otp, setOtp] = useState("");
    const [verificationId, setVerificationId] = useState(null);
    const [error, setError] = useState("");

    const sendOTP = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", { size: "invisible" });
            const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
            setVerificationId(confirmation.verificationId);
        } catch (error) {
            setError("Failed to send OTP.");
        }
    };

    const verifyOTP = async () => {
        try {
            const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
            await auth.signInWithCredential(credential);
            onVerifySuccess();
        } catch (error) {
            setError("Invalid OTP.");
        }
    };

    return (
        <div className="otp-container">
            <h2>Enter OTP</h2>
            <input type="text" placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
            <button onClick={verifyOTP}>Verify</button>
            {error && <p className="error">{error}</p>}
            <div id="recaptcha-container"></div>
        </div>
    );
};

export default OTPVerification;
