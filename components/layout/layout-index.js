import Head from 'next/head';
import CommonHeader from '../header/commonheader';
import styles from '../../styles/Home.module.css';

function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>pipalTree</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link> 
                <link href="https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link> 
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Charmonman&display=swap" rel="stylesheet"></link>
            </Head>
            <div>
                <CommonHeader></CommonHeader>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout