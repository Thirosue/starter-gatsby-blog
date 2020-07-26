import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import { Link } from 'gatsby'

class Error404 extends React.Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff' }}>
                    <Helmet title="About" />
                    <div className={styles.hero}>
                        Page Not Found...
                    </div>
                    <Link className={styles.back} to="/">Go Home</Link>
                </div>
            </Layout>
        )
    }
}

export default Error404
