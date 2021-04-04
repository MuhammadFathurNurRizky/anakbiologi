import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';

function Belajar() {
    return (
        <React.Fragment>
            <Head>
                <title>Belajar Biologi - anakbiologi.com</title>
                <meta
                    name="description"
                    content="Laman Belajar Blog anakbiologi, Blog Biologi Terbesar Di Seluruh Indonesia. Blog anakbiologi akan menjelajahi semua bagian di dunia biologi."
                />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                />
                <link rel="canonical" href="https://anakbiologi.com/belajar" />
                <meta
                    name="Keywords"
                    content="belajar biologi, belajar sel, belajar jaringan, belajar organ, belajar sistem organ, belajar organisme, biologi, belajar virus, virus, blog biologi, referensi biologi, biologi molekular, biologi sel, biologi 2020"
                />
                <meta property="og:title" content="Belajar Biologi 100% Gratis" />
                <meta property="og:url" content="https://anakbiologi.com/belajar" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dxuvn93uw/image/upload/v1609025870/biologi2_mkclja.png"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="Blog anakbiologi membahas hampir semua bab di bidang biologi, mulai dari sel, jaringan, organ, sistem-organ, dan organisme"
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
                    content="https://res.cloudinary.com/dxuvn93uw/image/upload/v1609025870/biologi2_mkclja.png"
                />
            </Head>
            <Header />
            <section className="container bg-blue-800 md:text-2xl xl:text-5xl min-w-full dark:bg-black dark:text-white">
                <div className="object-contain">
                    <img
                        className="object-cover"
                        src="https://res.cloudinary.com/dxuvn93uw/image/upload/v1609025870/biologi2_mkclja.png"
                        alt="biologi2"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col flex-wrap font-serif text-white md:mt-5 xl:mt-10">
                    <h1 className="text-center text-xl font-bold m-2.5 md:text-3xl xl:text-6xl">
                        Unit Satu - Kimia Kehidupan
                    </h1>
                    <p>1. Kimia Kehidupan</p>
                    <p>2. Air Dan Kecocokan Lingkungan Bagi Kehidupan</p>
                    <p>3. Karbon Dan Keanekaragaman Molekular Kehidupan</p>
                    <p>4. Struktur Dan Fungsi Molekul Biologis Berukuran Besar</p>
                    <button className="focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 m-3.5 p-2 rounded-full text-white animate-bounce md:mt-5 md:p-3 xl:mt-10">
                        <Link href="/belajar/kimia-kehidupan">
                            <a>Belajar Sekarang</a>
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col flex-wrap font-serif text-white">
                    <h1 className="text-center text-xl font-bold m-2.5 md:text-3xl xl:text-6xl xl:mt-10">
                        Unit Dua - Sel
                    </h1>
                    <p>5. Menjelajahi Sel</p>
                    <p>6. Struktur Dan Fungsi Membran</p>
                    <p>7. Pengantar Metabolisme</p>
                    <p>8. Respirasi Seluler: Memanen Energi Kimia</p>
                    <p>9. Fotosintesis</p>
                    <p>10. Komunikasi Sel</p>
                    <p>11. Siklus Sel</p>
                    <button className="focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 m-3.5 p-2 rounded-full text-white animate-bounce md:mt-5 md:p-3 xl:mt-10">
                        <Link href="/belajar/sel">
                            <a>Belajar Sekarang</a>
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col flex-wrap font-serif text-white xl:mt-10">
                    <h1 className="text-center text-xl font-bold m-2.5 md:text-3xl xl:text-6xl">
                        Unit Tiga - Genetika
                    </h1>
                    <p>12. Meiosis Dan Siklus Hidup Seksual</p>
                    <p>13. Mendel Dan Gagasan Tentang Gen</p>
                    <p>14. Dasar Kromosomal Pewarisan-Sifat</p>
                    <p>15. Dasar Molekular Pewarisan-Sifat</p>
                    <p>16. Dari Gen Ke Protein</p>
                    <p>17. Regulasi Ekspresi Gen</p>
                    <p>18. Virus</p>
                    <p>19. Bioteknologi</p>
                    <p>20. Genom Dan Evolusinya</p>
                    <button className="focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 m-3.5 p-2 rounded-full text-white animate-bounce md:mt-5 md:p-3 xl:mt-10">
                        <Link href="/belajar/genetika">
                            <a>Belajar Sekarang</a>
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col flex-wrap font-serif text-white xl:mt-10">
                    <h1 className="text-center text-xl font-bold m-2.5 md:text-3xl xl:text-6xl">
                        Unit Empat - Mekanisme Evolusi
                    </h1>
                    <p>21. Penurunan Dengan Modifikasi: Pandangan Darwin Tentang Kehidupan</p>
                    <p>22. Evolusi Populasi</p>
                    <p>23. Asal-Usul Spesies</p>
                    <p>24. Sejarah Kehidupan Di Bumi</p>
                    <button className="focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 m-3.5 p-2 rounded-full text-white animate-bounce md:mt-5 md:p-3 xl:mt-10">
                        <Link href="/belajar/mekanisme-evolusi">
                            <a>Belajar Sekarang</a>
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col flex-wrap font-serif text-white xl:mt-10">
                    <h1 className="text-center text-xl font-bold m-2.5 md:text-3xl xl:text-6xl">
                        Unit Lima - Sejarah Evolusi Keanekaragaman Biologi
                    </h1>
                    <p>25. Filogeni Dan Pohon Kehidupan</p>
                    <p>26. Bakteri Dan Archea</p>
                    <p>27. Protista</p>
                    <p>28. Keanekaragaman Tumbuhan 1: Bagaimana Tumbuhan Mengolonisasi Daratan</p>
                    <p>29. Keanekaragaman Tumbuhan 2: Evolusi Tumbuhan Berbiji</p>
                    <p>30. Fungi</p>
                    <p>31. Pengantar Keanekaragaman Hewan</p>
                    <p>32. Invertebrata</p>
                    <p>33. Vertabrata</p>
                    <button className="focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 m-3.5 p-2 rounded-full text-white animate-bounce md:mt-5 md:p-3 xl:mt-10">
                        <Link href="/belajar/sejarah-evolusi-keanekaragaman-biologi">
                            <a>Belajar Sekarang</a>
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col flex-wrap font-serif text-white xl:mt-10">
                    <h1 className="text-center text-xl font-bold m-2.5 md:text-3xl xl:text-6xl">
                        Unit Enam - Bentuk Dan Fungsi Tumbuhan
                    </h1>
                    <p>34. Struktur, Pertumbuhan, Dan Perkembangan Tumbuhan</p>
                    <p>35. Pemerolehan Sumber Daya Dan Transpor Pada Tumbuhan Vaskular</p>
                    <p>36. Tanah Dan Nutrisi Tumbuhan</p>
                    <p>37. Reproduksi Angiospermae Dan Bioteknologi</p>
                    <p>38. Respons Tumbuhan Terhadap Sinyal-Sinyal Internal Dan Eksternal</p>
                    <button className="focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 m-3.5 p-2 rounded-full text-white animate-bounce md:mt-5 md:p-3 xl:mt-10">
                        <Link href="/belajar/bentuk-dan-fungsi-tumbuhan">
                            <a>Belajar Sekarang</a>
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col flex-wrap font-serif text-white xl:mt-10">
                    <h1 className="text-center text-xl font-bold m-2.5 md:text-3xl xl:text-6xl">
                        Unit Tujuh - Bentuk Dan Fungsi Hewan
                    </h1>
                    <p>39. Prinsip Dasar Dari Bentuk Dan Fungsi Hewan</p>
                    <p>40. Nutrisi Hewan</p>
                    <p>41. Sirkulasi Dan Pertukaran Gas</p>
                    <p>42. Sistem Kekebalan Tubuh</p>
                    <p>43. Osmoregulasi Dan Ekskresi</p>
                    <p>44. Hormon Dan Sistem Endokkrin</p>
                    <p>45. Reproduksi Hewan</p>
                    <p>46. Perkembangan Hewan</p>
                    <p>47. Neuron, Sinapsis, Dan Persinyalan</p>
                    <p>48. Sistem Saraf</p>
                    <p>49. Mekanisme Sensoris Dan Motorik</p>
                    <p>50. Perilaku Hewan</p>
                    <button className="focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 m-3.5 p-2 rounded-full text-white animate-bounce md:mt-5 md:p-3 xl:mt-10">
                        <Link href="/belajar/bentuk-dan-fungsi-hewan">
                            <a>Belajar Sekarang</a>
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col flex-wrap font-serif text-white xl:mt-10">
                    <h1 className="text-center text-xl font-bold m-2.5 md:text-3xl xl:text-6xl">
                        Unit Delapan - Ekologi
                    </h1>
                    <p>51. Pengantar Ekologi Dan Biosfer</p>
                    <p>52. Ekologi Populasi</p>
                    <p>53. Ekologi Komunitas</p>
                    <p>54. Ekosistem</p>
                    <p>55. Biologi Konservasi dan Ekologi Restorasi</p>
                    <button className="focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 m-3.5 p-2 rounded-full text-white animate-bounce md:mt-5 md:p-3 xl:mt-10">
                        <Link href="/belajar/ekologi">
                            <a>Belajar Sekarang</a>
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col flex-wrap font-serif text-white xl:mt-10">
                    <h1 className="text-center text-xl font-bold m-2.5 md:text-3xl xl:text-6xl">
                        Glosarium Biologi
                    </h1>
                    <p className="text-center md:text-2xl xl:text-5xl">
                        Atas permintaan Anak Biologi karena kesusahan dengan istilah khusus dalam
                        ilmu biologi. Kami membuat glosarium biologi lengkap untuk Anak Biologi agar
                        lebih mudah memahami istilah khusus dalam ilmu biologi.
                    </p>
                    <button className="focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 m-3.5 p-2 rounded-full text-white animate-bounce md:mt-5 md:p-3 xl:mt-10">
                        <Link href="/glosarium">
                            <a>Lihat Sekarang</a>
                        </Link>
                    </button>
                </div>
                <div className="container mt-2 font-serif flex flex-col flex-wrap md:text-2xl xl:mt-10 min-w-full">
                    <h1 className="text-white text-xl text-center font-bold md:text-4xl xl:text-6xl">
                        Anak Biologi Chat
                    </h1>
                    <p className="text-white text-center mt-1 md:text-2xl xl:text-5xl">
                        Hi Anak Biologi, Ada yang baru loh!. Mau tau apa yang baru. Jadi website
                        Anak Biologi juga punya aplikasi chat khusus loh!, mau tau aplikasi chat-nya
                        seperti apa?. Yuk Coba Sekarang
                    </p>
                    <button className="focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 m-3.5 p-2 rounded-full text-white animate-bounce md:mt-5 md:p-3 xl:text-5xl xl:mt-10">
                        <a href="https://anakbiologi-chat.herokuapp.com/">Coba Sekarang</a>
                    </button>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Belajar;
