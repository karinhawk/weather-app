import "./Modal.scss"
import cross from "../../assets/cross.svg"

const Modal = ({ toggleModal, handleUnit }) => {


    return (
        <div className='modal'>
            <div className="modal__floater">
                <div className="modal__content">
                <img onClick={toggleModal} className="modal__cross" src={cross} alt="" />
                    <div className="modal__options">
                    <h2 className="modal__options__heading">Choose Celsius or Fahrenheit</h2>
                    <div className="modal__options__div">
                    <div className="modal__options__div__c">
                    <input className="modal__options__div__c__checkbox" type="checkbox" id="c" onClick={handleUnit} />
                        <label className="modal__options__div__c__label" htmlFor="toggle_switch">Celsius</label>                       
                    </div>
                    <div className="modal__options__div__f">
                    <input className="modal__options__div__f__checkbox" type="checkbox" id="f" onClick={handleUnit}/>
                        <label className="modal__options__div__f__label" htmlFor="toggle_switch">Fahrenheit</label>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal