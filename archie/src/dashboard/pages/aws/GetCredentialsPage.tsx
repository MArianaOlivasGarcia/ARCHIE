

import { MyChatBot } from "../../chabot";

import icoAWS from '../../../assets/icons/aws-white.png'

export const GetCredentialsPage = () => {
  return (
    <>

      <div className="d-flex align-items-center">
        <img className="me-3" src={icoAWS} alt="AWS" height={50} />
        <h2>| Credentials & Region</h2>
      </div>

      <MyChatBot />
      
    </>
  )
}
