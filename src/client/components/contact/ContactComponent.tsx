import * as React from 'react';

const ContactComponent: React.FC<IContactComponentProps> = (props) => {

    return (
        <>
            <main className="container h-100">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="display-3 font-weight-lighter">Contact</div>
                    </div>
                </div>
            </main>
        </>
    )
}

export interface IContactComponentProps { }

export default ContactComponent;