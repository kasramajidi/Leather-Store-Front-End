import { useRef } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    const topRef = useRef(null);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: "smooth" });
      };

    return (
        <div className="min-h-screen flex flex-col bg-[#fcfaf8]">
            <Header topRef={topRef} />
            <main className="flex-1 bg-[#fcfaf8]">
                <Outlet />
            </main>
            <Footer scrollToTop={scrollToTop} />
        </div>
    );
}