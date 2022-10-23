import { CircleLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
    return (
        < div className="bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" >
            <CircleLoader color='red' loading={loading} />
        </div >
    )
}

export default Spinner