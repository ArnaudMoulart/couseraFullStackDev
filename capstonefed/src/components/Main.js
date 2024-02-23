import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import BookingConfirmation from "./BookingConfimation";
import Booking from "./Booking";



const Main = () => {

    const fetchAPI = function(date) {
        let result = [];
        for(let i = 17; i <= 23; i++) {
            for (let j = 0; j <= 1; j++) {
                if(j === 0) {
                    result.push(i + ':00');
                } else {
                    result.push(i + ':30');
                }
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }
    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }


    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/confirmed" element={<BookingConfirmation/> } />
            </Routes>
        </main>


    )
};

export default Main;