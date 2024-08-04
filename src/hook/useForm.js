import { useState } from 'react';
import useHttp from './useHttp';

const useForm = () => {
    //
    const [click, setClick] = useState(false);
    const [tab, setTab] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);
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
    const { setData } = useHttp();
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleLeftArrow = () => {
        if(tab === 5 && submitted === true){
            setSubmitted(false)
            setTab(4)
        }else{
            setTab(tab - 1);
        }
        console.log(submitted);
    };
    console.log(formData);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const tab1Disabled =
        formData.name.length < 3 ||
        formData.phone.toString().length < 10 ||
        !emailRegex.test(formData.email);

    const tab2Disabled = formData.gender.length === '' || !formData.dob;

    const tab3Disabled =
        !formData.relocationDate || formData.location.length < 3;

    const tab4Disabled = formData.platform.length < 3;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTab(5)
        const data = new FormData()
        data.append('id', formData.email);
        data.append('name', formData.name)
        data.append('phone', formData.phone)
        data.append('email', formData.email)
        data.append('gender', formData.gender)
        data.append('dob', formData.dob)
        data.append('relocationDate', formData.relocationDate)
        data.append('location', formData.location)
        data.append('platform', formData.platform)
        // const newData = {
        //     id: data.has('email'),
        //     ...data
        // };
        setData(data);
        if(submitted === true){
            setFormData({
                name: '',
                phone: 0,
                email: '',
                gender: '',
                dob: '',
                relocationDate: '',
                location: '',
                platform: ''
            });
        }
        console.log(formData,'data', data);
        setShow(true);
        setSubmitted(false)
        // console.log(fetchData);
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
        show,
        submitted,
        setSubmitted,
        tab1Disabled,
        tab2Disabled,
        tab3Disabled,
        tab4Disabled,
        handleLeftArrow
    };
};

export default useForm;
