import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                        </div>

                        <div>
                            <label htmlFor="book-time">Choose Time</label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a timeslot</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                                </select>
{/*                             <input id="book-time" value={time} onChange={(e) => handleChange(e.target.value)}
                            type="time" required/> */}
                        </div>

                        <div>
                            <label htmlFor="book-guests">Number of guests</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="book-occasion">Number of guests</label>
                            <select id="book-occasion" key={occasion} value={occasion}  onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                            </select>

                            <div className="btnReceive">
                                <input aria-label="On Click" type="submit" value={"make a reservation"}/>
                            </div>
    
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
};

export default BookingForm;

