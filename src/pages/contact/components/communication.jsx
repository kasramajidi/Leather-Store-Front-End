import React from 'react';
import SectionTitle from '../../../components/shared/SectionTitle';
import {FaPhone} from '@react-icons/all-files/fa/FaPhone';
import {FaEnvelope} from '@react-icons/all-files/fa/FaEnvelope';
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt';
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram';
import {FaTelegram} from '@react-icons/all-files/fa/FaTelegram';
import {FaWhatsapp} from '@react-icons/all-files/fa/FaWhatsapp';
import {FaShareAlt} from '@react-icons/all-files/fa/FaShareAlt';

const contactDetails = [
    {title: 'تلفن', content: ['021-123455', '0912-12345'], icon: <FaPhone className="text-gray-500"/>},
    {title: 'ایمیل', content: 'info@gmail.com', icon: <FaEnvelope className="text-gray-500"/>},
    {
        title: 'شبکه‌های اجتماعی',
        content: [
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#795444] transition-colors">
                <FaInstagram/>
            </a>,
            <a href="https://t.me" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#795444] transition-colors">
                <FaTelegram/>
            </a>,
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#795444] transition-colors">
                <FaWhatsapp/>
            </a>
        ],
        icon: <FaShareAlt className="text-gray-500"/>
    },
    {
        title: 'آدرس',
        content: 'یزد - شهر خوبان - خیابان اول - کوچه طراحان سایت - پلاک 1 - واحد 2',
        icon: <FaMapMarkerAlt className="text-gray-500"/>
    },
];

export default function Communication() {
    return (
        <section className={'space-y-6 mt-7 md:mt-0'}>
            <SectionTitle highlightText="فروشگاه چرم">
                راه های ارتباط با فروشگاه چرم ما:
            </SectionTitle>
            <div className={'space-y-3'}>
                {contactDetails.map((detail, index) => (
                    <div key={index} className="flex items-center gap-x-4">
                        <div className="bg-white p-2 sm:p-3 rounded-full">
                            {detail.icon}
                        </div>
                        <span className="text-black text-sm sm:text-base md:text-lg">{detail.title}:</span>
                        <div className="flex gap-x-4 text-gray-600 text-xs sm:text-sm md:text-base">
                            {Array.isArray(detail.content) ? (
                                detail.content.map((item, i) => <span key={i}>{item}</span>)
                            ) : (
                                <span>{detail.content}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}