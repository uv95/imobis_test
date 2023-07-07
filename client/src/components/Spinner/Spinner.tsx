import './Spinner.scss';
    
export const Spinner = () => {
    return (
        <div className="spinner">
            <div className='lds-ellipsis'>
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};