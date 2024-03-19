import 'bootstrap/dist/css/bootstrap.min.css';
import { group1 } from '../assets/images';
import SignIn from './FormSection';

const SignInSection = () => {
    return (
        <section className='d-flex justify-content-between align-items-center m-5 px-5 py-3'>
            <div style={{maxWidth:"707px"}}>
                <h1>Explore your <span >hobby</span> or <span>passion</span></h1>
                <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities… </p>
                <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                <img src={group1} alt="happy people" />
            </div>
            <SignIn />
        </section>
    )
}

export default SignInSection;