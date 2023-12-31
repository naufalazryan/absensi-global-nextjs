import AppLayout from '@/components/Layouts/AppLayout'
import SiswaPage from '@/components/SiswaPage'
import Head from 'next/head'

const Siswa = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Siswa
                </h2>
            }>
            <Head>
                <title>Absensi Global - Siswa</title>
            </Head>
            <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <SiswaPage />
                    </div>
                </div>
            
        </AppLayout>
    )
}

export default Siswa