import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fcfaf8]">
            <Header />
            <main className="flex-1 bg-[#fcfaf8]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}