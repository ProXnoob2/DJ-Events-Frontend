import React from 'react'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'
import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className={styles.error}>
                <h1><FaExclamationTriangle></FaExclamationTriangle> 404</h1>
                <h4>Sorry, There Is Nothing Here</h4>
                <Link href='/'>Go To Home Page</Link>
            </div>
        </Layout>
    )
}
