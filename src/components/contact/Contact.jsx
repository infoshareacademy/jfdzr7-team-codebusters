import { useState } from "react";
import { ContactField } from "./ContactField";

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <>
            <h2>Any questions?<br /> Send the message!</h2>
            <form>
                <ContactField title={'Name'} type='text' value={name} setValue={setName} />
                <ContactField title={'Email'} type='email' value={email} setValue={setEmail} />
                <ContactField title={'Message'} type='text' value={message} setValue={setMessage} isMessage={true} />
                {/* <textarea /> */}
            </form>
        </>
    );
};