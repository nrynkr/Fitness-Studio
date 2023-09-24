import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NoteFound.css'

const NoteFound = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h1 className="h2">
                                    Page Is Under Construction...Sorry!
                                </h1>


                                <button onClick={goBack}>Back</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default NoteFound