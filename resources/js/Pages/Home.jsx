import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ChatLayout from '@/Layouts/ChatLayout';
import { Head } from '@inertiajs/react';

function Home({ auth }) {
    return (
        <>
            Message
        </>
    );
}

Home.layout = (page) => {
    return  (
        <AuthenticatedLayout auth={page.props.auth.user}>
                <ChatLayout children={page} />
        </AuthenticatedLayout>
    )
}

export default Home;