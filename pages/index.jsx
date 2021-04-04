/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        Aos.init({ offset: 300, duration: 1000 });
    }, []);
    return (
        <React.Fragment>
            <Head>
                <title>Belajar Biologi Dasar - anakbiologi.com</title>
                <meta
                    name="description"
                    content="Blog biologi terbesar di seluruh indonesia, Yuk belajar di blog anakbiologi sekarang dijamin 100% gratis. Blog anakbiologi juga punya chat khusus loh!"
                />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                />
                <link rel="canonical" href="https://anakbiologi.com" />
                <meta
                    name="Keywords"
                    content="belajar biologi dasar, belajar sel, belajar jaringan, belajar organ, belajar sistem organ, belajar organisme, biologi, blog biologi lengkap, blog biologi terbesar di indonesia, belajar virus, virus, blog biologi, referensi biologi, biologi kelas 10, biologi molekular, biologi sel, belajar biologi sma, belajar biologi kelas 10, belajar biologi kelas 7"
                />
                <meta property="og:title" content="Belajar Biologi 100% Gratis" />
                <meta property="og:url" content="https://anakbiologi.com" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dxuvn93uw/image/upload/v1611657240/hero_card_v0o7xd.png"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="Belajar Biologi Secara Online Dan Gratis Hanya di anakbiologi.com, Materinya Lengkap Loh!"
                />
                <meta property="og:locale" content="id_ID" />
                <meta property="og:site_name" content="anakbiologi" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@anakbiologi" />
                <meta name="twitter:title" content="Belajar Biologi Lengkap 100% Gratis" />
                <meta
                    name="twitter:description"
                    content="Ayo Belajar Biologi Sekarang Di anakbiologi.com."
                />
                <meta name="twitter:creator" content="@M Fathur" />
                <meta
                    name="twitter:image"
                    content="https://res.cloudinary.com/dxuvn93uw/image/upload/v1611657240/hero_card_v0o7xd.png"
                />
            </Head>
            <section className="overflow-hidden sm:text-2xl xl:text-4xl">
                <Header />
                <div className="container relative min-w-full md:overflow-hidden">
                    <video
                        className="sm:h-auto h-96 w-screen object-cover opacity-80"
                        src="/DNA New.mp4"
                        muted
                        loop
                        autoPlay
                    />
                    <div className="absolute top-0 w-screen h-full bg-blue-600 left-0 overlay"></div>
                </div>
                <div className="absolute top-0 left-0 text-white sm:mt-14 xl:mt-44">
                    <h1 className="font-bold mt-36 text-center text-2xl sm:text-4xl xl:text-6xl">
                        Selamat Datang Anak Biologi
                    </h1>{' '}
                    <p className="mt-1 text-center text-lg sm:text-3xl xl:text-5xl">
                        Website Anak Biologi adalah sebuah website/blog yang berisi pembelajaran
                        biologi secara online dan dijamin{' '}
                        <h1 className="font-bold text-2xl sm:text-4xl xl:text-6xl">100% Gratis!</h1>
                    </p>
                    <Link href="/belajar">
                        <a>
                            <button className="cursor-pointer focus:outline-none bg-blue-700 rounded-full animate-bounce mt-5 ml-28 px-2 py-3 text-xl sm:text-4xl sm:px-5 sm:py-4 sm:ml-56 sm:mt-10 xl:text-6xl xl:ml-96">
                                Belajar Sekarang
                            </button>
                        </a>
                    </Link>
                    <div className="animate-bounce w-5 h-5 mx-auto mt-12 md:w-10 md:h-10 md:mt-3 xl:w-20 xl:h-20 xl:mt-24">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
                <div className="xl:max-w-5xl xl:mx-auto">
                    <h3 className="text-center text-lg border-b-4 border-indigo-600 font-mono mt-10 text-blue-60 sm:text-4xl sm:mt-20 xl:text-5xl xl:mt-32">
                        Kenapa Belajar Di anakbiologi.com?
                    </h3>
                </div>
                <div
                    data-aos="fade-left"
                    className="mt-10 xl:flex xl:justify-center xl:items-center xl:max-w-8xl xl:mx-auto relative sm:mt-20 xl:mt-32">
                    <img
                        className="object-cover"
                        src="https://res.cloudinary.com/dxuvn93uw/image/upload/v1609025846/background_ybmcfz.jpg"
                        alt="Biologi Lengkap"
                        loading="eager"
                    />
                    <p className="absolute top-48 left-0 text-white font-bold bg-blue-800 text-center text-lg sm:text-4xl sm:mt-48 xl:hidden">
                        Blog Pertama Di Indonesia Yang Membahas Semua Topik Di Bidang Biologi
                    </p>
                    <p className="font-mono mt-2 text-center">
                        Blog anakbiologi.com Menyediakan Pembelajaran Lengkap Tentang Biologi, Mulai
                        Dari Sel, Jaringan, Organ, Sistem-Organ, Sampai Organisme. Organismenya pun
                        Bermacam-macam Ada Organisme Hewan, Tumbuhan, dan Manusia!
                    </p>
                </div>
                <div
                    data-aos="fade-right"
                    className="mt-10 xl:flex xl:flex-row-reverse xl:justify-center xl:items-center relative sm:mt-40 xl:mt-32 xl:max-w-8xl xl:mx-auto">
                    <img
                        className="object-cover"
                        src="https://res.cloudinary.com/dxuvn93uw/image/upload/v1609025859/biologi_rcdlny.jpg"
                        alt="Menganalisa"
                        loading="eager"
                    />
                    <h3 className="absolute font-mono top-44 left-0 text-white font-bold bg-blue-800 text-lg text-center sm:text-4xl sm:mt-48 xl:text-6xl xl:mt-96 xl:hidden">
                        Belajar Menganalisa Segala Objek-objek Biologi
                    </h3>
                    <p className="text-center font-mono">
                        Blog anakbiologi.com Juga Menyediakan Pembelajaran Tentang Menganalisa,
                        Mulai Dari Analisa Sel, Jaringan, Organ, Sistem-Organ, sampai Organisme.
                        Menganalisa Tersedia Dalam Semua Bab Dan Subbab
                    </p>
                </div>
                <div
                    data-aos="fade-left"
                    className="xl:flex xl:items-center xl:justify-center mt-10 relative sm:mt-40 xl:mt-32 xl:max-w-8xl xl:mx-auto">
                    <img
                        className="object-cover"
                        src="https://res.cloudinary.com/dxuvn93uw/image/upload/v1610492098/3792558_1_-min_odhwww.jpg"
                        alt="Team"
                        loading="eager"
                    />
                    <h3 className="absolute font-mono top-38 left-0 text-white font-bold bg-blue-800 text-lg text-center sm:text-4xl sm:top-92 xl:text-6xl xl:top-80 xl:hidden">
                        Berkomunikasi Dengan Anak Biologi Yang Lain Dan Bekerja Sama
                    </h3>
                    <p className="font-mono mt-16 text-center sm:mt-20 xl:mt-0">
                        anakbiologi.com Sekarang Telah Menyediakan Aplikasi{' '}
                        <a
                            className="text-blue-500 hover:text-blue-900"
                            href="https://anakbiologi-chat.herokuapp.com/">
                            Chat
                        </a>{' '}
                        Khusus Dalam Web. Anda Bisa Berkomunikasi Dengan Anak Biologi Yang Lain Dan
                        Bekerja Sama Untuk Menyelesaikan Suatu Masalah Dalam Bidang Biologi.
                    </p>
                </div>
                <div
                    data-aos="fade-right"
                    className="xl:flex xl:items-center xl:flex-row-reverse xl:justify-center mt-10 relative sm:mt-40 xl:mt-32 xl:max-w-8xl xl:mx-auto">
                    <img
                        className="object-cover xl:h-80"
                        src="https://res.cloudinary.com/dxuvn93uw/image/upload/v1612513424/glosarium_ldb9dk.jpg"
                        alt="Glosarium Biologi"
                        loading="eager"
                    />
                    <h3 className="absolute font-mono top-44 left-0 text-white font-bold bg-blue-800 text-lg text-center sm:text-4xl sm:top-92 xl:hidden">
                        Bingung Dengan Kata-Kata Ilmiah?, Tenang anakbiologi.com Punya Glosarium
                    </h3>
                    <p className="font-mono mt-3 text-center sm:mt-18 xl:mt-0">
                        anakbiologi.com Sekarang Juga Telah Menyediakan{' '}
                        <Link href="/glosarium">
                            <a className="text-blue-500 hover:text-blue-900">
                                Glosarium Biologi Lengkap
                            </a>
                        </Link>{' '}
                        Agar Anak Biologi Tidak Lupa Dengan Kata-Kata Ilmiah Dalam Biologi. Kami
                        Membuat Ini Karena Permintaan Dari Para Anak Biologi Yang Kebingunggan
                        Dengan Istilah-Istilah Sulit Dalam Ilmu Biologi Ini.
                    </p>
                </div>
                <div className="bg-gray-100 font-mono mt-20">
                    <div className="xl:max-w-5xl xl:mx-auto">
                        <h3 className="text-center text-lg border-b-4 border-indigo-600 font-mono mt-10 text-blue-60 sm:text-4xl sm:mt-20 xl:text-5xl xl:mt-32">
                            Mau{' '}
                            <Link href="/belajar">
                                <a className="text-blue-500 hover:text-blue-900">Belajar</a>
                            </Link>{' '}
                            Apa Hari Ini?
                        </h3>
                    </div>
                    <div className="mt-10 xl:flex xl:justify-center xl:items-center xl:flex-wrap">
                        <div data-aos="fade-right" className="bg-white xl:w-1/2 md:mt-20">
                            <img
                                className="object-cover w-full"
                                src="https://res.cloudinary.com/dxuvn93uw/image/upload/v1612411117/card1_rkpebk.jpg"
                                alt="Atom"
                                loading="eager"
                            />
                            <h3 className="font-bold text-blue-500 md:text-4xl xl:text-6xl mt-5 underline text-center text-2xl hover:text-blue-900">
                                <Link href="/belajar/kimia-kehidupan">
                                    <a>Kimia Kehidupan</a>
                                </Link>
                            </h3>
                            <p className="mt-3 text-center">
                                Dalam Bab Pertama Anda Akan Mempelajari Tentang Kimia Kehidupan.
                                Tenang Pelajaran Tentang Kimia Kehidupan Ini Akan Berhubungan
                                Tentang Kimia Biologi Saja Kok, Bukan Kimia Murni. Jadi Tunggu
                                Apalagi! Kalian Bisa Menekan Judul Pada Kata Berwarna Biru Diatas
                                Agar Kalian Bisa Langsung Belajar.
                            </p>
                        </div>
                        <div data-aos="fade-left" className="bg-white mt-10 md:mt-20 xl:w-1/2">
                            <img
                                className="object-cover w-full"
                                src="https://res.cloudinary.com/dxuvn93uw/image/upload/v1612411640/card_2_triyna.jpg"
                                alt="Cell"
                                loading="eager"
                            />
                            <h3 className="font-bold text-blue-500 hover:text-blue-900 text-2xl mt-5 underline text-center md:text-4xl xl:text-6xl">
                                <Link href="/belajar/sel">
                                    <a>Sel</a>
                                </Link>
                            </h3>
                            <p className="mt-3 text-center">
                                Nah Setelah Kalian Belajar Tentang Kimia Yang Berhubungan Dengan
                                Biologi Atau Zat Kimia Apa Saja Yang Terkandung Dalam Makhluk Hidup.
                                Ini Saatnya Kita Untuk Menyelami Dunia Biologi Di Mulai Dari Unit
                                Terkecil Pembentuk Kehidupan, Yaitu Sel. Seperti Biasa Langsung Klik
                                Aja Judul Di Atas Ya.
                            </p>
                        </div>
                        <div data-aos="fade-right" className="bg-white mt-10 md:mt-20">
                            <img
                                className="object-cover w-full"
                                src="https://res.cloudinary.com/dxuvn93uw/image/upload/v1612409092/card_3_u8mzlx.jpg"
                                alt="Gen"
                                loading="eager"
                            />
                            <h3 className="font-bold text-blue-500 hover:text-blue-900 text-2xl mt-5 underline text-center md:text-4xl xl:text-6xl">
                                <Link href="/belajar/genetika">
                                    <a>Genetika</a>
                                </Link>
                            </h3>
                            <p className="mt-3 text-center">
                                Wow Selamat Anda Telah Menguasai Bab Sel. Tapi Kalian Pernah
                                Berpikir Tidak Unsur Apa Ya Yang Lebih Kecil Daripada Sel, Hmmmm.
                                Ternyata Ada Loh Anak Biologi, Yaitu Gen. Apalagi Itu Gen Ya?,
                                Kalian Penasaran Bukan. Di Klik Ya Judul Di Atas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="sm:text-2xl xl:text-4xl font-mono">
                <div className="text-white bg-gradient-to-r from-blue-300 to-green-300 mt-10 flex flex-col xl:flex-row xl:justify-between xl:items-center">
                    <div className="flex justify-center items-center">
                        <Link href="/">
                            <a>
                                <img
                                    className="h-16 ml-3.5 md:h-20 md:ml-7 xl:h-28 xl:ml-12"
                                    src="https://res.cloudinary.com/dxuvn93uw/image/upload/v1609025900/logo_mkyalm.png"
                                    alt="Logo"
                                    loading="lazy"
                                />
                            </a>
                        </Link>
                        <p className="my-auto">anakbiologi.com</p>
                    </div>
                    <div> &#169; 2021</div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Home;
