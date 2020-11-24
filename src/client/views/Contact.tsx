import * as React from 'react';
import styled from 'styled-components';
import DesktopNavigation from '../components/navigation/DesktopNavigation';
import MobileNavigation from '../components/navigation/MobileNavigation';

const Contact: React.FC<IContactProps> = (props) => {
    const [subject, setSubject] = React.useState<string>('')
    const [body, setBody] = React.useState<string>('')
    const [name, setName] = React.useState<string>('')
    const [phone, setPhone] = React.useState<any>('')

    const onSubmit = async () => {
        try {
            window.open(`mailto:codebasix@gmail.com?subject=${subject}&body=${body}, Name: ${name}, Phone: ${phone} `);
        } catch (error) {
            console.log(error);
        }
    }
    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const breakpoint = 576;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <Layout>
            <main className="container h-100">
                <div className="row justify-content-between">
                    <header className="col d-flex justify-content-between align-items-center">
                        <a href="/">
                            <img
                                style={{ height: '97px', width: '157px' }}
                                src="https://news-api.s3.us-east-2.amazonaws.com/codeBasix-2.png"
                                className="m-3"
                            />
                        </a>
                        {width < breakpoint ? <MobileNavigation /> : <DesktopNavigation />}
                    </header>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="display-3 font-weight-lighter mobile-text">Contact</div>
                </div>
                <div className="row mt-3 justify-content-center">
                    <div className="col-md-8 border p-5 shadow-sm bg-white">
                        <form className="">
                            <div className="form-group">
                                <small className="form-text text-muted">Subject</small>
                                <input
                                    value={subject}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <small className="form-text text-muted">Name</small>
                                <input
                                    value={name}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <small className="form-text text-muted">Phone</small>
                                <input
                                    value={phone}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <small className="form-text text-muted">Message</small>
                                <textarea
                                    rows={3}
                                    value={body}
                                    onChange={(e: React.ChangeEvent<any>) => setBody(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="row justify-content-center">
                                <button
                                    onClick={onSubmit}
                                    type="submit" className="btn btn-outline-primary btn-lg mt-3 px-5">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

const Layout = styled.div`
.mobile-text {
    @media not all and (min-width: 768px) {
      font-size: 50px;
    }
}

`

export interface IContactProps { }

export default Contact;