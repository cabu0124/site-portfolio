import Hero from '../components/hero';
import Projects from './projects';
import About from './about';
import Contact from './contact';

const Home = () => {
    return (
        <div>
            <section id="hero">
                <Hero />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Home;