import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'

class About extends React.Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff' }}>
                    <Helmet title="About" />
                    <div className={styles.hero}>This is a About Page</div>
                </div>
            </Layout>
        )
    }
}

export default About
