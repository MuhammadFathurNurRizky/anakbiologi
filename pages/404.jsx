import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

function Custom404() {
    return (
        <React.Fragment>
            <Head>
                <title>Segera Datang</title>
            </Head>
            <Header />
            <div className="container flex flex-col justify-center relative min-w-full">
                <img
                    className="object-contain mt-5 w-full"
                    src="https://res.cloudinary.com/dxuvn93uw/image/upload/v1609025818/404_siz7ok.jpg"
                    alt="404"
                    loading="lazy"
                />
                <p className="absolute font-bold text-xl text-center mb-40 md:text-3xl text-blue-800 md:mb-72 xl:text-5xl min-w-full">
                    Mohon Maaf Konten Ini Masih Dalam Proses Pembuatan
                </p>
                <p className="absolute font-bold text-xl text-center mt-80 md:text-3xl md:ml-8 md:mt-96 text-blue-800 xl:text-6xl min-w-full">
                    Silahkan Klik Gambar Logo Diatas Untuk Kembali
                </p>
            </div>
        </React.Fragment>
    );
}

export default Custom404;
