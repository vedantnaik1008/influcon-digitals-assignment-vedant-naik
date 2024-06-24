import { useState } from 'react';

const useForm = () => {
    const [click, setClick] = useState(false);
    const [tab, setTab] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: 0,
        email: '',
        gender: '',
        dob: '',
        relocationDate: '',
        location: '',
        platform: ''
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    console.log(formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log(formData);
    };
    return {handleChange, handleSubmit, setClick, click, tab, setTab, setFormData, formData, submitted, setSubmitted};
};

export default useForm;
