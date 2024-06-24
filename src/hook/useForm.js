import { useState } from 'react';
import useHttp from './useHttp';

const useForm = () => {
    //
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
    const { fetchData ,setData } = useHttp();
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    console.log(formData);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const tab1Disabled =
        formData.name.length < 3 ||
        formData.phone.toString().length < 10 || !emailRegex.test(formData.email);

    const tab2Disabled = formData.gender.length === '' || !formData.dob;

    const tab3Disabled =
        !formData.relocationDate || formData.location.length < 3;

    const tab4Disabled = formData.platform.length < 3;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        const newData = {
            id: fetchData.length + 1,
            ...formData
        };
        setData(newData);
        console.log(formData);
        console.log(fetchData);
    };
    return {
        handleChange,
        handleSubmit,
        setClick,
        click,
        tab,
        setTab,
        setFormData,
        formData,
        submitted,
        setSubmitted,
        tab1Disabled,
        tab2Disabled,
        tab3Disabled,
        tab4Disabled
    };
};

export default useForm;
