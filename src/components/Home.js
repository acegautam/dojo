import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <section className="jumbotron text-center">
        <div className="home container">
            <h1 className="jumbotron-heading">Dojo Home</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p className='action-btns'>
                <Link to="/posts" className="btn btn-primary my-2">Dashboard</Link>
                <Link to="/media" className="btn btn-secondary my-2">Media Card</Link>
            </p>
        </div>
    </section>
)

export default Home
