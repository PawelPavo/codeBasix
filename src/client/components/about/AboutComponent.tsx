import * as React from 'react';

const AboutComponent: React.FC<IAboutComponentProps> = (props) => {

    return (
        <>
            <main className="container h-100">
            <div className="row">
                    <div className="col-md-12 mt-5">
                            <div className="display-3 font-weight-lighter">About Us</div>
                    </div>
                </div>
            </main>
        </>
    )
}

export interface IAboutComponentProps { }

export default AboutComponent;