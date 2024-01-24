import BackButton from '@/components/back-button/BackButton';
import BreadCrumb from '@/components/bread-crumb/BreadCrumb';
import GeneralInnerTitle from '@/components/general-inner-title/GeneralInnerTitle';
import { Ticket } from '@/typings/generalTypes';
import Link from 'next/link';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { Metadata } from 'next';
import TicketContents from './componenets/TicketContents';
import TicketsNoData from './componenets/TicketsNoData';
import SearchBox from './componenets/SearchBox';



export const metadata: Metadata = {
    title: 'Tickets List | Mahmut Demirkıran',
    description: 'Test Description for tickets list page',
};


async function getTickets(url: string) {
    //This is SSR
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

//search butonu için arama özellikleri
interface Props {
    searchParams: {
        q: string;
    };
}
//search butonu için arama özelliklerini sağlayan fonksiyon
const TicketsListPage = async ({ searchParams }: Props) => {
    let url = process.env.NEXT_PUBLIC_BASE_URL;
    if (searchParams.q) {
        url = `${url}?q=${searchParams.q}`;
    }

    // Fetch data from url
    const tickets: Ticket[] = await getTickets(url!);

    return (
        <div className='pageGeneralClass'>
            <div className='flex justify-start items-center gap-x-4'>
                <BackButton destination='/' />
                <BreadCrumb items={[{ label: 'Tickets', route: '/tickets' }]} />
            </div>

            <div className='flex justify-between items-center'>
                <GeneralInnerTitle title='Tickets List' />
                <Link
                    href='/tickets/create'
                    className='flex items-center gap-2 hover:text-blue-600 transition-all duration-200'
                >
                    <AiOutlinePlusSquare className='text-3xl' />
                    <span className='text-2xl max-sm:hidden'>Isuue Ticket</span>
                </Link>
            </div>

            <SearchBox />

            {/* Render All Tickets */}
            {
                tickets.length ? (
                    <TicketContents ticketsData={tickets} />) : (<TicketsNoData />)
            }
        </div>
    );
};

export default TicketsListPage;