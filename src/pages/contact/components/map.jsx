import React from 'react';

export default function Map() {
    return (
        <div className="w-full h-[300px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.428307982574!2d51.38945077689171!3d35.69989897138854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3cdcd%3A0xf6b7daf0644ce3a8!2sIran%2C%20Tehran%2C%20Tehran%20Province!5e0!3m2!1sen!2s!4v1709912345678!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg "
            ></iframe>
        </div>
    );
}