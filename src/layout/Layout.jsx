import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-1 bg-white">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}