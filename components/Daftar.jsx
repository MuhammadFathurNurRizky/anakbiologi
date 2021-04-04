import React from 'react';
import Link from 'next/link';

function Daftar() {
    return (
        <React.Fragment>
            <div className="text-center bg-gray-200 xl:top-full xl:rounded-lg xl:shadow-lg xl:w-1/4 xl:absolute xl:left-0">
                <h1 className="text-xl font-bold mt-5 md:text-3xl">Daftar Materi Biologi</h1>
                <Link href="/belajar/kimia-kehidupan">
                    <a>
                        <h3 className="text-blue-800 focus:text-blue-500 focus:no-underline underline mt-3 text-xl md:text-2xl md:mt-8">
                            Kimia Kehidupan
                        </h3>
                    </a>
                </Link>
                <Link href="/belajar/kimia-kehidupan/air-dan-kecocokan-lingkungan-bagi-kehidupan">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">
                            1. Air Dan Kecocokan Lingkungan Bagi Kehidupan
                        </p>
                    </a>
                </Link>
                <Link href="/belajar/kimia-kehidupan/karbon-dan-keanekaragaman-molekular-kehidupan">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">
                            2. Karbon Dan Keanekaragaman Molekular Kehidupan
                        </p>
                    </a>
                </Link>
                <Link href="/belajar/kimia-kehidupan/struktur-dan-fungsi-molekul-biologis-berukuran-besar">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">
                            3. Struktur Dan Fungsi Molekul Biologis Berukuran Besar
                        </p>
                    </a>
                </Link>
                <Link href="/belajar/sel">
                    <a>
                        <h3 className="text-blue-800 focus:text-blue-500 focus:no-underline underline mt-3 text-xl md:text-2xl">
                            Sel
                        </h3>
                    </a>
                </Link>
                <Link href="/belajar/sel/struktur-dan-fungsi-membran">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">
                            1. Struktur Dan Fungsi Membran
                        </p>
                    </a>
                </Link>
                <Link href="/belajar/sel/pengantar-metabolisme">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">
                            2. Pengantar Metabolisme
                        </p>
                    </a>
                </Link>
                <Link href="/belajar/sel/respirasi-selular">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">
                            3. Respirasi Selular: Memanen Energi Kimia
                        </p>
                    </a>
                </Link>
                <Link href="/belajar/sel/fotosintesis">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">4. Fotosintesis</p>
                    </a>
                </Link>
                <Link href="/belajar/sel/komunikasi-sel">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">5. Komunikasi Sel</p>
                    </a>
                </Link>
                <Link href="/belajar/sel/siklus-sel">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">6. Siklus sel</p>
                    </a>
                </Link>
                <Link href="/belajar/genetika">
                    <a>
                        <h3 className="text-blue-800 focus:text-blue-500 focus:no-underline underline mt-3 text-xl md:text-2xl">
                            Genetika
                        </h3>
                    </a>
                </Link>
                <Link href="/belajar/genetika/medel-dan-gagasan-tentang-gen">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">
                            1. Mendel Dan Gagasan Tentang Gen
                        </p>
                    </a>
                </Link>
                <Link href="/belajar/genetika/dasar-kromosomal-pewarisan-sifat">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">
                            2. Dasar Kromosomal Pewarisan Sifat
                        </p>
                    </a>
                </Link>
                <Link href="/belajar/genetika/dasar-molekular-pewarisan-sifat">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">
                            3. Dasar Molekular Pewarisan Sifat
                        </p>
                    </a>
                </Link>
                <Link href="/belajar/genetika/dari-gen-ke-protein">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">4. Dari Gen Ke Protein</p>
                    </a>
                </Link>
                <Link href="/belajar/genetika/regulasi-ekspresi-gen">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">
                            5. Regulasi Ekspresi Gen
                        </p>
                    </a>
                </Link>
                <Link href="/belajar/genetika/virus">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">6. Virus</p>
                    </a>
                </Link>
                <Link href="/belajar/genetika/bioteknologi">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">7. Bioteknologi</p>
                    </a>
                </Link>
                <Link href="/belajar/genetika/genom-dan-evolusinya">
                    <a>
                        <p className="text-blue-800 focus:text-blue-500">8. Genom Dan Evolusinya</p>
                    </a>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Daftar;
